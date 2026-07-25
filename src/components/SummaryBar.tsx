import { differenceInDays } from "date-fns";
import { Subscriber } from "@/hooks/useSubscribers";
import { Users, CheckCircle, AlertCircle, Banknote } from "lucide-react";

interface SummaryBarProps {
  subscribers: Subscriber[];
}

function isActivelyPaid(sub: Subscriber): boolean {
  if (!sub.paid) return false;
  if (!sub.paidAt) return false;
  const paidDate = sub.paidAt.toDate();
  const days = differenceInDays(new Date(), paidDate);
  return days < 30;
}

export default function SummaryBar({ subscribers }: SummaryBarProps) {
  const total = subscribers.length;
  const paid = subscribers.filter(isActivelyPaid).length;
  const unpaid = total - paid;
  const revenue = subscribers.reduce((sum, s) => sum + s.amount, 0);

  const stats = [
    {
      label: "Total Clients",
      value: total,
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      mono: false,
    },
    {
      label: "Active / Paid",
      value: paid,
      icon: CheckCircle,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20",
      mono: false,
    },
    {
      label: "Overdue",
      value: unpaid,
      icon: AlertCircle,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20",
      mono: false,
    },
    {
      label: "Monthly Revenue",
      value: `৳${revenue.toLocaleString()}`,
      icon: Banknote,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
      mono: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6" data-testid="summary-bar">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`relative rounded-lg border ${stat.borderColor} ${stat.bgColor} px-4 py-4 flex items-center gap-3`}
            data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className={`p-2 rounded-md ${stat.bgColor}`}>
              <Icon size={18} className={stat.color} strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-0.5">
                {stat.label}
              </p>
              <p
                className={`text-xl font-bold leading-none ${stat.color} ${stat.mono ? "font-mono" : ""}`}
                data-testid={`stat-value-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
