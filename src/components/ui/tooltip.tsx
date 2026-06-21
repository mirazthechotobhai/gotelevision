import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/tooltip.tsx");"use strict";
"use client";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import * as TooltipPrimitive from "/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(
  _c = ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(TooltipPrimitive.Portal, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/tooltip.tsx:18:2", "data-component-name": "TooltipPrimitive.Portal", children: /* @__PURE__ */ jsxDEV(
    TooltipPrimitive.Content,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/tooltip.tsx:19:4",
      "data-component-name": "TooltipPrimitive.Content",
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/tooltip.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/tooltip.tsx",
    lineNumber: 18,
    columnNumber: 1
  }, this)
);
_c2 = TooltipContent;
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
var _c, _c2;
$RefreshReg$(_c, "TooltipContent$React.forwardRef");
$RefreshReg$(_c2, "TooltipContent");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/tooltip.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/tooltip.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/tooltip.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFrQkk7QUFoQkosWUFBWUEsV0FBVztBQUN2QixZQUFZQyxzQkFBc0I7QUFFbEMsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxrQkFBa0JGLGlCQUFpQkc7QUFFekMsTUFBTUMsVUFBVUosaUJBQWlCSztBQUVqQyxNQUFNQyxpQkFBaUJOLGlCQUFpQk87QUFFeEMsTUFBTUMsaUJBQWlCVCxNQUFNVTtBQUFBQSxFQUc1QkMsS0FBQ0EsQ0FBQyxFQUFFQyxXQUFXQyxhQUFhLEdBQUcsR0FBR0MsTUFBTSxHQUFHQyxRQUMxQyx1QkFBQyxpQkFBaUIsUUFBakIsRUFBc0IsbUlBQ3JCO0FBQUEsSUFBQyxpQkFBaUI7QUFBQSxJQUFqQjtBQUFBLE1BQXVCO0FBQUE7QUFBQSxNQUN0QjtBQUFBLE1BQ0E7QUFBQSxNQUNBLFdBQVdiO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBVTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRTtBQUFBQTtBQUFBQSxJQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9XLEtBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBO0FBQ0Q7QUFBQUUsTUFmS1A7QUFnQk5BLGVBQWVRLGNBQWNoQixpQkFBaUJpQixRQUFRRDtBQUV0RCxTQUFTWixTQUFTRSxnQkFBZ0JFLGdCQUFnQk47QUFBZ0IsSUFBQVEsSUFBQUs7QUFBQSxhQUFBTCxJQUFBO0FBQUEsYUFBQUssS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwiVG9vbHRpcFByaW1pdGl2ZSIsImNuIiwiVG9vbHRpcFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJUb29sdGlwIiwiUm9vdCIsIlRvb2x0aXBUcmlnZ2VyIiwiVHJpZ2dlciIsIlRvb2x0aXBDb250ZW50IiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwic2lkZU9mZnNldCIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJDb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInRvb2x0aXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBUb29sdGlwUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgVG9vbHRpcFByb3ZpZGVyID0gVG9vbHRpcFByaW1pdGl2ZS5Qcm92aWRlclxuXG5jb25zdCBUb29sdGlwID0gVG9vbHRpcFByaW1pdGl2ZS5Sb290XG5cbmNvbnN0IFRvb2x0aXBUcmlnZ2VyID0gVG9vbHRpcFByaW1pdGl2ZS5UcmlnZ2VyXG5cbmNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8VG9vbHRpcFByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPFRvb2x0aXBQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLXByaW1hcnkgcHgtMyBweS0xLjUgdGV4dC14cyB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBhbmltYXRlLWluIGZhZGUtaW4tMCB6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgb3JpZ2luLVstLXJhZGl4LXRvb2x0aXAtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luXVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9Ub29sdGlwUHJpbWl0aXZlLlBvcnRhbD5cbikpXG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9IFRvb2x0aXBQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZVxuXG5leHBvcnQgeyBUb29sdGlwLCBUb29sdGlwVHJpZ2dlciwgVG9vbHRpcENvbnRlbnQsIFRvb2x0aXBQcm92aWRlciB9XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXJ0aWZhY3RzL2lwdHYtYXBwL3NyYy9jb21wb25lbnRzL3VpL3Rvb2x0aXAudHN4In0=