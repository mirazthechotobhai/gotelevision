import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const useEffect = __vite__cjsImport1_react["useEffect"];
import { Link, useLocation } from "/node_modules/.vite/deps/wouter.js?v=1af48463";
import { MonitorPlay, ListVideo } from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
import { Button } from "/src/components/ui/button.tsx";
export function Layout({ children }) {
  _s();
  const [location] = useLocation();
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:14:4", "data-component-name": "div", className: "min-h-screen lg:h-screen lg:overflow-hidden bg-background text-foreground flex flex-col font-sans selection:bg-primary/30", children: [
    /* @__PURE__ */ jsxDEV("header", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:15:6", "data-component-name": "header", className: "sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:16:8", "data-component-name": "div", className: "px-4 py-3 flex flex-col lg:flex-row lg:h-16 lg:items-center gap-2 lg:gap-0 lg:justify-between", children: [
      /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:19:10", "data-component-name": "a", href: "/", className: "flex items-center gap-3 w-fit", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:20:12", "data-component-name": "div", className: "relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-800 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:21:14", "data-component-name": "div", className: "absolute inset-0 rounded-lg bg-primary/20 blur-md pointer-events-none" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(MonitorPlay, { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:22:14", "data-component-name": "MonitorPlay", className: "w-5 h-5 relative z-10" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:24:12", "data-component-name": "span", className: "font-bold text-xl tracking-tighter", children: [
          "Nexus",
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:24:70", "data-component-name": "span", className: "text-primary font-medium", children: "TV" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
            lineNumber: 24,
            columnNumber: 172
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:28:10", "data-component-name": "nav", className: "flex items-center gap-1.5 p-1 bg-secondary/50 rounded-full border border-white/5", children: [
        /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:29:12", "data-component-name": "Link", href: "/", className: `flex-1 lg:flex-none ${location === "/" ? "pointer-events-none" : ""}`, children: /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:30:14",
            "data-component-name": "Button",
            variant: "ghost",
            size: "sm",
            className: `gap-2 rounded-full h-8 w-full lg:w-auto px-4 transition-all ${location === "/" ? "bg-primary text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-primary hover:text-white" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxDEV(MonitorPlay, { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:39:16", "data-component-name": "MonitorPlay", className: "w-4 h-4" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
                lineNumber: 39,
                columnNumber: 17
              }, this),
              "Player"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
            lineNumber: 30,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:43:12", "data-component-name": "Link", href: "/manage", className: `flex-1 lg:flex-none ${location === "/manage" ? "pointer-events-none" : ""}`, children: /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:44:14",
            "data-component-name": "Button",
            variant: "ghost",
            size: "sm",
            className: `gap-2 rounded-full h-8 w-full lg:w-auto px-4 transition-all ${location === "/manage" ? "bg-primary text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-primary hover:text-white" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxDEV(ListVideo, { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:53:16", "data-component-name": "ListVideo", className: "w-4 h-4" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
                lineNumber: 53,
                columnNumber: 17
              }, this),
              "Manage Channels"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
            lineNumber: 44,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { "data-replit-metadata": "artifacts/iptv-app/src/components/layout.tsx:63:6", "data-component-name": "main", className: "flex-1 lg:overflow-hidden", children }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_s(Layout, "z/2kj9oSw/SPbgNvpfQnf2WEA/w=", false, function() {
  return [useLocation];
});
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/layout.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QSxLQURoQkk7QUFBTSxJQUFBUTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJNb25pdG9yUGxheSIsIkxpc3RWaWRlbyIsIkJ1dHRvbiIsIkxheW91dCIsImNoaWxkcmVuIiwiX3MiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcIndvdXRlclwiO1xuaW1wb3J0IHsgTW9uaXRvclBsYXksIExpc3RWaWRlbyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbbG9jYXRpb25dID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGxnOmgtc2NyZWVuIGxnOm92ZXJmbG93LWhpZGRlbiBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZCBmbGV4IGZsZXgtY29sIGZvbnQtc2FucyBzZWxlY3Rpb246YmctcHJpbWFyeS8zMFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgYmctYmFja2dyb3VuZC82MCBiYWNrZHJvcC1ibHVyLXhsIHN1cHBvcnRzLVtiYWNrZHJvcC1maWx0ZXJdOmJnLWJhY2tncm91bmQvNDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTMgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsZzpoLTE2IGxnOml0ZW1zLWNlbnRlciBnYXAtMiBsZzpnYXAtMCBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cblxuICAgICAgICAgIHsvKiBMb2dvIOKAlCBjbGlja2luZyByZWxvYWRzIGhvbWVwYWdlICovfVxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy1maXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOCByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by1wdXJwbGUtODAwIHRleHQtd2hpdGUgc2hhZG93LVswXzBfMjBweF9yZ2JhKDEyNCw1OCwyMzcsMC40KV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtbGcgYmctcHJpbWFyeS8yMCBibHVyLW1kIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICA8TW9uaXRvclBsYXkgY2xhc3NOYW1lPVwidy01IGgtNSByZWxhdGl2ZSB6LTEwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgdHJhY2tpbmctdGlnaHRlclwiPk5leHVzPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+VFY8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIHsvKiBOYXYg4oCUIGZ1bGwtd2lkdGggcm93IG9uIG1vYmlsZSwgcGlsbCBvbiBkZXNrdG9wICovfVxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBwLTEgYmctc2Vjb25kYXJ5LzUwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtgZmxleC0xIGxnOmZsZXgtbm9uZSAke2xvY2F0aW9uID09PSBcIi9cIiA/IFwicG9pbnRlci1ldmVudHMtbm9uZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BnYXAtMiByb3VuZGVkLWZ1bGwgaC04IHctZnVsbCBsZzp3LWF1dG8gcHgtNCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgbG9jYXRpb24gPT09IFwiL1wiXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgc2hhZG93LVtpbnNldF8wXzFweF8xcHhfcmdiYSgyNTUsMjU1LDI1NSwwLjIpXSBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBob3ZlcjpiZy13aGl0ZS81XCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb25pdG9yUGxheSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICBQbGF5ZXJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL21hbmFnZVwiIGNsYXNzTmFtZT17YGZsZXgtMSBsZzpmbGV4LW5vbmUgJHtsb2NhdGlvbiA9PT0gXCIvbWFuYWdlXCIgPyBcInBvaW50ZXItZXZlbnRzLW5vbmVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2FwLTIgcm91bmRlZC1mdWxsIGgtOCB3LWZ1bGwgbGc6dy1hdXRvIHB4LTQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uID09PSBcIi9tYW5hZ2VcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHNoYWRvdy1baW5zZXRfMF8xcHhfMXB4X3JnYmEoMjU1LDI1NSwyNTUsMC4yKV0gaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgaG92ZXI6Ymctd2hpdGUvNVwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlzdFZpZGVvIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIE1hbmFnZSBDaGFubmVsc1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L25hdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogTm8gcGFkZGluZyBoZXJlIOKAlCBlYWNoIHBhZ2UgbWFuYWdlcyBpdHMgb3duIGxheW91dCAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBsZzpvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvY29tcG9uZW50cy9sYXlvdXQudHN4In0=