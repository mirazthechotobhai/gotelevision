import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/label.tsx");"use strict";
"use client";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import * as LabelPrimitive from "/node_modules/.vite/deps/@radix-ui_react-label.js?v=1af48463";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    LabelPrimitive.Root,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/label.tsx:18:2",
      "data-component-name": "LabelPrimitive.Root",
      ref,
      className: cn(labelVariants(), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/label.tsx",
      lineNumber: 18,
      columnNumber: 1
    },
    this
  )
);
_c2 = Label;
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
var _c, _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/label.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/label.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/label.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFpQkU7QUFmRixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLG9CQUFvQjtBQUNoQyxTQUFTQyxXQUE4QjtBQUV2QyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLGdCQUFnQkY7QUFBQUEsRUFDcEI7QUFDRjtBQUVBLE1BQU1HLFFBQVFMLE1BQU1NO0FBQUFBLEVBSW5CQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVcsR0FBR0MsTUFBTSxHQUFHQyxRQUMxQjtBQUFBLElBQUMsZUFBZTtBQUFBLElBQWY7QUFBQSxNQUFrQjtBQUFBO0FBQUEsTUFDakI7QUFBQSxNQUNBLFdBQVdQLEdBQUdDLGNBQWMsR0FBR0ksU0FBUztBQUFBLE1BQ3hDLEdBQUlDO0FBQUFBO0FBQUFBLElBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBR1c7QUFFWjtBQUFBRSxNQVZLTjtBQVdOQSxNQUFNTyxjQUFjWCxlQUFlWSxLQUFLRDtBQUV4QyxTQUFTUDtBQUFNLElBQUFFLElBQUFJO0FBQUEsYUFBQUosSUFBQTtBQUFBLGFBQUFJLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkxhYmVsUHJpbWl0aXZlIiwiY3ZhIiwiY24iLCJsYWJlbFZhcmlhbnRzIiwiTGFiZWwiLCJmb3J3YXJkUmVmIiwiX2MiLCJjbGFzc05hbWUiLCJwcm9wcyIsInJlZiIsIl9jMiIsImRpc3BsYXlOYW1lIiwiUm9vdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJsYWJlbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIExhYmVsUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIlxuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IGxhYmVsVmFyaWFudHMgPSBjdmEoXG4gIFwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmUgcGVlci1kaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgcGVlci1kaXNhYmxlZDpvcGFjaXR5LTcwXCJcbilcblxuY29uc3QgTGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PiAmXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiBsYWJlbFZhcmlhbnRzPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TGFiZWxQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24obGFiZWxWYXJpYW50cygpLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5MYWJlbC5kaXNwbGF5TmFtZSA9IExhYmVsUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWVcblxuZXhwb3J0IHsgTGFiZWwgfVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvY29tcG9uZW50cy91aS9sYWJlbC50c3gifQ==