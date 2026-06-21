import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/manage.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const useState = __vite__cjsImport1_react["useState"]; const useMemo = __vite__cjsImport1_react["useMemo"];
import { Layout } from "/src/components/layout.tsx";
import { useListChannels, useGetPlaylistStats, useDeleteChannel, getListChannelsQueryKey, getGetPlaylistStatsQueryKey } from "/@fs/home/runner/workspace/lib/api-client-react/src/index.ts";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { ChannelFormDialog } from "/src/components/channel-form-dialog.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "/src/components/ui/table.tsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "/src/components/ui/alert-dialog.tsx";
import {
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Copy,
  Link as LinkIcon,
  Tv
} from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { useToast } from "/src/hooks/use-toast.ts";
import { useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=1af48463";
export default function Manage() {
  _s();
  const { data: channels, isLoading } = useListChannels({
    query: { queryKey: getListChannelsQueryKey() }
  });
  const { data: stats } = useGetPlaylistStats({
    query: { queryKey: getGetPlaylistStatsQueryKey() }
  });
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingChannel, setEditingChannel] = useState(void 0);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const deleteChannel = useDeleteChannel();
  const filteredChannels = useMemo(() => {
    if (!channels) return [];
    return channels.filter(
      (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.group && c.group.toLowerCase().includes(search.toLowerCase())
    );
  }, [channels, search]);
  const handleEdit = (channel) => {
    setEditingChannel(channel);
    setFormOpen(true);
  };
  const handleDelete = (id) => {
    deleteChannel.mutate({ id }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListChannelsQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetPlaylistStatsQueryKey() });
        toast({ title: "Channel deleted" });
      },
      onError: () => {
        toast({ title: "Failed to delete channel", variant: "destructive" });
      }
    });
  };
  const copyPlaylistUrl = () => {
    if (!stats?.playlistUrl) return;
    const url = new URL(stats.playlistUrl, window.location.origin).toString();
    navigator.clipboard.writeText(url);
    toast({ title: "Playlist URL copied to clipboard" });
  };
  return /* @__PURE__ */ jsxDEV(Layout, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:98:4", "data-component-name": "Layout", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:99:6", "data-component-name": "div", className: "space-y-8 max-w-6xl mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:101:8", "data-component-name": "div", className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:102:10", "data-component-name": "div", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:103:12", "data-component-name": "h1", className: "text-3xl font-bold tracking-tight mb-2", children: "Manage Channels" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:104:12", "data-component-name": "p", className: "text-muted-foreground", children: "Add, edit, or remove channels from your IPTV broadcast list." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:107:10", "data-component-name": "div", className: "flex flex-col gap-2 w-full md:w-auto", children: [
          stats && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:109:14", "data-component-name": "div", className: "flex items-center gap-2 p-2 px-3 rounded-lg border border-primary/30 bg-primary/5 text-sm", children: [
            /* @__PURE__ */ jsxDEV(LinkIcon, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:110:16", "data-component-name": "LinkIcon", className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:111:16", "data-component-name": "span", className: "font-mono text-muted-foreground truncate max-w-[200px] md:max-w-xs", children: new URL(stats.playlistUrl, window.location.origin).toString() }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:114:16", "data-component-name": "Button", variant: "ghost", size: "icon", className: "h-7 w-7 ml-auto shrink-0 hover:text-primary", onClick: copyPlaylistUrl, children: /* @__PURE__ */ jsxDEV(Copy, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:115:18", "data-component-name": "Copy", className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:120:12", "data-component-name": "div", className: "flex gap-2 w-full", children: /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:121:14",
              "data-component-name": "Button",
              onClick: () => {
                setEditingChannel(void 0);
                setFormOpen(true);
              },
              className: "w-full shadow-lg shadow-primary/20",
              children: [
                /* @__PURE__ */ jsxDEV(Plus, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:128:16", "data-component-name": "Plus", className: "w-4 h-4 mr-2" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this),
                "Add Channel"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 121,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:135:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:136:10", "data-component-name": "div", className: "p-6 rounded-xl border border-border/50 bg-card shadow-sm flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:137:12", "data-component-name": "h3", className: "text-4xl font-bold text-foreground mb-1", children: stats?.totalChannels || 0 }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:138:12", "data-component-name": "p", className: "text-sm text-muted-foreground font-medium uppercase tracking-wider", children: "Total Channels" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:140:10", "data-component-name": "div", className: "p-6 rounded-xl border border-border/50 bg-card shadow-sm flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:141:12", "data-component-name": "h3", className: "text-4xl font-bold text-foreground mb-1", children: stats?.groups?.length || 0 }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:142:12", "data-component-name": "p", className: "text-sm text-muted-foreground font-medium uppercase tracking-wider", children: "Active Groups" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:144:10", "data-component-name": "div", className: "p-6 rounded-xl border border-border/50 bg-card shadow-sm flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:145:12", "data-component-name": "h3", className: "text-4xl font-bold text-primary mb-1", children: "M3U" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:146:12", "data-component-name": "p", className: "text-sm text-muted-foreground font-medium uppercase tracking-wider", children: "Playlist Format" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:150:8", "data-component-name": "div", className: "rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:151:10", "data-component-name": "div", className: "p-4 border-b border-border/50 flex flex-col sm:flex-row gap-4 items-center justify-between bg-muted/20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:152:12", "data-component-name": "div", className: "relative w-full sm:max-w-xs", children: [
          /* @__PURE__ */ jsxDEV(Search, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:153:14", "data-component-name": "Search", className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:154:14",
              "data-component-name": "Input",
              placeholder: "Search channels or groups...",
              className: "pl-9 bg-background",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 154,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:163:10", "data-component-name": "div", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV(Table, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:164:12", "data-component-name": "Table", children: [
          /* @__PURE__ */ jsxDEV(TableHeader, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:165:14", "data-component-name": "TableHeader", className: "bg-muted/30", children: /* @__PURE__ */ jsxDEV(TableRow, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:166:16", "data-component-name": "TableRow", children: [
            /* @__PURE__ */ jsxDEV(TableHead, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:167:18", "data-component-name": "TableHead", className: "w-16", children: "Logo" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(TableHead, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:168:18", "data-component-name": "TableHead", children: "Name" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(TableHead, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:169:18", "data-component-name": "TableHead", children: "Group" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(TableHead, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:170:18", "data-component-name": "TableHead", className: "hidden md:table-cell", children: "URL" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 170,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(TableHead, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:171:18", "data-component-name": "TableHead", className: "w-[100px] text-right", children: "Actions" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 171,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(TableBody, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:174:14", "data-component-name": "TableBody", children: isLoading ? /* @__PURE__ */ jsxDEV(TableRow, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:176:18", "data-component-name": "TableRow", children: /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:177:20", "data-component-name": "TableCell", colSpan: 5, className: "h-32 text-center text-muted-foreground", children: "Loading channels..." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) : filteredChannels.length === 0 ? /* @__PURE__ */ jsxDEV(TableRow, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:182:18", "data-component-name": "TableRow", children: /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:183:20", "data-component-name": "TableCell", colSpan: 5, className: "h-32 text-center text-muted-foreground", children: "No channels found. Add one to get started." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this) : filteredChannels.map(
            (channel) => /* @__PURE__ */ jsxDEV(TableRow, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:189:20", "data-component-name": "TableRow", className: "group hover:bg-muted/30", children: [
              /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:190:22", "data-component-name": "TableCell", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:191:24", "data-component-name": "div", className: "w-8 h-8 rounded bg-background border border-border flex items-center justify-center overflow-hidden", children: channel.logoUrl ? /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:193:28", "data-component-name": "img", src: channel.logoUrl, alt: channel.name, className: "w-full h-full object-contain p-0.5" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 193,
                columnNumber: 23
              }, this) : /* @__PURE__ */ jsxDEV(Tv, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:195:28", "data-component-name": "Tv", className: "w-4 h-4 text-muted-foreground/50" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 195,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 191,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 190,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:199:22", "data-component-name": "TableCell", className: "font-medium", children: channel.name }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 199,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:200:22", "data-component-name": "TableCell", children: channel.group ? /* @__PURE__ */ jsxDEV(Badge, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:202:26", "data-component-name": "Badge", variant: "secondary", className: "font-normal text-xs", children: channel.group }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 202,
                columnNumber: 21
              }, this) : /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:204:26", "data-component-name": "span", className: "text-muted-foreground/50 text-sm", children: "—" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 204,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 200,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:207:22", "data-component-name": "TableCell", className: "hidden md:table-cell", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:208:24", "data-component-name": "div", className: "font-mono text-xs text-muted-foreground truncate max-w-[300px]", children: channel.url }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 208,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 207,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(TableCell, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:212:22", "data-component-name": "TableCell", className: "text-right", children: /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:213:24", "data-component-name": "DropdownMenu", children: [
                /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:214:26", "data-component-name": "DropdownMenuTrigger", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:215:28", "data-component-name": "Button", variant: "ghost", size: "icon", className: "h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxDEV(MoreHorizontal, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:216:30", "data-component-name": "MoreHorizontal", className: "h-4 w-4" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                  lineNumber: 216,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                  lineNumber: 215,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                  lineNumber: 214,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:219:26", "data-component-name": "DropdownMenuContent", align: "end", className: "w-[160px]", children: [
                  /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:220:28", "data-component-name": "DropdownMenuItem", onClick: () => handleEdit(channel), children: [
                    /* @__PURE__ */ jsxDEV(Pencil, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:221:30", "data-component-name": "Pencil", className: "mr-2 h-4 w-4" }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                      lineNumber: 221,
                      columnNumber: 31
                    }, this),
                    "Edit"
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                    lineNumber: 220,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV(AlertDialog, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:224:28", "data-component-name": "AlertDialog", children: [
                    /* @__PURE__ */ jsxDEV(AlertDialogTrigger, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:225:30", "data-component-name": "AlertDialogTrigger", asChild: true, children: /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:226:32", "data-component-name": "DropdownMenuItem", onSelect: (e) => e.preventDefault(), className: "text-destructive focus:bg-destructive/10 focus:text-destructive", children: [
                      /* @__PURE__ */ jsxDEV(Trash2, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:227:34", "data-component-name": "Trash2", className: "mr-2 h-4 w-4" }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                        lineNumber: 227,
                        columnNumber: 35
                      }, this),
                      "Delete"
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                      lineNumber: 226,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                      lineNumber: 225,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV(AlertDialogContent, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:231:30", "data-component-name": "AlertDialogContent", children: [
                      /* @__PURE__ */ jsxDEV(AlertDialogHeader, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:232:32", "data-component-name": "AlertDialogHeader", children: [
                        /* @__PURE__ */ jsxDEV(AlertDialogTitle, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:233:34", "data-component-name": "AlertDialogTitle", children: "Delete Channel" }, void 0, false, {
                          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                          lineNumber: 233,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV(AlertDialogDescription, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:234:34", "data-component-name": "AlertDialogDescription", children: [
                          "Are you sure you want to delete ",
                          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:235:68", "data-component-name": "span", className: "font-bold text-foreground", children: channel.name }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                            lineNumber: 235,
                            columnNumber: 69
                          }, this),
                          "? This action cannot be undone."
                        ] }, void 0, true, {
                          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                          lineNumber: 234,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                        lineNumber: 232,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV(AlertDialogFooter, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:238:32", "data-component-name": "AlertDialogFooter", children: [
                        /* @__PURE__ */ jsxDEV(AlertDialogCancel, { "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:239:34", "data-component-name": "AlertDialogCancel", children: "Cancel" }, void 0, false, {
                          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                          lineNumber: 239,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV(
                          AlertDialogAction,
                          {
                            "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:240:34",
                            "data-component-name": "AlertDialogAction",
                            onClick: () => handleDelete(channel.id),
                            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            children: "Delete"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                            lineNumber: 240,
                            columnNumber: 35
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                        lineNumber: 238,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                      lineNumber: 231,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                    lineNumber: 224,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                  lineNumber: 219,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 213,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this)
            ] }, channel.id, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
              lineNumber: 189,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      ChannelFormDialog,
      {
        "data-replit-metadata": "artifacts/iptv-app/src/pages/manage.tsx:261:6",
        "data-component-name": "ChannelFormDialog",
        open: formOpen,
        onOpenChange: setFormOpen,
        channel: editingChannel
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
        lineNumber: 261,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
_s(Manage, "ngeGCObug8BPuVw5cYKTUonOwxM=", false, function() {
  return [useListChannels, useGetPlaylistStats, useToast, useQueryClient, useDeleteChannel];
});
_c = Manage;
var _c;
$RefreshReg$(_c, "Manage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/pages/manage.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUUE7QUFBQSx5QkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWdCQTtBQUFBLHVCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXdCQTtBQUFBLHFCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQThCQTtBQUFBLG1CQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXFDQSxLQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXVDQTtBQUFBLGlCQTlEYUYsUUFBUUUsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkErREE7QUFBQSxVQUNELEtBL0VMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaUZBO0FBQUEsYUEzRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTRGQSxLQTdGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOEZBO0FBQUEsV0EzR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTRHQTtBQUFBLFNBL0pGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnS0E7QUFBQSxJQUVBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFBZ0I7QUFBQTtBQUFBLFFBQ2YsTUFBTWxCO0FBQUFBLFFBQ04sY0FBY0M7QUFBQUEsUUFDZCxTQUFTQztBQUFBQTtBQUFBQSxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUd5QjtBQUFBLE9BdEszQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBd0tBO0FBRUo7QUFBQVgsR0E3TndCRCxRQUFNO0FBQUEsVUFDVXZDLGlCQUlkQyxxQkFPTm9DLFVBQ0VDLGdCQUNFcEMsZ0JBQWdCO0FBQUE7QUFBQSxLQWRoQnFDO0FBQU0sSUFBQXVEO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTWVtbyIsIkxheW91dCIsInVzZUxpc3RDaGFubmVscyIsInVzZUdldFBsYXlsaXN0U3RhdHMiLCJ1c2VEZWxldGVDaGFubmVsIiwiZ2V0TGlzdENoYW5uZWxzUXVlcnlLZXkiLCJnZXRHZXRQbGF5bGlzdFN0YXRzUXVlcnlLZXkiLCJCdXR0b24iLCJJbnB1dCIsIkNoYW5uZWxGb3JtRGlhbG9nIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwiQWxlcnREaWFsb2ciLCJBbGVydERpYWxvZ0FjdGlvbiIsIkFsZXJ0RGlhbG9nQ2FuY2VsIiwiQWxlcnREaWFsb2dDb250ZW50IiwiQWxlcnREaWFsb2dEZXNjcmlwdGlvbiIsIkFsZXJ0RGlhbG9nRm9vdGVyIiwiQWxlcnREaWFsb2dIZWFkZXIiLCJBbGVydERpYWxvZ1RpdGxlIiwiQWxlcnREaWFsb2dUcmlnZ2VyIiwiUGx1cyIsIlNlYXJjaCIsIk1vcmVIb3Jpem9udGFsIiwiUGVuY2lsIiwiVHJhc2gyIiwiQ29weSIsIkxpbmsiLCJMaW5rSWNvbiIsIlR2IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiQmFkZ2UiLCJ1c2VUb2FzdCIsInVzZVF1ZXJ5Q2xpZW50IiwiTWFuYWdlIiwiX3MiLCJkYXRhIiwiY2hhbm5lbHMiLCJpc0xvYWRpbmciLCJxdWVyeSIsInF1ZXJ5S2V5Iiwic3RhdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmb3JtT3BlbiIsInNldEZvcm1PcGVuIiwiZWRpdGluZ0NoYW5uZWwiLCJzZXRFZGl0aW5nQ2hhbm5lbCIsInVuZGVmaW5lZCIsInRvYXN0IiwicXVlcnlDbGllbnQiLCJkZWxldGVDaGFubmVsIiwiZmlsdGVyZWRDaGFubmVscyIsImZpbHRlciIsImMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImdyb3VwIiwiaGFuZGxlRWRpdCIsImNoYW5uZWwiLCJoYW5kbGVEZWxldGUiLCJpZCIsIm11dGF0ZSIsIm9uU3VjY2VzcyIsImludmFsaWRhdGVRdWVyaWVzIiwidGl0bGUiLCJvbkVycm9yIiwidmFyaWFudCIsImNvcHlQbGF5bGlzdFVybCIsInBsYXlsaXN0VXJsIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ0b1N0cmluZyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvdGFsQ2hhbm5lbHMiLCJncm91cHMiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJsb2dvVXJsIiwicHJldmVudERlZmF1bHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYW5hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlTGlzdENoYW5uZWxzLCB1c2VHZXRQbGF5bGlzdFN0YXRzLCB1c2VEZWxldGVDaGFubmVsLCBnZXRMaXN0Q2hhbm5lbHNRdWVyeUtleSwgZ2V0R2V0UGxheWxpc3RTdGF0c1F1ZXJ5S2V5IH0gZnJvbSBcIkB3b3Jrc3BhY2UvYXBpLWNsaWVudC1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQ2hhbm5lbEZvcm1EaWFsb2cgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NoYW5uZWwtZm9ybS1kaWFsb2dcIjtcbmltcG9ydCB7IFxuICBUYWJsZSwgXG4gIFRhYmxlQm9keSwgXG4gIFRhYmxlQ2VsbCwgXG4gIFRhYmxlSGVhZCwgXG4gIFRhYmxlSGVhZGVyLCBcbiAgVGFibGVSb3cgXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFibGVcIjtcbmltcG9ydCB7IFxuICBBbGVydERpYWxvZyxcbiAgQWxlcnREaWFsb2dBY3Rpb24sXG4gIEFsZXJ0RGlhbG9nQ2FuY2VsLFxuICBBbGVydERpYWxvZ0NvbnRlbnQsXG4gIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24sXG4gIEFsZXJ0RGlhbG9nRm9vdGVyLFxuICBBbGVydERpYWxvZ0hlYWRlcixcbiAgQWxlcnREaWFsb2dUaXRsZSxcbiAgQWxlcnREaWFsb2dUcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FsZXJ0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgXG4gIFBsdXMsIFxuICBTZWFyY2gsIFxuICBNb3JlSG9yaXpvbnRhbCwgXG4gIFBlbmNpbCwgXG4gIFRyYXNoMiwgXG4gIENvcHksXG4gIExpbmsgYXMgTGlua0ljb24sXG4gIFR2XG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB0eXBlIHsgQ2hhbm5lbCB9IGZyb20gXCJAd29ya3NwYWNlL2FwaS1jbGllbnQtcmVhY3Qvc3JjL2dlbmVyYXRlZC9hcGkuc2NoZW1hc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YTogY2hhbm5lbHMsIGlzTG9hZGluZyB9ID0gdXNlTGlzdENoYW5uZWxzKHtcbiAgICBxdWVyeTogeyBxdWVyeUtleTogZ2V0TGlzdENoYW5uZWxzUXVlcnlLZXkoKSB9XG4gIH0pO1xuICBcbiAgY29uc3QgeyBkYXRhOiBzdGF0cyB9ID0gdXNlR2V0UGxheWxpc3RTdGF0cyh7XG4gICAgcXVlcnk6IHsgcXVlcnlLZXk6IGdldEdldFBsYXlsaXN0U3RhdHNRdWVyeUtleSgpIH1cbiAgfSk7XG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZm9ybU9wZW4sIHNldEZvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRpbmdDaGFubmVsLCBzZXRFZGl0aW5nQ2hhbm5lbF0gPSB1c2VTdGF0ZTxDaGFubmVsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IGRlbGV0ZUNoYW5uZWwgPSB1c2VEZWxldGVDaGFubmVsKCk7XG5cbiAgY29uc3QgZmlsdGVyZWRDaGFubmVscyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY2hhbm5lbHMpIHJldHVybiBbXTtcbiAgICByZXR1cm4gY2hhbm5lbHMuZmlsdGVyKGMgPT4gXG4gICAgICBjLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHwgXG4gICAgICAoYy5ncm91cCAmJiBjLmdyb3VwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxuICAgICk7XG4gIH0sIFtjaGFubmVscywgc2VhcmNoXSk7XG5cbiAgY29uc3QgaGFuZGxlRWRpdCA9IChjaGFubmVsOiBDaGFubmVsKSA9PiB7XG4gICAgc2V0RWRpdGluZ0NoYW5uZWwoY2hhbm5lbCk7XG4gICAgc2V0Rm9ybU9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBkZWxldGVDaGFubmVsLm11dGF0ZSh7IGlkIH0sIHtcbiAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBnZXRMaXN0Q2hhbm5lbHNRdWVyeUtleSgpIH0pO1xuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBnZXRHZXRQbGF5bGlzdFN0YXRzUXVlcnlLZXkoKSB9KTtcbiAgICAgICAgdG9hc3QoeyB0aXRsZTogXCJDaGFubmVsIGRlbGV0ZWRcIiB9KTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRvYXN0KHsgdGl0bGU6IFwiRmFpbGVkIHRvIGRlbGV0ZSBjaGFubmVsXCIsIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIiB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb3B5UGxheWxpc3RVcmwgPSAoKSA9PiB7XG4gICAgaWYgKCFzdGF0cz8ucGxheWxpc3RVcmwpIHJldHVybjtcbiAgICAvLyBUaGUgc3RhdHMucGxheWxpc3RVcmwgbWlnaHQgYmUgcmVsYXRpdmUsIGVuc3VyZSBpdCdzIGFic29sdXRlXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzdGF0cy5wbGF5bGlzdFVybCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbikudG9TdHJpbmcoKTtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpO1xuICAgIHRvYXN0KHsgdGl0bGU6IFwiUGxheWxpc3QgVVJMIGNvcGllZCB0byBjbGlwYm9hcmRcIiB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOCBtYXgtdy02eGwgbXgtYXV0byBweC00IHB5LTZcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWQ6aXRlbXMtZW5kIGdhcC00XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgbWItMlwiPk1hbmFnZSBDaGFubmVsczwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5BZGQsIGVkaXQsIG9yIHJlbW92ZSBjaGFubmVscyBmcm9tIHlvdXIgSVBUViBicm9hZGNhc3QgbGlzdC48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHctZnVsbCBtZDp3LWF1dG9cIj5cbiAgICAgICAgICAgIHtzdGF0cyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0yIHB4LTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXByaW1hcnkvMzAgYmctcHJpbWFyeS81IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8TGlua0ljb24gY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW11dGVkLWZvcmVncm91bmQgdHJ1bmNhdGUgbWF4LXctWzIwMHB4XSBtZDptYXgtdy14c1wiPlxuICAgICAgICAgICAgICAgICAge25ldyBVUkwoc3RhdHMucGxheWxpc3RVcmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTcgdy03IG1sLWF1dG8gc2hyaW5rLTAgaG92ZXI6dGV4dC1wcmltYXJ5XCIgb25DbGljaz17Y29weVBsYXlsaXN0VXJsfT5cbiAgICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RWRpdGluZ0NoYW5uZWwodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgIHNldEZvcm1PcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3ctbGcgc2hhZG93LXByaW1hcnkvMjBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICBBZGQgQ2hhbm5lbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItYm9yZGVyLzUwIGJnLWNhcmQgc2hhZG93LXNtIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0xXCI+e3N0YXRzPy50b3RhbENoYW5uZWxzIHx8IDB9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlRvdGFsIENoYW5uZWxzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ib3JkZXIvNTAgYmctY2FyZCBzaGFkb3ctc20gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTFcIj57c3RhdHM/Lmdyb3Vwcz8ubGVuZ3RoIHx8IDB9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPkFjdGl2ZSBHcm91cHM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBiZy1jYXJkIHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMVwiPk0zVTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5QbGF5bGlzdCBGb3JtYXQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBiZy1jYXJkIHNoYWRvdy1zbSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItYiBib3JkZXItYm9yZGVyLzUwIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1tdXRlZC8yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206bWF4LXcteHNcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIuNSB0b3AtMi41IGgtNCB3LTQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY2hhbm5lbHMgb3IgZ3JvdXBzLi4uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC05IGJnLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIGNsYXNzTmFtZT1cImJnLW11dGVkLzMwXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ3LTE2XCI+TG9nbzwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5OYW1lPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPkdyb3VwPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cImhpZGRlbiBtZDp0YWJsZS1jZWxsXCI+VVJMPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInctWzEwMHB4XSB0ZXh0LXJpZ2h0XCI+QWN0aW9uczwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs1fSBjbGFzc05hbWU9XCJoLTMyIHRleHQtY2VudGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgY2hhbm5lbHMuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICkgOiBmaWx0ZXJlZENoYW5uZWxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs1fSBjbGFzc05hbWU9XCJoLTMyIHRleHQtY2VudGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE5vIGNoYW5uZWxzIGZvdW5kLiBBZGQgb25lIHRvIGdldCBzdGFydGVkLlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2NoYW5uZWwuaWR9IGNsYXNzTmFtZT1cImdyb3VwIGhvdmVyOmJnLW11dGVkLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkIGJnLWJhY2tncm91bmQgYm9yZGVyIGJvcmRlci1ib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFubmVsLmxvZ29VcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwubG9nb1VybH0gYWx0PXtjaGFubmVsLm5hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW4gcC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUdiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZC81MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2NoYW5uZWwubmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5uZWwuZ3JvdXAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC14c1wiPntjaGFubmVsLmdyb3VwfTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQvNTAgdGV4dC1zbVwiPuKAlDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6dGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgdHJ1bmNhdGUgbWF4LXctWzMwMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhbm5lbC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiIGNsYXNzTmFtZT1cImgtOCB3LTggb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGFsaWduPVwiZW5kXCIgY2xhc3NOYW1lPVwidy1bMTYwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChjaGFubmVsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25TZWxlY3Q9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cInRleHQtZGVzdHJ1Y3RpdmUgZm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZm9jdXM6dGV4dC1kZXN0cnVjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nVGl0bGU+RGVsZXRlIENoYW5uZWw8L0FsZXJ0RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57Y2hhbm5lbC5uYW1lfTwvc3Bhbj4/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQ2FuY2VsPkNhbmNlbDwvQWxlcnREaWFsb2dDYW5jZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGNoYW5uZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIGhvdmVyOmJnLWRlc3RydWN0aXZlLzkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nQWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENoYW5uZWxGb3JtRGlhbG9nIFxuICAgICAgICBvcGVuPXtmb3JtT3Blbn0gXG4gICAgICAgIG9uT3BlbkNoYW5nZT17c2V0Rm9ybU9wZW59XG4gICAgICAgIGNoYW5uZWw9e2VkaXRpbmdDaGFubmVsfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL3BhZ2VzL21hbmFnZS50c3gifQ==