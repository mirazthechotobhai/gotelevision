import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/card.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import { cn } from "/src/lib/utils.ts";
const Card = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:9:2",
      "data-component-name": "div",
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
      lineNumber: 9,
      columnNumber: 1
    },
    this
  )
);
_c2 = Card;
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:24:2",
      "data-component-name": "div",
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
      lineNumber: 24,
      columnNumber: 1
    },
    this
  )
);
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:36:2",
      "data-component-name": "div",
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
      lineNumber: 36,
      columnNumber: 1
    },
    this
  )
);
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  _c7 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:48:2",
      "data-component-name": "div",
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
      lineNumber: 48,
      columnNumber: 1
    },
    this
  )
);
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  _c9 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:60:2", "data-component-name": "div", ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
    lineNumber: 60,
    columnNumber: 1
  }, this)
);
_c0 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  _c1 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/card.tsx:68:2",
      "data-component-name": "div",
      ref,
      className: cn("flex items-center p-6 pt-0", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx",
      lineNumber: 68,
      columnNumber: 1
    },
    this
  )
);
_c10 = CardFooter;
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10;
$RefreshReg$(_c, "Card$React.forwardRef");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c0, "CardContent");
$RefreshReg$(_c1, "CardFooter$React.forwardRef");
$RefreshReg$(_c10, "CardFooter");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/card.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUcsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFFLEtBQUE7QUFBQSxhQUFBQyxLQUFBO0FBQUEsYUFBQUUsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUMsTUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJDYXJkIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIkNhcmRIZWFkZXIiLCJfYzMiLCJfYzQiLCJDYXJkVGl0bGUiLCJfYzUiLCJfYzYiLCJDYXJkRGVzY3JpcHRpb24iLCJfYzciLCJfYzgiLCJDYXJkQ29udGVudCIsIl9jOSIsIl9jMCIsIkNhcmRGb290ZXIiLCJfYzEiLCJfYzEwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgQ2FyZCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdlxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJvdW5kZWQteGwgYm9yZGVyIGJnLWNhcmQgdGV4dC1jYXJkLWZvcmVncm91bmQgc2hhZG93XCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5DYXJkLmRpc3BsYXlOYW1lID0gXCJDYXJkXCJcblxuY29uc3QgQ2FyZEhlYWRlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdlxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41IHAtNlwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5DYXJkSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJDYXJkSGVhZGVyXCJcblxuY29uc3QgQ2FyZFRpdGxlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcImZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0XCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkNhcmRUaXRsZS5kaXNwbGF5TmFtZSA9IFwiQ2FyZFRpdGxlXCJcblxuY29uc3QgQ2FyZERlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkNhcmREZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiQ2FyZERlc2NyaXB0aW9uXCJcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJwLTYgcHQtMFwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4pKVxuQ2FyZENvbnRlbnQuZGlzcGxheU5hbWUgPSBcIkNhcmRDb250ZW50XCJcblxuY29uc3QgQ2FyZEZvb3RlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdlxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgcHQtMFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5DYXJkRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJDYXJkRm9vdGVyXCJcblxuZXhwb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZEZvb3RlciwgQ2FyZFRpdGxlLCBDYXJkRGVzY3JpcHRpb24sIENhcmRDb250ZW50IH1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvdWkvY2FyZC50c3gifQ==