import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/table.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import { cn } from "/src/lib/utils.ts";
const Table = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:9:2", "data-component-name": "div", className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxDEV(
    "table",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:10:4",
      "data-component-name": "table",
      ref,
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
    lineNumber: 9,
    columnNumber: 1
  }, this)
);
_c2 = Table;
Table.displayName = "Table";
const TableHeader = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("thead", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:23:2", "data-component-name": "thead", ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
    lineNumber: 23,
    columnNumber: 1
  }, this)
);
_c4 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "tbody",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:31:2",
      "data-component-name": "tbody",
      ref,
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 31,
      columnNumber: 1
    },
    this
  )
);
_c6 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(
  _c7 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "tfoot",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:43:2",
      "data-component-name": "tfoot",
      ref,
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 43,
      columnNumber: 1
    },
    this
  )
);
_c8 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  _c9 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "tr",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:58:2",
      "data-component-name": "tr",
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 58,
      columnNumber: 1
    },
    this
  )
);
_c0 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(
  _c1 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "th",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:73:2",
      "data-component-name": "th",
      ref,
      className: cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 73,
      columnNumber: 1
    },
    this
  )
);
_c10 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(
  _c11 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "td",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:88:2",
      "data-component-name": "td",
      ref,
      className: cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 88,
      columnNumber: 1
    },
    this
  )
);
_c12 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(
  _c13 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "caption",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/table.tsx:103:2",
      "data-component-name": "caption",
      ref,
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx",
      lineNumber: 103,
      columnNumber: 1
    },
    this
  )
);
_c14 = TableCaption;
TableCaption.displayName = "TableCaption";
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14;
$RefreshReg$(_c, "Table$React.forwardRef");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "TableHeader$React.forwardRef");
$RefreshReg$(_c4, "TableHeader");
$RefreshReg$(_c5, "TableBody$React.forwardRef");
$RefreshReg$(_c6, "TableBody");
$RefreshReg$(_c7, "TableFooter$React.forwardRef");
$RefreshReg$(_c8, "TableFooter");
$RefreshReg$(_c9, "TableRow$React.forwardRef");
$RefreshReg$(_c0, "TableRow");
$RefreshReg$(_c1, "TableHead$React.forwardRef");
$RefreshReg$(_c10, "TableHead");
$RefreshReg$(_c11, "TableCell$React.forwardRef");
$RefreshReg$(_c12, "TableCell");
$RefreshReg$(_c13, "TableCaption$React.forwardRef");
$RefreshReg$(_c14, "TableCaption");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/table.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUEsYUFBQUMsTUFBQTtBQUFBLGFBQUFFLE1BQUE7QUFBQSxhQUFBQyxNQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJjbiIsIlRhYmxlIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIlRhYmxlSGVhZGVyIiwiX2MzIiwiX2M0IiwiVGFibGVCb2R5IiwiX2M1IiwiX2M2IiwiVGFibGVGb290ZXIiLCJfYzciLCJfYzgiLCJUYWJsZVJvdyIsIl9jOSIsIl9jMCIsIlRhYmxlSGVhZCIsIl9jMSIsIl9jMTAiLCJUYWJsZUNlbGwiLCJfYzExIiwiX2MxMiIsIlRhYmxlQ2FwdGlvbiIsIl9jMTMiLCJfYzE0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInRhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IFRhYmxlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxuICAgIDx0YWJsZVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFwidy1mdWxsIGNhcHRpb24tYm90dG9tIHRleHQtc21cIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L2Rpdj5cbikpXG5UYWJsZS5kaXNwbGF5TmFtZSA9IFwiVGFibGVcIlxuXG5jb25zdCBUYWJsZUhlYWRlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRoZWFkIHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwiWyZfdHJdOmJvcmRlci1iXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbikpXG5UYWJsZUhlYWRlci5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJcIlxuXG5jb25zdCBUYWJsZUJvZHkgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Ym9keVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJbJl90cjpsYXN0LWNoaWxkXTpib3JkZXItMFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUJvZHkuZGlzcGxheU5hbWUgPSBcIlRhYmxlQm9keVwiXG5cbmNvbnN0IFRhYmxlRm9vdGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGZvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJib3JkZXItdCBiZy1tdXRlZC81MCBmb250LW1lZGl1bSBbJj50cl06bGFzdDpib3JkZXItYi0wXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUZvb3Rlci5kaXNwbGF5TmFtZSA9IFwiVGFibGVGb290ZXJcIlxuXG5jb25zdCBUYWJsZVJvdyA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZVJvd0VsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVJvd0VsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImJvcmRlci1iIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLW11dGVkLzUwIGRhdGEtW3N0YXRlPXNlbGVjdGVkXTpiZy1tdXRlZFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuVGFibGVSb3cuZGlzcGxheU5hbWUgPSBcIlRhYmxlUm93XCJcblxuY29uc3QgVGFibGVIZWFkID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlQ2VsbEVsZW1lbnQsXG4gIFJlYWN0LlRoSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0aFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImgtMTAgcHgtMiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMCBbJj5bcm9sZT1jaGVja2JveF1dOnRyYW5zbGF0ZS15LVsycHhdXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiXG5cbmNvbnN0IFRhYmxlQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZUNlbGxFbGVtZW50LFxuICBSZWFjdC5UZEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGRcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJwLTIgYWxpZ24tbWlkZGxlIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wIFsmPltyb2xlPWNoZWNrYm94XV06dHJhbnNsYXRlLXktWzJweF1cIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcblRhYmxlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVDZWxsXCJcblxuY29uc3QgVGFibGVDYXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlQ2FwdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNhcHRpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Y2FwdGlvblxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJtdC00IHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcblRhYmxlQ2FwdGlvbi5kaXNwbGF5TmFtZSA9IFwiVGFibGVDYXB0aW9uXCJcblxuZXhwb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlRm9vdGVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQ2FwdGlvbixcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvdWkvdGFibGUudHN4In0=