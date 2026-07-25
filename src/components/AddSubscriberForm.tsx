import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NewSubscriberData } from "@/hooks/useSubscribers";
import { X, UserPlus, Wifi } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  idNumber: z.string().min(1, "ID number is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
  connectionDate: z.string().min(1, "Connection date is required"),
});

type FormValues = z.infer<typeof schema>;

interface AddSubscriberFormProps {
  onAdd: (data: NewSubscriberData) => Promise<void>;
  onClose: () => void;
}

export default function AddSubscriberForm({ onAdd, onClose }: AddSubscriberFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      idNumber: "",
      name: "",
      amount: 500,
      connectionDate: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await onAdd({
        idNumber: values.idNumber,
        name: values.name,
        amount: Number(values.amount),
        connectionDate: new Date(values.connectionDate),
      });
      form.reset();
      onClose();
    } catch (err) {
      console.error("Failed to add subscriber:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-lg border border-blue-500/25 bg-card mb-6 overflow-hidden"
    >
      {/* Form header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-blue-500/5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-blue-500/15">
            <Wifi size={14} className="text-blue-400" />
          </div>
          <span className="text-sm font-semibold text-foreground">New Subscriber</span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          data-testid="close-form-btn"
        >
          <X size={14} />
        </button>
      </div>

      <div className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      ID Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. 001"
                        className="bg-background border-input text-sm h-9 font-mono"
                        data-testid="input-id-number"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Client Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Rahman Mia"
                        className="bg-background border-input text-sm h-9"
                        data-testid="input-client-name"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Monthly Bill (Taka)
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
                          ৳
                        </span>
                        <Input
                          {...field}
                          type="number"
                          min={1}
                          placeholder="500"
                          className="bg-background border-input text-sm h-9 pl-8 font-mono"
                          data-testid="input-amount"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="connectionDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Connection Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      className="bg-background border-input text-sm h-9 font-mono w-full sm:w-56"
                      data-testid="input-connection-date"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-3 pt-1">
              <Button
                type="submit"
                disabled={submitting}
                className="h-9 px-5 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="submit-add-subscriber"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <UserPlus size={14} />
                    Add Subscriber
                  </span>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                className="h-9 px-4 text-sm text-muted-foreground hover:text-foreground"
                data-testid="cancel-add-subscriber"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
