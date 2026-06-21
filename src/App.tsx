import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Switch, Route, Router as WouterRouter } from "/node_modules/.vite/deps/wouter.js?v=1af48463";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=1af48463";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import Home from "/src/pages/home.tsx";
import Manage from "/src/pages/manage.tsx";
import NotFound from "/src/pages/not-found.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});
function Router() {
  return /* @__PURE__ */ jsxDEV(Switch, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:20:4", "data-component-name": "Switch", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:21:6", "data-component-name": "Route", path: "/", component: Home }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:22:6", "data-component-name": "Route", path: "/manage", component: Manage }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:23:6", "data-component-name": "Route", component: NotFound }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = Router;
function App() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:30:4", "data-component-name": "QueryClientProvider", client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:31:6", "data-component-name": "TooltipProvider", children: [
    /* @__PURE__ */ jsxDEV(WouterRouter, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:32:8", "data-component-name": "WouterRouter", base: import.meta.env.BASE_URL.replace(/\/$/, ""), children: /* @__PURE__ */ jsxDEV(Router, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:33:10", "data-component-name": "Router" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-replit-metadata": "artifacts/iptv-app/src/App.tsx:35:8", "data-component-name": "Toaster" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/App.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/App.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQW9CTTtBQXBCTixTQUFTQSxRQUFRQyxPQUFPQyxVQUFVQyxvQkFBb0I7QUFDdEQsU0FBU0MsYUFBYUMsMkJBQTJCO0FBQ2pELFNBQVNDLGVBQWU7QUFDeEIsU0FBU0MsdUJBQXVCO0FBQ2hDLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxjQUFjO0FBRXJCLE1BQU1DLGNBQWMsSUFBSVAsWUFBWTtBQUFBLEVBQ2xDUSxnQkFBZ0I7QUFBQSxJQUNkQyxTQUFTO0FBQUEsTUFDUEMsc0JBQXNCO0FBQUEsTUFDdEJDLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGLENBQUM7QUFFRCxTQUFTYixTQUFTO0FBQ2hCLFNBQ0UsdUJBQUMsVUFBSyxnR0FDSjtBQUFBLDJCQUFDLFNBQUksK0ZBQUUsTUFBSyxLQUFJLFdBQVdNLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0M7QUFBQSxJQUNoQyx1QkFBQyxTQUFJLCtGQUFFLE1BQUssV0FBVSxXQUFXQyxVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXdDO0FBQUEsSUFDeEMsdUJBQUMsU0FBSSwrRkFBRSxXQUFXQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0FIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBRUo7QUFBQU0sS0FSU2Q7QUFVVCxTQUFTZSxNQUFNO0FBQ2IsU0FDRSx1QkFBQyx1QkFBa0IsNkdBQUUsUUFBUU4sYUFDM0IsaUNBQUMsbUJBQWMseUdBQ2I7QUFBQSwyQkFBQyxnQkFBVyxzR0FBRSxNQUFNTyxZQUFZQyxJQUFJQyxTQUFTQyxRQUFRLE9BQU8sRUFBRSxHQUM1RCxpQ0FBQyxVQUFLLG1HQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsV0FBTSxtR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVE7QUFBQSxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQSxLQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPQTtBQUVKO0FBQUFDLE1BWFNMO0FBYVQsZUFBZUE7QUFBRyxJQUFBRCxJQUFBTTtBQUFBLGFBQUFOLElBQUE7QUFBQSxhQUFBTSxLQUFBIiwibmFtZXMiOlsiU3dpdGNoIiwiUm91dGUiLCJSb3V0ZXIiLCJXb3V0ZXJSb3V0ZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJUb2FzdGVyIiwiVG9vbHRpcFByb3ZpZGVyIiwiSG9tZSIsIk1hbmFnZSIsIk5vdEZvdW5kIiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInJldHJ5IiwiX2MiLCJBcHAiLCJpbXBvcnQiLCJlbnYiLCJCQVNFX1VSTCIsInJlcGxhY2UiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSb3V0ZXIgYXMgV291dGVyUm91dGVyIH0gZnJvbSBcIndvdXRlclwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdGVyXCI7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Rvb2x0aXBcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCBNYW5hZ2UgZnJvbSBcIkAvcGFnZXMvbWFuYWdlXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIkAvcGFnZXMvbm90LWZvdW5kXCI7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICByZXRyeTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN3aXRjaD5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL21hbmFnZVwiIGNvbXBvbmVudD17TWFuYWdlfSAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgPC9Td2l0Y2g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxUb29sdGlwUHJvdmlkZXI+XG4gICAgICAgIDxXb3V0ZXJSb3V0ZXIgYmFzZT17aW1wb3J0Lm1ldGEuZW52LkJBU0VfVVJMLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0+XG4gICAgICAgICAgPFJvdXRlciAvPlxuICAgICAgICA8L1dvdXRlclJvdXRlcj5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvQXBwLnRzeCJ9