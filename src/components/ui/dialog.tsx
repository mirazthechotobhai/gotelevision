import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dialog.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import * as DialogPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dialog.js?v=1af48463";
import { X } from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Overlay,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:19:2",
      "data-component-name": "DialogPrimitive.Overlay",
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
      lineNumber: 19,
      columnNumber: 1
    },
    this
  )
);
_c2 = DialogOverlay;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(
  _c3 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPortal, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:34:2", "data-component-name": "DialogPortal", children: [
    /* @__PURE__ */ jsxDEV(DialogOverlay, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:35:4", "data-component-name": "DialogOverlay" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV(
      DialogPrimitive.Content,
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:36:4",
        "data-component-name": "DialogPrimitive.Content",
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxDEV(DialogPrimitive.Close, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:45:6", "data-component-name": "DialogPrimitive.Close", className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxDEV(X, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:46:8", "data-component-name": "X", className: "h-4 w-4" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
              lineNumber: 46,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:47:8", "data-component-name": "span", className: "sr-only", children: "Close" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
              lineNumber: 47,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
            lineNumber: 45,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
    lineNumber: 34,
    columnNumber: 1
  }, this)
);
_c4 = DialogContent;
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:58:2",
    "data-component-name": "div",
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
    lineNumber: 58,
    columnNumber: 1
  },
  this
);
_c5 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:72:2",
    "data-component-name": "div",
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 1
  },
  this
);
_c6 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(
  _c7 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Title,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:86:2",
      "data-component-name": "DialogPrimitive.Title",
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
      lineNumber: 86,
      columnNumber: 1
    },
    this
  )
);
_c8 = DialogTitle;
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(
  _c9 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Description,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dialog.tsx:101:2",
      "data-component-name": "DialogPrimitive.Description",
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx",
      lineNumber: 101,
      columnNumber: 1
    },
    this
  )
);
_c0 = DialogDescription;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0;
$RefreshReg$(_c, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c2, "DialogOverlay");
$RefreshReg$(_c3, "DialogContent$React.forwardRef");
$RefreshReg$(_c4, "DialogContent");
$RefreshReg$(_c5, "DialogHeader");
$RefreshReg$(_c6, "DialogFooter");
$RefreshReg$(_c7, "DialogTitle$React.forwardRef");
$RefreshReg$(_c8, "DialogTitle");
$RefreshReg$(_c9, "DialogDescription$React.forwardRef");
$RefreshReg$(_c0, "DialogDescription");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dialog.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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bG9nUHJpbWl0aXZlIiwiWCIsImNuIiwiRGlhbG9nIiwiUm9vdCIsIkRpYWxvZ1RyaWdnZXIiLCJUcmlnZ2VyIiwiRGlhbG9nUG9ydGFsIiwiUG9ydGFsIiwiRGlhbG9nQ2xvc2UiLCJDbG9zZSIsIkRpYWxvZ092ZXJsYXkiLCJmb3J3YXJkUmVmIiwiX2MiLCJjbGFzc05hbWUiLCJwcm9wcyIsInJlZiIsIl9jMiIsImRpc3BsYXlOYW1lIiwiT3ZlcmxheSIsIkRpYWxvZ0NvbnRlbnQiLCJfYzMiLCJjaGlsZHJlbiIsIl9jNCIsIkNvbnRlbnQiLCJEaWFsb2dIZWFkZXIiLCJfYzUiLCJEaWFsb2dGb290ZXIiLCJfYzYiLCJEaWFsb2dUaXRsZSIsIl9jNyIsIl9jOCIsIlRpdGxlIiwiRGlhbG9nRGVzY3JpcHRpb24iLCJfYzkiLCJfYzAiLCJEZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJkaWFsb2cudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBEaWFsb2dQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kaWFsb2dcIlxuaW1wb3J0IHsgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IERpYWxvZyA9IERpYWxvZ1ByaW1pdGl2ZS5Sb290XG5cbmNvbnN0IERpYWxvZ1RyaWdnZXIgPSBEaWFsb2dQcmltaXRpdmUuVHJpZ2dlclxuXG5jb25zdCBEaWFsb2dQb3J0YWwgPSBEaWFsb2dQcmltaXRpdmUuUG9ydGFsXG5cbmNvbnN0IERpYWxvZ0Nsb3NlID0gRGlhbG9nUHJpbWl0aXZlLkNsb3NlXG5cbmNvbnN0IERpYWxvZ092ZXJsYXkgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuT3ZlcmxheT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEaWFsb2dQcmltaXRpdmUuT3ZlcmxheVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay84MCAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkRpYWxvZ092ZXJsYXkuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuT3ZlcmxheS5kaXNwbGF5TmFtZVxuXG5jb25zdCBEaWFsb2dDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERpYWxvZ1BvcnRhbD5cbiAgICA8RGlhbG9nT3ZlcmxheSAvPlxuICAgIDxEaWFsb2dQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZpeGVkIGxlZnQtWzUwJV0gdG9wLVs1MCVdIHotNTAgZ3JpZCB3LWZ1bGwgbWF4LXctbGcgdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBnYXAtNCBib3JkZXIgYmctYmFja2dyb3VuZCBwLTYgc2hhZG93LWxnIGR1cmF0aW9uLTIwMCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tbGVmdC0xLzIgZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tdG9wLVs0OCVdIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tbGVmdC0xLzIgZGF0YS1bc3RhdGU9b3Blbl06c2xpZGUtaW4tZnJvbS10b3AtWzQ4JV0gc206cm91bmRlZC1sZ1wiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPERpYWxvZ1ByaW1pdGl2ZS5DbG9zZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC00IHJvdW5kZWQtc20gb3BhY2l0eS03MCByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmluZyBmb2N1czpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPlxuICAgICAgPC9EaWFsb2dQcmltaXRpdmUuQ2xvc2U+XG4gICAgPC9EaWFsb2dQcmltaXRpdmUuQ29udGVudD5cbiAgPC9EaWFsb2dQb3J0YWw+XG4pKVxuRGlhbG9nQ29udGVudC5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IERpYWxvZ0hlYWRlciA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PikgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEuNSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuRGlhbG9nSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dIZWFkZXJcIlxuXG5jb25zdCBEaWFsb2dGb290ZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWVuZCBzbTpzcGFjZS14LTJcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuRGlhbG9nRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dGb290ZXJcIlxuXG5jb25zdCBEaWFsb2dUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLlRpdGxlPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RGlhbG9nUHJpbWl0aXZlLlRpdGxlXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwidGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy10aWdodFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuRGlhbG9nVGl0bGUuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuVGl0bGUuZGlzcGxheU5hbWVcblxuY29uc3QgRGlhbG9nRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb24+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvblxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5EaWFsb2dEZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZVxuXG5leHBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ1BvcnRhbCxcbiAgRGlhbG9nT3ZlcmxheSxcbiAgRGlhbG9nVHJpZ2dlcixcbiAgRGlhbG9nQ2xvc2UsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXJ0aWZhY3RzL2lwdHYtYXBwL3NyYy9jb21wb25lbnRzL3VpL2RpYWxvZy50c3gifQ==