import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toaster.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { useToast } from "/src/hooks/use-toast.ts";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "/src/components/ui/toast.tsx";
export function Toaster() {
  _s();
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:15:4", "data-component-name": "ToastProvider", children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:18:10", "data-component-name": "Toast", ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:19:12", "data-component-name": "div", className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:20:24", "data-component-name": "ToastTitle", children: title }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:22:16", "data-component-name": "ToastDescription", children: description }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:26:12", "data-component-name": "ToastClose" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/toaster.tsx:30:6", "data-component-name": "ToastViewport" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c = Toaster;
var _c;
$RefreshReg$(_c, "Toaster");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/toaster.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQW1Cd0I7O0FBbkJ4QixTQUFTQSxnQkFBZ0I7QUFDekI7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBRUEsZ0JBQVNDLFVBQVU7QUFBQUMsS0FBQTtBQUN4QixRQUFNLEVBQUVDLE9BQU8sSUFBSVQsU0FBUztBQUU1QixTQUNFLHVCQUFDLGlCQUFZLHlIQUNWUztBQUFBQSxXQUFPQyxJQUFJLFNBQVUsRUFBRUMsSUFBSUMsT0FBT0MsYUFBYUMsUUFBUSxHQUFHQyxNQUFNLEdBQUc7QUFDbEUsYUFDRSx1QkFBQyxTQUFJLGtIQUFXLEdBQUlBLE9BQ2xCO0FBQUEsK0JBQUMsU0FBRSxnSEFBRSxXQUFVLGNBQ1pIO0FBQUFBLG1CQUFTLHVCQUFDLGNBQVMsdUhBQUdBLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW1CO0FBQUEsVUFDNUJDLGVBQ0MsdUJBQUMsb0JBQWUsNkhBQUdBLHlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErQjtBQUFBLGFBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFLQTtBQUFBLFFBQ0NDO0FBQUFBLFFBQ0QsdUJBQUMsY0FBUyx5SEFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVc7QUFBQSxXQVJESCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFTQTtBQUFBLElBRUosQ0FBQztBQUFBLElBQ0QsdUJBQUMsaUJBQVksMkhBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFjO0FBQUEsT0FmaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCQTtBQUVKO0FBQUFILEdBdEJnQkQsU0FBTztBQUFBLFVBQ0ZQLFFBQVE7QUFBQTtBQUFBLEtBRGJPO0FBQU8sSUFBQVM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlVG9hc3QiLCJUb2FzdCIsIlRvYXN0Q2xvc2UiLCJUb2FzdERlc2NyaXB0aW9uIiwiVG9hc3RQcm92aWRlciIsIlRvYXN0VGl0bGUiLCJUb2FzdFZpZXdwb3J0IiwiVG9hc3RlciIsIl9zIiwidG9hc3RzIiwibWFwIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwicHJvcHMiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ0b2FzdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS10b2FzdFwiXG5pbXBvcnQge1xuICBUb2FzdCxcbiAgVG9hc3RDbG9zZSxcbiAgVG9hc3REZXNjcmlwdGlvbixcbiAgVG9hc3RQcm92aWRlcixcbiAgVG9hc3RUaXRsZSxcbiAgVG9hc3RWaWV3cG9ydCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBUb2FzdGVyKCkge1xuICBjb25zdCB7IHRvYXN0cyB9ID0gdXNlVG9hc3QoKVxuXG4gIHJldHVybiAoXG4gICAgPFRvYXN0UHJvdmlkZXI+XG4gICAgICB7dG9hc3RzLm1hcChmdW5jdGlvbiAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBhY3Rpb24sIC4uLnByb3BzIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VG9hc3Qga2V5PXtpZH0gey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMVwiPlxuICAgICAgICAgICAgICB7dGl0bGUgJiYgPFRvYXN0VGl0bGU+e3RpdGxlfTwvVG9hc3RUaXRsZT59XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPFRvYXN0RGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvVG9hc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2FjdGlvbn1cbiAgICAgICAgICAgIDxUb2FzdENsb3NlIC8+XG4gICAgICAgICAgPC9Ub2FzdD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8VG9hc3RWaWV3cG9ydCAvPlxuICAgIDwvVG9hc3RQcm92aWRlcj5cbiAgKVxufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvY29tcG9uZW50cy91aS90b2FzdGVyLnRzeCJ9