import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSubscribers } from "@/hooks/useSubscribers";
import SummaryBar from "@/components/SummaryBar";
import SubscriberRow from "@/components/SubscriberRow";
import AddSubscriberForm from "@/components/AddSubscriberForm";
import { UserPlus, Wifi, AlertTriangle, RefreshCw } from "lucide-react";
import { differenceInDays } from "date-fns";
import { Subscriber } from "@/hooks/useSubscribers";

function isActivelyPaid(sub: Subscriber): boolean {
  if (!sub.paid) return false;
  if (!sub.paidAt) return false;
  const days = differenceInDays(new Date(), sub.paidAt.toDate());
  return days < 30;
}

type FilterState = "all" | "paid" | "unpaid";

export default function Dashboard() {
  const { subscribers, loading, error, addSubscriber, markPaid, markUnpaid, saveLocation, removeSubscriber } =
    useSubscribers();
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<FilterState>("all");

  const handleTogglePaid = async (id: string, currentlyPaid: boolean) => {
    if (currentlyPaid) {
      await markUnpaid(id);
    } else {
      await markPaid(id);
    }
  };

  const filteredSubscribers = subscribers.filter((sub) => {
    if (filter === "all") return true;
    const paid = isActivelyPaid(sub);
    return filter === "paid" ? paid : !paid;
  });

  const paidCount = subscribers.filter(isActivelyPaid).length;
  const unpaidCount = subscribers.length - paidCount;

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-blue-500/15 border border-blue-500/25">
                <Wifi size={16} className="text-blue-400" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-foreground leading-none">NetAdmin</h1>
                <p className="text-xs text-muted-foreground mt-0.5">Subscriber Management</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm((v) => !v)}
            className={`flex items-center gap-2 h-8 px-3.5 rounded-md text-xs font-semibold transition-all duration-150 ${
              showForm
                ? "bg-accent text-foreground border border-border"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
            data-testid="toggle-add-form-btn"
          >
            <UserPlus size={13} />
            <span className="hidden sm:inline">{showForm ? "Cancel" : "Add Client"}</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Summary bar */}
        {!loading && !error && subscribers.length > 0 && (
          <SummaryBar subscribers={subscribers} />
        )}

        {/* Add form */}
        <AnimatePresence>
          {showForm && (
            <AddSubscriberForm
              onAdd={addSubscriber}
              onClose={() => setShowForm(false)}
            />
          )}
        </AnimatePresence>

        {/* Filter tabs */}
        {!loading && !error && subscribers.length > 0 && (
          <div className="flex items-center gap-1 mb-4" data-testid="filter-tabs">
            {[
              { key: "all" as FilterState, label: "All", count: subscribers.length },
              { key: "paid" as FilterState, label: "Paid", count: paidCount },
              { key: "unpaid" as FilterState, label: "Overdue", count: unpaidCount },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 h-7 px-3 rounded-md text-xs font-semibold transition-all duration-150 ${
                  filter === tab.key
                    ? "bg-accent text-foreground border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`filter-${tab.key}`}
              >
                {tab.label}
                <span
                  className={`inline-flex items-center justify-center w-4 h-4 rounded text-[10px] font-bold ${
                    filter === tab.key
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Table header */}
        {!loading && !error && filteredSubscribers.length > 0 && (
          <div className="hidden md:grid grid-cols-[28px_1fr_90px_90px_72px_120px] gap-3 px-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <div />
            <div>Client</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Cycle</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="space-y-2.5" data-testid="loading-state">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-lg bg-card border border-border animate-pulse"
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div
            className="rounded-lg border border-red-500/25 bg-red-500/10 p-6 text-center"
            data-testid="error-state"
          >
            <AlertTriangle size={24} className="text-red-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 flex items-center gap-2 mx-auto text-xs text-muted-foreground hover:text-foreground"
            >
              <RefreshCw size={12} />
              Retry
            </button>
          </div>
        )}

        {/* Subscriber list */}
        {!loading && !error && (
          <motion.div className="space-y-2" layout data-testid="subscriber-list">
            <AnimatePresence mode="popLayout">
              {filteredSubscribers.map((sub, index) => (
                <SubscriberRow
                  key={sub.id}
                  subscriber={sub}
                  onTogglePaid={handleTogglePaid}
                  onSaveLocation={saveLocation}
                  onDelete={removeSubscriber}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && !error && subscribers.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-border bg-card p-12 text-center"
            data-testid="empty-state"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Wifi size={24} className="text-blue-400" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">No subscribers yet</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs mx-auto">
              Add your first client to start tracking their billing cycle and payment status.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 h-9 px-5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              data-testid="empty-add-btn"
            >
              <UserPlus size={14} />
              Add First Client
            </button>
          </motion.div>
        )}

        {/* Empty filtered state */}
        {!loading && !error && subscribers.length > 0 && filteredSubscribers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-lg border border-border bg-card p-8 text-center"
            data-testid="empty-filtered-state"
          >
            <p className="text-sm text-muted-foreground">No subscribers match this filter.</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {subscribers.length} client{subscribers.length !== 1 ? "s" : ""} tracked
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            30-day billing cycles
          </p>
        </div>
      </footer>
    </div>
  );
}
