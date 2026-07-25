import { useState } from "react";
import { motion } from "framer-motion";
import { differenceInDays, format } from "date-fns";
import { Subscriber, SubscriberLocation } from "@/hooks/useSubscribers";
import { Trash2, CheckCheck, MapPin } from "lucide-react";

interface SubscriberRowProps {
  subscriber: Subscriber;
  onTogglePaid: (id: string, currentlyPaid: boolean) => Promise<void>;
  onSaveLocation: (id: string, location: SubscriberLocation) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  index: number;
}

function isActivelyPaid(sub: Subscriber): boolean {
  if (!sub.paid) return false;
  if (!sub.paidAt) return false;
  const paidDate = sub.paidAt.toDate();
  const days = differenceInDays(new Date(), paidDate);
  return days < 30;
}

function getDaysInfo(sub: Subscriber): { label: string; urgent: boolean } {
  if (!sub.paid || !sub.paidAt) {
    return { label: "Not paid", urgent: true };
  }
  const paidDate = sub.paidAt.toDate();
  const days = differenceInDays(new Date(), paidDate);
  if (days >= 30) {
    return { label: `${days}d overdue`, urgent: true };
  }
  const remaining = 30 - days;
  return { label: `${remaining}d left`, urgent: remaining <= 5 };
}

export default function SubscriberRow({
  subscriber,
  onTogglePaid,
  onSaveLocation,
  onDelete,
  index,
}: SubscriberRowProps) {
  const [toggling, setToggling] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleSaveLocation = async () => {
    setLocating(true);
    setLocError(null);
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
        })
      );
      const { latitude: lat, longitude: lng } = pos.coords;
      // Reverse geocode via Nominatim (free, no API key)
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
        { headers: { "Accept-Language": "en" } }
      );
      const data = await res.json();
      const address: string =
        data.display_name ?? `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      await onSaveLocation(subscriber.id, { lat, lng, address });
    } catch (err: unknown) {
      if (err instanceof GeolocationPositionError) {
        setLocError(
          err.code === 1
            ? "Location permission denied"
            : "Could not get location"
        );
      } else {
        setLocError("Location failed");
      }
    } finally {
      setLocating(false);
    }
  };

  const paid = isActivelyPaid(subscriber);
  const daysInfo = getDaysInfo(subscriber);

  const connectionDate = subscriber.connectionDate?.toDate
    ? subscriber.connectionDate.toDate()
    : new Date();

  const handleToggle = async () => {
    setToggling(true);
    try {
      await onTogglePaid(subscriber.id, paid);
    } finally {
      setToggling(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await onDelete(subscriber.id);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20, scale: 0.97 }}
      transition={{ duration: 0.22, delay: index * 0.04, ease: "easeOut" }}
      className={`
        group relative rounded-lg border transition-all duration-200
        ${paid
          ? "border-emerald-500/20 bg-card hover:border-emerald-500/35"
          : "border-red-500/20 bg-card hover:border-red-500/35"
        }
        ${deleting ? "opacity-40 pointer-events-none" : ""}
      `}
      data-testid={`subscriber-row-${subscriber.id}`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full ${paid ? "bg-emerald-500" : "bg-red-500"}`}
      />

      <div className="flex items-center gap-3 px-5 py-3.5 pl-6">
        {/* Status indicator */}
        <div className="flex-shrink-0 flex items-center justify-center w-7">
          <div
            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${paid ? "status-paid" : "status-unpaid"}`}
            data-testid={`status-indicator-${subscriber.id}`}
          />
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p
              className="text-sm font-semibold text-foreground truncate"
              data-testid={`subscriber-name-${subscriber.id}`}
            >
              {subscriber.name}
            </p>
            {subscriber.idNumber && (
              <span className="flex-shrink-0 font-mono text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                #{subscriber.idNumber}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Connected {format(connectionDate, "dd MMM yyyy")}
          </p>
        </div>

        {/* Amount */}
        <div className="flex-shrink-0 text-right hidden sm:block min-w-[80px]">
          <p
            className="font-mono text-sm font-semibold text-foreground"
            data-testid={`subscriber-amount-${subscriber.id}`}
          >
            ৳{subscriber.amount.toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">/month</p>
        </div>

        {/* Days info */}
        <div className="flex-shrink-0 hidden md:block min-w-[80px] text-right">
          <p
            className={`font-mono text-xs font-medium ${
              paid && !daysInfo.urgent
                ? "text-emerald-400"
                : daysInfo.urgent
                ? "text-red-400"
                : "text-amber-400"
            }`}
            data-testid={`days-info-${subscriber.id}`}
          >
            {daysInfo.label}
          </p>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center gap-2">
          {paid ? (
            /* Within active 30-day cycle — static display, not clickable */
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 cursor-default select-none"
              data-testid={`toggle-btn-${subscriber.id}`}
            >
              <CheckCheck size={12} />
              <span className="hidden sm:inline">Paid</span>
            </span>
          ) : (
            /* Overdue or unpaid — clickable to mark paid */
            <button
              onClick={handleToggle}
              disabled={toggling}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 disabled:opacity-50 bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/25"
              data-testid={`toggle-btn-${subscriber.id}`}
            >
              {toggling ? (
                <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <CheckCheck size={12} />
              )}
              <span className="hidden sm:inline">Mark Paid</span>
            </button>
          )}

          {/* Location button — only shown until location is saved */}
          {!subscriber.location ? (
            <button
              onClick={handleSaveLocation}
              disabled={locating}
              title={locError ?? "Save current location"}
              className={`flex items-center justify-center w-7 h-7 rounded-md border transition-all duration-150 disabled:opacity-60
                ${locError
                  ? "text-amber-400 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20"
                  : "text-blue-400 border-blue-500/25 bg-blue-500/10 hover:bg-blue-500/20"
                }`}
              data-testid={`location-btn-${subscriber.id}`}
            >
              {locating ? (
                <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <MapPin size={12} />
              )}
            </button>
          ) : (
            /* Location saved — click to open Google Maps directions */
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${subscriber.location.lat},${subscriber.location.lng}&travelmode=driving`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open in Google Maps\n${subscriber.location.address}`}
              className="flex items-center justify-center w-7 h-7 rounded-md border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/25 hover:text-emerald-300 transition-all duration-150"
              data-testid={`location-saved-${subscriber.id}`}
            >
              <MapPin size={12} />
            </a>
          )}

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground border border-border hover:bg-red-500/15 hover:text-red-400 hover:border-red-500/25 transition-all duration-150 disabled:opacity-50"
            data-testid={`delete-btn-${subscriber.id}`}
          >
            {deleting ? (
              <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <Trash2 size={12} />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
