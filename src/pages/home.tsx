import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/home.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const useState = __vite__cjsImport1_react["useState"]; const useMemo = __vite__cjsImport1_react["useMemo"]; const useRef = __vite__cjsImport1_react["useRef"];
import { Layout } from "/src/components/layout.tsx";
import { VideoPlayer } from "/src/components/video-player.tsx";
import { useListChannels, getListChannelsQueryKey, useDeleteChannel } from "/@fs/home/runner/workspace/lib/api-client-react/src/index.ts";
import { Input } from "/src/components/ui/input.tsx";
import { Search, Play, Tv, Plus, Trash2, ChevronLeft, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
import { Badge } from "/src/components/ui/badge.tsx";
import { Skeleton } from "/src/components/ui/skeleton.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { ChannelFormDialog } from "/src/components/channel-form-dialog.tsx";
import { useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=1af48463";
import { useToast } from "/src/hooks/use-toast.ts";
export default function Home() {
  _s();
  const { data: channels, isLoading } = useListChannels({
    query: { queryKey: getListChannelsQueryKey() }
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const deleteChannel = useDeleteChannel();
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [activeChannelUrl, setActiveChannelUrl] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const pillsRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const onPillsMouseDown = (e) => {
    if (!pillsRef.current) return;
    drag.current = { active: true, startX: e.pageX - pillsRef.current.offsetLeft, scrollLeft: pillsRef.current.scrollLeft };
  };
  const onPillsMouseMove = (e) => {
    if (!drag.current.active || !pillsRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsRef.current.offsetLeft;
    pillsRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.5;
  };
  const onPillsDragEnd = () => {
    drag.current.active = false;
  };
  const groups = useMemo(() => {
    if (!channels) return ["All"];
    const g = /* @__PURE__ */ new Set();
    channels.forEach((c) => {
      if (c.group) g.add(c.group);
    });
    return ["All", ...Array.from(g).sort()];
  }, [channels]);
  const filteredChannels = useMemo(() => {
    if (!channels) return [];
    return channels.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = activeGroup === "All" || c.group === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [channels, search, activeGroup]);
  const currentIndex = useMemo(() => {
    if (!activeChannelUrl) return -1;
    return filteredChannels.findIndex((c) => c.url === activeChannelUrl);
  }, [activeChannelUrl, filteredChannels]);
  function goToPrev() {
    if (filteredChannels.length === 0) return;
    const idx = currentIndex <= 0 ? filteredChannels.length - 1 : currentIndex - 1;
    setActiveChannelUrl(filteredChannels[idx].url);
  }
  function goToNext() {
    if (filteredChannels.length === 0) return;
    const idx = currentIndex < 0 || currentIndex >= filteredChannels.length - 1 ? 0 : currentIndex + 1;
    setActiveChannelUrl(filteredChannels[idx].url);
  }
  function handleDelete(id, url) {
    setDeletingId(id);
    deleteChannel.mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getListChannelsQueryKey() });
          if (activeChannelUrl === url) setActiveChannelUrl(null);
          toast({ title: "Channel deleted" });
          setDeletingId(null);
        },
        onError: () => {
          toast({ title: "Failed to delete channel", variant: "destructive" });
          setDeletingId(null);
        }
      }
    );
  }
  const hasChannels = filteredChannels.length > 0;
  return /* @__PURE__ */ jsxDEV(Layout, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:101:4", "data-component-name": "Layout", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:102:6", "data-component-name": "div", className: "flex flex-col lg:flex-row lg:gap-6 lg:p-6 lg:h-[calc(100vh-65px)]", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:105:8",
          "data-component-name": "div",
          className: "order-2 lg:order-1 lg:border lg:border-white/5 bg-card/80 backdrop-blur-md lg:rounded-2xl lg:shadow-xl overflow-y-auto lg:w-80 lg:flex-shrink-0 flex flex-col",
          style: { WebkitOverflowScrolling: "touch" },
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:110:10", "data-component-name": "div", className: "sticky top-0 z-10 bg-card/90 backdrop-blur-xl px-5 pt-5 pb-4 border-b border-white/5 shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:111:12", "data-component-name": "div", className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:112:14", "data-component-name": "div", className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Tv, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:113:16", "data-component-name": "Tv", className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 113,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 112,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:115:14", "data-component-name": "span", className: "font-semibold text-lg tracking-tight", children: "Channels" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                }, this),
                channels && /* @__PURE__ */ jsxDEV(Badge, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:117:16", "data-component-name": "Badge", variant: "secondary", className: "font-mono text-[10px] uppercase tracking-wider px-2 bg-secondary/80 text-muted-foreground border-white/5", children: channels.length }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 117,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:123:14", "data-component-name": "div", className: "flex items-center gap-1 ml-auto lg:hidden", children: [
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:124:16",
                      "data-component-name": "Button",
                      size: "icon",
                      variant: "ghost",
                      disabled: !hasChannels,
                      onClick: goToPrev,
                      className: "h-7 w-7 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 disabled:opacity-30",
                      title: "Previous channel",
                      children: /* @__PURE__ */ jsxDEV(ChevronLeft, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:132:18", "data-component-name": "ChevronLeft", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                        lineNumber: 132,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                      lineNumber: 124,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:134:16",
                      "data-component-name": "Button",
                      size: "icon",
                      variant: "ghost",
                      disabled: !hasChannels,
                      onClick: goToNext,
                      className: "h-7 w-7 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 disabled:opacity-30",
                      title: "Next channel",
                      children: /* @__PURE__ */ jsxDEV(ChevronRight, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:142:18", "data-component-name": "ChevronRight", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                        lineNumber: 142,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                      lineNumber: 134,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 123,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:147:14",
                    "data-component-name": "Button",
                    size: "icon",
                    variant: "ghost",
                    className: "h-8 w-8 text-primary hover:bg-primary/20 rounded-full transition-colors lg:ml-auto",
                    onClick: () => setAddOpen(true),
                    title: "Add channel",
                    children: /* @__PURE__ */ jsxDEV(Plus, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:154:16", "data-component-name": "Plus", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                      lineNumber: 154,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                    lineNumber: 147,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 111,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:158:12", "data-component-name": "div", className: "relative mb-4", children: [
                /* @__PURE__ */ jsxDEV(Search, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:159:14", "data-component-name": "Search", className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 159,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:160:14",
                    "data-component-name": "Input",
                    placeholder: "Search channels...",
                    className: "pl-9 h-10 bg-black/40 border-white/5 rounded-xl focus-visible:ring-primary/40 focus-visible:border-primary/40 placeholder:text-muted-foreground/50",
                    value: search,
                    onChange: (e) => setSearch(e.target.value)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:169:12",
                  "data-component-name": "div",
                  ref: pillsRef,
                  className: "flex gap-1.5 overflow-x-auto pb-1 cursor-grab active:cursor-grabbing select-none",
                  onMouseDown: onPillsMouseDown,
                  onMouseMove: onPillsMouseMove,
                  onMouseUp: onPillsDragEnd,
                  onMouseLeave: onPillsDragEnd,
                  children: groups.map(
                    (g) => /* @__PURE__ */ jsxDEV(
                      Badge,
                      {
                        "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:178:16",
                        "data-component-name": "Badge",
                        variant: activeGroup === g ? "default" : "secondary",
                        className: `cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full ${activeGroup === g ? "bg-primary text-white shadow-[0_0_10px_rgba(124,58,237,0.3)] pointer-events-none" : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground border border-white/5"}`,
                        onClick: () => setActiveGroup(g),
                        children: g
                      },
                      g,
                      false,
                      {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                        lineNumber: 178,
                        columnNumber: 15
                      },
                      this
                    )
                  )
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 169,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:195:10", "data-component-name": "div", className: "p-3 flex-1 flex flex-col", children: isLoading ? /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:197:14", "data-component-name": "div", className: "space-y-2", children: [1, 2, 3, 4, 5, 6].map(
              (i) => /* @__PURE__ */ jsxDEV(Skeleton, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:199:18", "data-component-name": "Skeleton", className: "h-16 w-full rounded-xl bg-white/5" }, i, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 199,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 197,
              columnNumber: 13
            }, this) : filteredChannels.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:203:14", "data-component-name": "div", className: "text-center py-16 px-4 flex flex-col items-center justify-center flex-1", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:204:16", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(Tv, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:205:18", "data-component-name": "Tv", className: "w-5 h-5 text-muted-foreground/40" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 205,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 204,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:207:16", "data-component-name": "p", className: "text-sm text-muted-foreground font-medium mb-1", children: "No channels found" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 207,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:208:16", "data-component-name": "p", className: "text-xs text-muted-foreground/60 mb-6 text-balance", children: "Try adjusting your search or add a new channel" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 208,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:209:16",
                  "data-component-name": "Button",
                  size: "sm",
                  variant: "secondary",
                  className: "rounded-full bg-white/5 hover:bg-white/10 border border-white/5",
                  onClick: () => setAddOpen(true),
                  children: [
                    /* @__PURE__ */ jsxDEV(Plus, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:215:18", "data-component-name": "Plus", className: "w-4 h-4 mr-2" }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                      lineNumber: 215,
                      columnNumber: 19
                    }, this),
                    " Add Channel"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 209,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 203,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:219:14", "data-component-name": "div", className: "space-y-1.5", children: filteredChannels.map(
              (channel) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:221:18",
                  "data-component-name": "div",
                  className: `group relative rounded-xl border transition-all duration-300 overflow-hidden ${activeChannelUrl === channel.url ? "bg-primary/10 border-primary/30 shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]" : "bg-transparent border-transparent hover:border-white/5 hover:bg-white/[0.02]"}`,
                  children: [
                    activeChannelUrl === channel.url && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:230:22", "data-component-name": "div", className: "absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]" }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                      lineNumber: 230,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:233:20",
                        "data-component-name": "button",
                        onClick: () => setActiveChannelUrl(channel.url),
                        className: "w-full text-left p-2.5 flex items-center gap-3.5 pr-10",
                        children: [
                          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:237:22", "data-component-name": "div", className: "w-12 h-12 rounded-lg bg-black/40 flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner", children: channel.logoUrl ? /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:239:26", "data-component-name": "img", src: channel.logoUrl, alt: channel.name, className: "w-full h-full object-contain p-1.5 drop-shadow-md" }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 239,
                            columnNumber: 21
                          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:241:26", "data-component-name": "div", className: "w-full h-full bg-gradient-to-br from-secondary to-black flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:242:28", "data-component-name": "span", className: "text-xs font-bold text-muted-foreground/50 uppercase", children: channel.name.substring(0, 2) }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 242,
                            columnNumber: 29
                          }, this) }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 241,
                            columnNumber: 21
                          }, this) }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 237,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:246:22", "data-component-name": "div", className: "flex-1 min-w-0 py-0.5", children: [
                            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:247:24", "data-component-name": "p", className: `font-semibold text-sm truncate tracking-tight transition-colors ${activeChannelUrl === channel.url ? "text-white" : "text-foreground group-hover:text-white"}`, children: channel.name }, void 0, false, {
                              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                              lineNumber: 247,
                              columnNumber: 25
                            }, this),
                            channel.group && /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:251:26", "data-component-name": "p", className: "text-[11px] font-medium text-muted-foreground/70 truncate mt-0.5 uppercase tracking-wider", children: channel.group }, void 0, false, {
                              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                              lineNumber: 251,
                              columnNumber: 21
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 246,
                            columnNumber: 23
                          }, this),
                          activeChannelUrl === channel.url && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:255:24", "data-component-name": "div", className: "w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_10px_rgba(124,58,237,0.4)] mr-1", children: /* @__PURE__ */ jsxDEV(Play, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:256:26", "data-component-name": "Play", className: "w-3 h-3 fill-current translate-x-[0.5px]" }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 256,
                            columnNumber: 27
                          }, this) }, void 0, false, {
                            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                            lineNumber: 255,
                            columnNumber: 19
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                        lineNumber: 233,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:261:20",
                        "data-component-name": "button",
                        onClick: () => handleDelete(channel.id, channel.url),
                        disabled: deletingId === channel.id,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 rounded-full text-muted-foreground/50 hover:text-red-400 hover:bg-red-500/10 disabled:opacity-50",
                        title: "Delete channel",
                        children: /* @__PURE__ */ jsxDEV(Trash2, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:267:22", "data-component-name": "Trash2", className: "w-4 h-4" }, void 0, false, {
                          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                          lineNumber: 267,
                          columnNumber: 23
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                        lineNumber: 261,
                        columnNumber: 21
                      },
                      this
                    )
                  ]
                },
                channel.id,
                true,
                {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 221,
                  columnNumber: 15
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 219,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 195,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:277:8", "data-component-name": "div", className: "order-1 lg:order-2 flex-1 flex flex-col min-w-0 lg:overflow-hidden relative", children: [
        /* @__PURE__ */ jsxDEV(VideoPlayer, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:278:10", "data-component-name": "VideoPlayer", url: activeChannelUrl }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:281:10", "data-component-name": "div", className: "hidden lg:flex items-center justify-center gap-3 mt-4 flex-shrink-0", children: [
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:282:12",
              "data-component-name": "Button",
              variant: "secondary",
              disabled: !hasChannels,
              onClick: goToPrev,
              className: "gap-2 rounded-full px-6 h-9 bg-white/5 border border-white/10 hover:bg-white/10 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all",
              children: [
                /* @__PURE__ */ jsxDEV(ChevronLeft, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:288:14", "data-component-name": "ChevronLeft", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 288,
                  columnNumber: 15
                }, this),
                "Previous"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 282,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:291:12",
              "data-component-name": "Button",
              variant: "secondary",
              disabled: !hasChannels,
              onClick: goToNext,
              className: "gap-2 rounded-full px-6 h-9 bg-white/5 border border-white/10 hover:bg-white/10 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all",
              children: [
                "Next",
                /* @__PURE__ */ jsxDEV(ChevronRight, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:298:14", "data-component-name": "ChevronRight", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 298,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 291,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
          lineNumber: 281,
          columnNumber: 11
        }, this),
        activeChannelUrl && (() => {
          const c = channels?.find((c2) => c2.url === activeChannelUrl);
          return c ? /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:306:14", "data-component-name": "div", className: "mx-4 lg:mx-0 mt-4 lg:mt-4 mb-4 lg:mb-0 p-4 lg:p-5 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-md shadow-lg flex items-center gap-4 lg:gap-5 flex-shrink-0 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:307:16", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 307,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:308:16", "data-component-name": "div", className: "w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner z-10", children: c.logoUrl ? /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:310:20", "data-component-name": "img", src: c.logoUrl, alt: c.name, className: "w-full h-full object-contain p-2" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 310,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:312:20", "data-component-name": "div", className: "w-full h-full bg-gradient-to-br from-secondary to-black flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:313:22", "data-component-name": "span", className: "text-lg font-bold text-muted-foreground/40 uppercase", children: c.name.substring(0, 2) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 313,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 312,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 308,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:317:16", "data-component-name": "div", className: "flex-1 min-w-0 z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:318:18", "data-component-name": "div", className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:319:20", "data-component-name": "h2", className: "text-xl lg:text-2xl font-bold tracking-tight truncate text-white", children: c.name }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 319,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(Badge, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:320:20", "data-component-name": "Badge", variant: "outline", className: "bg-red-500/10 text-red-500 border-red-500/20 flex-shrink-0 px-2 py-0 h-5 text-[10px] font-bold tracking-widest uppercase", children: "LIVE" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                  lineNumber: 320,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 318,
                columnNumber: 19
              }, this),
              c.group && /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:322:30", "data-component-name": "p", className: "text-sm font-medium text-muted-foreground/80 uppercase tracking-wide", children: c.group }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
                lineNumber: 322,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
              lineNumber: 317,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this) : null;
        })()
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ChannelFormDialog, { "data-replit-metadata": "artifacts/iptv-app/src/pages/home.tsx:331:6", "data-component-name": "ChannelFormDialog", open: addOpen, onOpenChange: setAddOpen }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
_s(Home, "dOg8LLjX7pGtwNye/3sXS+kA50Y=", false, function() {
  return [useListChannels, useQueryClient, useToast, useDeleteChannel];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/pages/home.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUUsV0FBVSxnQ0FDYjtBQUFBLHVDQUFDLFFBQUMscUdBQUUsV0FBVSxvRUFBb0VwQyxZQUFFUyxRQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF5RjtBQUFBLGdCQUN6Rix1QkFBQyxTQUFJLHdHQUFFLFNBQVEsV0FBVSxXQUFVLDRIQUEySCxvQkFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBa0s7QUFBQSxtQkFGcEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHQTtBQUFBLGNBQ0NULEVBQUVDLFNBQVMsdUJBQUMsMkdBQUUsV0FBVSx3RUFBd0VELFlBQUVDLFNBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTZGO0FBQUEsaUJBTDNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWtCQSxJQUNFO0FBQUEsUUFDTixHQUFHO0FBQUEsV0FqREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWtEQTtBQUFBLFNBak9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FtT0E7QUFBQSxJQUVBLHVCQUFDLHFCQUFnQixtSEFBRSxNQUFNdkIsU0FBUyxjQUFjQyxjQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJEO0FBQUEsT0F0TzdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1T0E7QUFFSjtBQUFBaEIsR0FoVXdCRCxNQUFJO0FBQUEsVUFDWWpCLGlCQUlsQmUsZ0JBQ0ZDLFVBQ0lkLGdCQUFnQjtBQUFBO0FBQUEsS0FQaEJlO0FBQUksSUFBQTRFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJlZiIsIkxheW91dCIsIlZpZGVvUGxheWVyIiwidXNlTGlzdENoYW5uZWxzIiwiZ2V0TGlzdENoYW5uZWxzUXVlcnlLZXkiLCJ1c2VEZWxldGVDaGFubmVsIiwiSW5wdXQiLCJTZWFyY2giLCJQbGF5IiwiVHYiLCJQbHVzIiwiVHJhc2gyIiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJCYWRnZSIsIlNrZWxldG9uIiwiQnV0dG9uIiwiQ2hhbm5lbEZvcm1EaWFsb2ciLCJ1c2VRdWVyeUNsaWVudCIsInVzZVRvYXN0IiwiSG9tZSIsIl9zIiwiZGF0YSIsImNoYW5uZWxzIiwiaXNMb2FkaW5nIiwicXVlcnkiLCJxdWVyeUtleSIsInF1ZXJ5Q2xpZW50IiwidG9hc3QiLCJkZWxldGVDaGFubmVsIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiYWN0aXZlR3JvdXAiLCJzZXRBY3RpdmVHcm91cCIsImFjdGl2ZUNoYW5uZWxVcmwiLCJzZXRBY3RpdmVDaGFubmVsVXJsIiwiYWRkT3BlbiIsInNldEFkZE9wZW4iLCJkZWxldGluZ0lkIiwic2V0RGVsZXRpbmdJZCIsInBpbGxzUmVmIiwiZHJhZyIsImFjdGl2ZSIsInN0YXJ0WCIsInNjcm9sbExlZnQiLCJvblBpbGxzTW91c2VEb3duIiwiZSIsImN1cnJlbnQiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJvblBpbGxzTW91c2VNb3ZlIiwicHJldmVudERlZmF1bHQiLCJ4Iiwib25QaWxsc0RyYWdFbmQiLCJncm91cHMiLCJnIiwiU2V0IiwiZm9yRWFjaCIsImMiLCJncm91cCIsImFkZCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJmaWx0ZXJlZENoYW5uZWxzIiwiZmlsdGVyIiwibWF0Y2hlc1NlYXJjaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWF0Y2hlc0dyb3VwIiwiY3VycmVudEluZGV4IiwiZmluZEluZGV4IiwidXJsIiwiZ29Ub1ByZXYiLCJsZW5ndGgiLCJpZHgiLCJnb1RvTmV4dCIsImhhbmRsZURlbGV0ZSIsImlkIiwibXV0YXRlIiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJ0aXRsZSIsIm9uRXJyb3IiLCJ2YXJpYW50IiwiaGFzQ2hhbm5lbHMiLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaSIsImNoYW5uZWwiLCJsb2dvVXJsIiwic3Vic3RyaW5nIiwiZmluZCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImhvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdmlkZW8tcGxheWVyXCI7XG5pbXBvcnQgeyB1c2VMaXN0Q2hhbm5lbHMsIGdldExpc3RDaGFubmVsc1F1ZXJ5S2V5LCB1c2VEZWxldGVDaGFubmVsIH0gZnJvbSBcIkB3b3Jrc3BhY2UvYXBpLWNsaWVudC1yZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBTZWFyY2gsIFBsYXksIFR2LCBQbHVzLCBUcmFzaDIsIENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENoYW5uZWxGb3JtRGlhbG9nIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jaGFubmVsLWZvcm0tZGlhbG9nXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogY2hhbm5lbHMsIGlzTG9hZGluZyB9ID0gdXNlTGlzdENoYW5uZWxzKHtcbiAgICBxdWVyeTogeyBxdWVyeUtleTogZ2V0TGlzdENoYW5uZWxzUXVlcnlLZXkoKSB9XG4gIH0pO1xuXG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgZGVsZXRlQ2hhbm5lbCA9IHVzZURlbGV0ZUNoYW5uZWwoKTtcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY3RpdmVHcm91cCwgc2V0QWN0aXZlR3JvdXBdID0gdXNlU3RhdGU8c3RyaW5nPihcIkFsbFwiKTtcbiAgY29uc3QgW2FjdGl2ZUNoYW5uZWxVcmwsIHNldEFjdGl2ZUNoYW5uZWxVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthZGRPcGVuLCBzZXRBZGRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbGV0aW5nSWQsIHNldERlbGV0aW5nSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gRHJhZy1zY3JvbGwgZm9yIGNhdGVnb3J5IHBpbGxzXG4gIGNvbnN0IHBpbGxzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgZHJhZyA9IHVzZVJlZih7IGFjdGl2ZTogZmFsc2UsIHN0YXJ0WDogMCwgc2Nyb2xsTGVmdDogMCB9KTtcblxuICBjb25zdCBvblBpbGxzTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXBpbGxzUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBkcmFnLmN1cnJlbnQgPSB7IGFjdGl2ZTogdHJ1ZSwgc3RhcnRYOiBlLnBhZ2VYIC0gcGlsbHNSZWYuY3VycmVudC5vZmZzZXRMZWZ0LCBzY3JvbGxMZWZ0OiBwaWxsc1JlZi5jdXJyZW50LnNjcm9sbExlZnQgfTtcbiAgfTtcbiAgY29uc3Qgb25QaWxsc01vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFkcmFnLmN1cnJlbnQuYWN0aXZlIHx8ICFwaWxsc1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcGlsbHNSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xuICAgIHBpbGxzUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IGRyYWcuY3VycmVudC5zY3JvbGxMZWZ0IC0gKHggLSBkcmFnLmN1cnJlbnQuc3RhcnRYKSAqIDEuNTtcbiAgfTtcbiAgY29uc3Qgb25QaWxsc0RyYWdFbmQgPSAoKSA9PiB7IGRyYWcuY3VycmVudC5hY3RpdmUgPSBmYWxzZTsgfTtcblxuICBjb25zdCBncm91cHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWNoYW5uZWxzKSByZXR1cm4gW1wiQWxsXCJdO1xuICAgIGNvbnN0IGcgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjaGFubmVscy5mb3JFYWNoKGMgPT4geyBpZiAoYy5ncm91cCkgZy5hZGQoYy5ncm91cCk7IH0pO1xuICAgIHJldHVybiBbXCJBbGxcIiwgLi4uQXJyYXkuZnJvbShnKS5zb3J0KCldO1xuICB9LCBbY2hhbm5lbHNdKTtcblxuICBjb25zdCBmaWx0ZXJlZENoYW5uZWxzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFjaGFubmVscykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBjaGFubmVscy5maWx0ZXIoYyA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gYy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgY29uc3QgbWF0Y2hlc0dyb3VwID0gYWN0aXZlR3JvdXAgPT09IFwiQWxsXCIgfHwgYy5ncm91cCA9PT0gYWN0aXZlR3JvdXA7XG4gICAgICByZXR1cm4gbWF0Y2hlc1NlYXJjaCAmJiBtYXRjaGVzR3JvdXA7XG4gICAgfSk7XG4gIH0sIFtjaGFubmVscywgc2VhcmNoLCBhY3RpdmVHcm91cF0pO1xuXG4gIC8vIEN1cnJlbnQgY2hhbm5lbCBpbmRleCB3aXRoaW4gZmlsdGVyZWQgbGlzdFxuICBjb25zdCBjdXJyZW50SW5kZXggPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWFjdGl2ZUNoYW5uZWxVcmwpIHJldHVybiAtMTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFubmVscy5maW5kSW5kZXgoYyA9PiBjLnVybCA9PT0gYWN0aXZlQ2hhbm5lbFVybCk7XG4gIH0sIFthY3RpdmVDaGFubmVsVXJsLCBmaWx0ZXJlZENoYW5uZWxzXSk7XG5cbiAgZnVuY3Rpb24gZ29Ub1ByZXYoKSB7XG4gICAgaWYgKGZpbHRlcmVkQ2hhbm5lbHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgaWR4ID0gY3VycmVudEluZGV4IDw9IDAgPyBmaWx0ZXJlZENoYW5uZWxzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xuICAgIHNldEFjdGl2ZUNoYW5uZWxVcmwoZmlsdGVyZWRDaGFubmVsc1tpZHhdLnVybCk7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvTmV4dCgpIHtcbiAgICBpZiAoZmlsdGVyZWRDaGFubmVscy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBpZHggPSBjdXJyZW50SW5kZXggPCAwIHx8IGN1cnJlbnRJbmRleCA+PSBmaWx0ZXJlZENoYW5uZWxzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcbiAgICBzZXRBY3RpdmVDaGFubmVsVXJsKGZpbHRlcmVkQ2hhbm5lbHNbaWR4XS51cmwpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKGlkOiBudW1iZXIsIHVybDogc3RyaW5nKSB7XG4gICAgc2V0RGVsZXRpbmdJZChpZCk7XG4gICAgZGVsZXRlQ2hhbm5lbC5tdXRhdGUoXG4gICAgICB7IGlkIH0sXG4gICAgICB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHsgcXVlcnlLZXk6IGdldExpc3RDaGFubmVsc1F1ZXJ5S2V5KCkgfSk7XG4gICAgICAgICAgaWYgKGFjdGl2ZUNoYW5uZWxVcmwgPT09IHVybCkgc2V0QWN0aXZlQ2hhbm5lbFVybChudWxsKTtcbiAgICAgICAgICB0b2FzdCh7IHRpdGxlOiBcIkNoYW5uZWwgZGVsZXRlZFwiIH0pO1xuICAgICAgICAgIHNldERlbGV0aW5nSWQobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6ICgpID0+IHtcbiAgICAgICAgICB0b2FzdCh7IHRpdGxlOiBcIkZhaWxlZCB0byBkZWxldGUgY2hhbm5lbFwiLCB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIgfSk7XG4gICAgICAgICAgc2V0RGVsZXRpbmdJZChudWxsKTtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFzQ2hhbm5lbHMgPSBmaWx0ZXJlZENoYW5uZWxzLmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOmdhcC02IGxnOnAtNiBsZzpoLVtjYWxjKDEwMHZoLTY1cHgpXVwiPlxuXG4gICAgICAgIHsvKiDilIDilIAgU2lkZWJhciDilIDilIAgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci0yIGxnOm9yZGVyLTEgbGc6Ym9yZGVyIGxnOmJvcmRlci13aGl0ZS81IGJnLWNhcmQvODAgYmFja2Ryb3AtYmx1ci1tZCBsZzpyb3VuZGVkLTJ4bCBsZzpzaGFkb3cteGwgb3ZlcmZsb3cteS1hdXRvIGxnOnctODAgbGc6ZmxleC1zaHJpbmstMCBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgICBzdHlsZT17eyBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7LyogU3RpY2t5IGhlYWRlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTEwIGJnLWNhcmQvOTAgYmFja2Ryb3AtYmx1ci14bCBweC01IHB0LTUgcGItNCBib3JkZXItYiBib3JkZXItd2hpdGUvNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgIDxUdiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgdHJhY2tpbmctdGlnaHRcIj5DaGFubmVsczwvc3Bhbj5cbiAgICAgICAgICAgICAge2NoYW5uZWxzICYmIChcbiAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgcHgtMiBiZy1zZWNvbmRhcnkvODAgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICB7Y2hhbm5lbHMubGVuZ3RofVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIFByZXYgLyBOZXh0IOKAlCBpY29uIG9ubHksIG1vYmlsZSBvbmx5ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG1sLWF1dG8gbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzQ2hhbm5lbHN9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyB3LTcgcm91bmRlZC1mdWxsIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgaG92ZXI6Ymctd2hpdGUvMTAgZGlzYWJsZWQ6b3BhY2l0eS0zMFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlByZXZpb3VzIGNoYW5uZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNDaGFubmVsc31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctNyByb3VuZGVkLWZ1bGwgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBob3ZlcjpiZy13aGl0ZS8xMCBkaXNhYmxlZDpvcGFjaXR5LTMwXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV4dCBjaGFubmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQWRkIGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvMjAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIGxnOm1sLWF1dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgY2hhbm5lbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBoLTQgdy00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNoYW5uZWxzLi4uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC05IGgtMTAgYmctYmxhY2svNDAgYm9yZGVyLXdoaXRlLzUgcm91bmRlZC14bCBmb2N1cy12aXNpYmxlOnJpbmctcHJpbWFyeS80MCBmb2N1cy12aXNpYmxlOmJvcmRlci1wcmltYXJ5LzQwIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZC81MFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENhdGVnb3J5IHBpbGxzIOKAlCBkcmFnZ2FibGUgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cGlsbHNSZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEuNSBvdmVyZmxvdy14LWF1dG8gcGItMSBjdXJzb3ItZ3JhYiBhY3RpdmU6Y3Vyc29yLWdyYWJiaW5nIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e29uUGlsbHNNb3VzZURvd259XG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvblBpbGxzTW91c2VNb3ZlfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uUGlsbHNEcmFnRW5kfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uUGlsbHNEcmFnRW5kfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z3JvdXBzLm1hcChnID0+IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGtleT17Z31cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2FjdGl2ZUdyb3VwID09PSBnID8gXCJkZWZhdWx0XCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHdoaXRlc3BhY2Utbm93cmFwIGZsZXgtc2hyaW5rLTAgcHgtMyBweS0xIHRleHQteHMgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwID09PSBnXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXByaW1hcnkgdGV4dC13aGl0ZSBzaGFkb3ctWzBfMF8xMHB4X3JnYmEoMTI0LDU4LDIzNywwLjMpXSBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctc2Vjb25kYXJ5LzQwIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUdyb3VwKGcpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtnfVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ2hhbm5lbCBsaXN0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGZsZXgtMSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNl0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIGtleT17aX0gY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgcm91bmRlZC14bCBiZy13aGl0ZS81XCIgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogZmlsdGVyZWRDaGFubmVscy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTYgcHgtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8VHYgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LW11dGVkLWZvcmVncm91bmQvNDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtIG1iLTFcIj5ObyBjaGFubmVscyBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC82MCBtYi02IHRleHQtYmFsYW5jZVwiPlRyeSBhZGp1c3RpbmcgeW91ciBzZWFyY2ggb3IgYWRkIGEgbmV3IGNoYW5uZWw8L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci13aGl0ZS81XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz4gQWRkIENoYW5uZWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkQ2hhbm5lbHMubWFwKGNoYW5uZWwgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYW5uZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwIHJlbGF0aXZlIHJvdW5kZWQteGwgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW4gJHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGFubmVsVXJsID09PSBjaGFubmVsLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXByaW1hcnkvMTAgYm9yZGVyLXByaW1hcnkvMzAgc2hhZG93LVtpbnNldF8wXzBfMjBweF9yZ2JhKDEyNCw1OCwyMzcsMC4wNSldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy10cmFuc3BhcmVudCBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvWzAuMDJdXCJcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVDaGFubmVsVXJsID09PSBjaGFubmVsLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgYm90dG9tLTAgdy0xIGJnLXByaW1hcnkgc2hhZG93LVswXzBfMTBweF9yZ2JhKDEyNCw1OCwyMzcsMC41KV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVDaGFubmVsVXJsKGNoYW5uZWwudXJsKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHAtMi41IGZsZXggaXRlbXMtY2VudGVyIGdhcC0zLjUgcHItMTBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1sZyBiZy1ibGFjay80MCBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXdoaXRlLzUgc2hhZG93LWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhbm5lbC5sb2dvVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC5sb2dvVXJsfSBhbHQ9e2NoYW5uZWwubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY29udGFpbiBwLTEuNSBkcm9wLXNoYWRvdy1tZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zZWNvbmRhcnkgdG8tYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LW11dGVkLWZvcmVncm91bmQvNTAgdXBwZXJjYXNlXCI+e2NoYW5uZWwubmFtZS5zdWJzdHJpbmcoMCwgMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMCBweS0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cnVuY2F0ZSB0cmFja2luZy10aWdodCB0cmFuc2l0aW9uLWNvbG9ycyAke2FjdGl2ZUNoYW5uZWxVcmwgPT09IGNoYW5uZWwudXJsID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZm9yZWdyb3VuZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFubmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhbm5lbC5ncm91cCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC83MCB0cnVuY2F0ZSBtdC0wLjUgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+e2NoYW5uZWwuZ3JvdXB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlQ2hhbm5lbFVybCA9PT0gY2hhbm5lbC51cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC02IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZmxleC1zaHJpbmstMCBzaGFkb3ctWzBfMF8xMHB4X3JnYmEoMTI0LDU4LDIzNywwLjQpXSBtci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctMyBoLTMgZmlsbC1jdXJyZW50IHRyYW5zbGF0ZS14LVswLjVweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShjaGFubmVsLmlkLCBjaGFubmVsLnVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGV0aW5nSWQgPT09IGNoYW5uZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBwLTIgcm91bmRlZC1mdWxsIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC81MCBob3Zlcjp0ZXh0LXJlZC00MDAgaG92ZXI6YmctcmVkLTUwMC8xMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBjaGFubmVsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIOKUgOKUgCBQbGF5ZXIg4pSA4pSAICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLTEgbGc6b3JkZXItMiBmbGV4LTEgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGxnOm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxWaWRlb1BsYXllciB1cmw9e2FjdGl2ZUNoYW5uZWxVcmx9IC8+XG5cbiAgICAgICAgICB7LyogUHJldiAvIE5leHQg4oCUIHRleHQgKyBpY29uLCBkZXNrdG9wIG9ubHksIGNlbnRlcmVkIGJlbG93IHBsYXllciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBtdC00IGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzQ2hhbm5lbHN9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnYXAtMiByb3VuZGVkLWZ1bGwgcHgtNiBoLTkgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzEwIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgZGlzYWJsZWQ6b3BhY2l0eS0zMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNDaGFubmVsc31cbiAgICAgICAgICAgICAgb25DbGljaz17Z29Ub05leHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdhcC0yIHJvdW5kZWQtZnVsbCBweC02IGgtOSBiZy13aGl0ZS81IGJvcmRlciBib3JkZXItd2hpdGUvMTAgaG92ZXI6Ymctd2hpdGUvMTAgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBkaXNhYmxlZDpvcGFjaXR5LTMwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTm93IHBsYXlpbmcgaW5mbyAqL31cbiAgICAgICAgICB7YWN0aXZlQ2hhbm5lbFVybCAmJiAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYyA9IGNoYW5uZWxzPy5maW5kKGMgPT4gYy51cmwgPT09IGFjdGl2ZUNoYW5uZWxVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIGMgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBsZzpteC0wIG10LTQgbGc6bXQtNCBtYi00IGxnOm1iLTAgcC00IGxnOnAtNSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctY2FyZC80MCBiYWNrZHJvcC1ibHVyLW1kIHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBsZzpnYXAtNSBmbGV4LXNocmluay0wIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeS81IHRvLXRyYW5zcGFyZW50IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IGxnOnctMTYgbGc6aC0xNiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtc2hyaW5rLTAgc2hhZG93LWlubmVyIHotMTBcIj5cbiAgICAgICAgICAgICAgICAgIHtjLmxvZ29VcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjLmxvZ29Vcmx9IGFsdD17Yy5uYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluIHAtMlwiIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zZWNvbmRhcnkgdG8tYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LW11dGVkLWZvcmVncm91bmQvNDAgdXBwZXJjYXNlXCI+e2MubmFtZS5zdWJzdHJpbmcoMCwgMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMCB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbGc6dGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRydW5jYXRlIHRleHQtd2hpdGVcIj57Yy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImJnLXJlZC01MDAvMTAgdGV4dC1yZWQtNTAwIGJvcmRlci1yZWQtNTAwLzIwIGZsZXgtc2hyaW5rLTAgcHgtMiBweS0wIGgtNSB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZVwiPkxJVkU8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7Yy5ncm91cCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC84MCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntjLmdyb3VwfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgfSkoKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2hhbm5lbEZvcm1EaWFsb2cgb3Blbj17YWRkT3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRBZGRPcGVufSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvcGFnZXMvaG9tZS50c3gifQ==