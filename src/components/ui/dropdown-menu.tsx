import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx");"use strict";
"use client";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import * as DropdownMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=1af48463";
import { Check, ChevronRight, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(
  _c = ({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:27:2",
      "data-component-name": "DropdownMenuPrimitive.SubTrigger",
      ref,
      className: cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(ChevronRight, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:37:4", "data-component-name": "ChevronRight", className: "ml-auto" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 37,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 27,
      columnNumber: 1
    },
    this
  )
);
_c2 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubContent,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:47:2",
      "data-component-name": "DropdownMenuPrimitive.SubContent",
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 47,
      columnNumber: 1
    },
    this
  )
);
_c4 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(
  _c5 = ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:63:2", "data-component-name": "DropdownMenuPrimitive.Portal", children: /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Content,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:64:4",
      "data-component-name": "DropdownMenuPrimitive.Content",
      ref,
      sideOffset,
      className: cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
    lineNumber: 63,
    columnNumber: 1
  }, this)
);
_c6 = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(
  _c7 = ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Item,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:84:2",
      "data-component-name": "DropdownMenuPrimitive.Item",
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 84,
      columnNumber: 1
    },
    this
  )
);
_c8 = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(
  _c9 = ({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:100:2",
      "data-component-name": "DropdownMenuPrimitive.CheckboxItem",
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:109:4", "data-component-name": "span", className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:110:6", "data-component-name": "DropdownMenuPrimitive.ItemIndicator", children: /* @__PURE__ */ jsxDEV(Check, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:111:8", "data-component-name": "Check", className: "h-4 w-4" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 109,
          columnNumber: 5
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 100,
      columnNumber: 1
    },
    this
  )
);
_c0 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(
  _c1 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:124:2",
      "data-component-name": "DropdownMenuPrimitive.RadioItem",
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:132:4", "data-component-name": "span", className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:133:6", "data-component-name": "DropdownMenuPrimitive.ItemIndicator", children: /* @__PURE__ */ jsxDEV(Circle, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:134:8", "data-component-name": "Circle", className: "h-2 w-2 fill-current" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 133,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
          lineNumber: 132,
          columnNumber: 5
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 124,
      columnNumber: 1
    },
    this
  )
);
_c10 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(
  _c11 = ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Label,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:148:2",
      "data-component-name": "DropdownMenuPrimitive.Label",
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 148,
      columnNumber: 1
    },
    this
  )
);
_c12 = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(
  _c13 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Separator,
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:164:2",
      "data-component-name": "DropdownMenuPrimitive.Separator",
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 164,
      columnNumber: 1
    },
    this
  )
);
_c14 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxDEV(
    "span",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/ui/dropdown-menu.tsx:177:4",
      "data-component-name": "span",
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx",
      lineNumber: 177,
      columnNumber: 5
    },
    this
  );
};
_c15 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c2, "DropdownMenuSubTrigger");
$RefreshReg$(_c3, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c4, "DropdownMenuSubContent");
$RefreshReg$(_c5, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c6, "DropdownMenuContent");
$RefreshReg$(_c7, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c8, "DropdownMenuItem");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c0, "DropdownMenuCheckboxItem");
$RefreshReg$(_c1, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c10, "DropdownMenuRadioItem");
$RefreshReg$(_c11, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c12, "DropdownMenuLabel");
$RefreshReg$(_c13, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c14, "DropdownMenuSeparator");
$RefreshReg$(_c15, "DropdownMenuShortcut");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/dropdown-menu.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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Y24iLCJEcm9wZG93bk1lbnUiLCJSb290IiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIlRyaWdnZXIiLCJEcm9wZG93bk1lbnVHcm91cCIsIkdyb3VwIiwiRHJvcGRvd25NZW51UG9ydGFsIiwiUG9ydGFsIiwiRHJvcGRvd25NZW51U3ViIiwiU3ViIiwiRHJvcGRvd25NZW51UmFkaW9Hcm91cCIsIlJhZGlvR3JvdXAiLCJEcm9wZG93bk1lbnVTdWJUcmlnZ2VyIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwiaW5zZXQiLCJjaGlsZHJlbiIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJTdWJUcmlnZ2VyIiwiRHJvcGRvd25NZW51U3ViQ29udGVudCIsIl9jMyIsIl9jNCIsIlN1YkNvbnRlbnQiLCJEcm9wZG93bk1lbnVDb250ZW50IiwiX2M1Iiwic2lkZU9mZnNldCIsIl9jNiIsIkNvbnRlbnQiLCJEcm9wZG93bk1lbnVJdGVtIiwiX2M3IiwiX2M4IiwiSXRlbSIsIkRyb3Bkb3duTWVudUNoZWNrYm94SXRlbSIsIl9jOSIsImNoZWNrZWQiLCJfYzAiLCJDaGVja2JveEl0ZW0iLCJEcm9wZG93bk1lbnVSYWRpb0l0ZW0iLCJfYzEiLCJfYzEwIiwiUmFkaW9JdGVtIiwiRHJvcGRvd25NZW51TGFiZWwiLCJfYzExIiwiX2MxMiIsIkxhYmVsIiwiRHJvcGRvd25NZW51U2VwYXJhdG9yIiwiX2MxMyIsIl9jMTQiLCJTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVTaG9ydGN1dCIsIl9jMTUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIlxuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgRHJvcGRvd25NZW51ID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3RcblxuY29uc3QgRHJvcGRvd25NZW51VHJpZ2dlciA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyXG5cbmNvbnN0IERyb3Bkb3duTWVudUdyb3VwID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLkdyb3VwXG5cbmNvbnN0IERyb3Bkb3duTWVudVBvcnRhbCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWxcblxuY29uc3QgRHJvcGRvd25NZW51U3ViID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlxuXG5jb25zdCBEcm9wZG93bk1lbnVSYWRpb0dyb3VwID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvR3JvdXBcblxuY29uc3QgRHJvcGRvd25NZW51U3ViVHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuXG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2l6ZS00IFsmX3N2Z106c2hyaW5rLTBcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJtbC1hdXRvXCIgLz5cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj5cbikpXG5Ecm9wZG93bk1lbnVTdWJUcmlnZ2VyLmRpc3BsYXlOYW1lID1cbiAgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXIuZGlzcGxheU5hbWVcblxuY29uc3QgRHJvcGRvd25NZW51U3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgb3JpZ2luLVstLXJhZGl4LWRyb3Bkb3duLW1lbnUtY29udGVudC10cmFuc2Zvcm0tb3JpZ2luXVwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuRHJvcGRvd25NZW51U3ViQ29udGVudC5kaXNwbGF5TmFtZSA9XG4gIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudUNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiei01MCBtYXgtaC1bdmFyKC0tcmFkaXgtZHJvcGRvd24tbWVudS1jb250ZW50LWF2YWlsYWJsZS1oZWlnaHQpXSBtaW4tdy1bOHJlbV0gb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1tZFwiLFxuICAgICAgICBcImRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiBvcmlnaW4tWy0tcmFkaXgtZHJvcGRvd24tbWVudS1jb250ZW50LXRyYW5zZm9ybS1vcmlnaW5dXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4pKVxuRHJvcGRvd25NZW51Q29udGVudC5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xuICAgIGluc2V0PzogYm9vbGVhblxuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIFsmPnN2Z106c2l6ZS00IFsmPnN2Z106c2hyaW5rLTBcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuRHJvcGRvd25NZW51SXRlbS5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNoZWNrZWQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cbikpXG5Ecm9wZG93bk1lbnVDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPVxuICBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudVJhZGlvSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJoLTIgdy0yIGZpbGwtY3VycmVudFwiIC8+XG4gICAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cbikpXG5Ecm9wZG93bk1lbnVSYWRpb0l0ZW0uZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtLmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudUxhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWw+ICYge1xuICAgIGluc2V0PzogYm9vbGVhblxuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkRyb3Bkb3duTWVudUxhYmVsLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudVNlcGFyYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcIi1teC0xIG15LTEgaC1weCBiZy1tdXRlZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5Ecm9wZG93bk1lbnVTZXBhcmF0b3IuZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yLmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudVNob3J0Y3V0ID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2NuKFwibWwtYXV0byB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCBvcGFjaXR5LTYwXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuRHJvcGRvd25NZW51U2hvcnRjdXQuZGlzcGxheU5hbWUgPSBcIkRyb3Bkb3duTWVudVNob3J0Y3V0XCJcblxuZXhwb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0sXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcbiAgRHJvcGRvd25NZW51TGFiZWwsXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXG4gIERyb3Bkb3duTWVudUdyb3VwLFxuICBEcm9wZG93bk1lbnVQb3J0YWwsXG4gIERyb3Bkb3duTWVudVN1YixcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcbiAgRHJvcGRvd25NZW51U3ViVHJpZ2dlcixcbiAgRHJvcGRvd25NZW51UmFkaW9Hcm91cCxcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudS50c3gifQ==