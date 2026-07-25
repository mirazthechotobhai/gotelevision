import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface SubscriberLocation {
  lat: number;
  lng: number;
  address: string;
}

export interface Subscriber {
  id: string;
  idNumber: string;
  name: string;
  amount: number;
  connectionDate: Timestamp;
  paid: boolean;
  paidAt: Timestamp | null;
  location: SubscriberLocation | null;
}

export interface NewSubscriberData {
  idNumber: string;
  name: string;
  amount: number;
  connectionDate: Date;
}

export function useSubscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const col = collection(db, "subscribers");
    const unsubscribe = onSnapshot(
      col,
      (snapshot) => {
        const data: Subscriber[] = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Subscriber, "id">),
        }));
        // Sort client-side to avoid needing a Firestore index
        data.sort((a, b) => {
          const aDate = a.connectionDate?.toDate?.()?.getTime() ?? 0;
          const bDate = b.connectionDate?.toDate?.()?.getTime() ?? 0;
          return bDate - aDate;
        });
        setSubscribers(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Firestore error:", err);
        setError("Failed to load subscribers. Check your connection.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addSubscriber = async (data: NewSubscriberData) => {
    await addDoc(collection(db, "subscribers"), {
      idNumber: data.idNumber,
      name: data.name,
      amount: data.amount,
      connectionDate: Timestamp.fromDate(data.connectionDate),
      paid: false,
      paidAt: null,
    });
  };

  const markPaid = async (id: string) => {
    const ref = doc(db, "subscribers", id);
    await updateDoc(ref, {
      paid: true,
      paidAt: serverTimestamp(),
    });
  };

  const markUnpaid = async (id: string) => {
    const ref = doc(db, "subscribers", id);
    await updateDoc(ref, {
      paid: false,
    });
  };

  const saveLocation = async (id: string, location: SubscriberLocation) => {
    const ref = doc(db, "subscribers", id);
    await updateDoc(ref, { location });
  };

  const removeSubscriber = async (id: string) => {
    const ref = doc(db, "subscribers", id);
    await deleteDoc(ref);
  };

  return {
    subscribers,
    loading,
    error,
    addSubscriber,
    markPaid,
    markUnpaid,
    saveLocation,
    removeSubscriber,
  };
}
