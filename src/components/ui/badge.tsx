import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/badge.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const badgeVariants = cva(
  // @replit
  // Whitespace-nowrap: Badges should never wrap.
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default: (
          // @replit shadow-xs instead of shadow, no hover because we use hover-elevate
          "border-transparent bg-primary text-primary-foreground shadow-xs"
        ),
        secondary: (
          // @replit no hover because we use hover-elevate
          "border-transparent bg-secondary text-secondary-foreground"
        ),
        destructive: (
          // @replit shadow-xs instead of shadow, no hover because we use hover-elevate
          "border-transparent bg-destructive text-destructive-foreground shadow-xs"
        ),
        // @replit shadow-xs" - use badge outline variable
        outline: "text-foreground border [border-color:var(--badge-outline)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/badge.tsx:39:4", "data-component-name": "div", className: cn(badgeVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/badge.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
_c = Badge;
export { Badge, badgeVariants };
var _c;
$RefreshReg$(_c, "Badge");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/badge.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/badge.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/badge.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXNDSTtBQXJDSixTQUFTQSxXQUE4QjtBQUV2QyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLGdCQUFnQkY7QUFBQUE7QUFBQUE7QUFBQUEsRUFHcEI7QUFBQSxFQUVBO0FBQUEsSUFDRUcsVUFBVTtBQUFBLE1BQ1JDLFNBQVM7QUFBQSxRQUNQQztBQUFBQTtBQUFBQSxVQUVFO0FBQUE7QUFBQSxRQUNGQztBQUFBQTtBQUFBQSxVQUVFO0FBQUE7QUFBQSxRQUNGQztBQUFBQTtBQUFBQSxVQUVFO0FBQUE7QUFBQTtBQUFBLFFBRUZDLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0FDLGlCQUFpQjtBQUFBLE1BQ2ZMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGO0FBTUEsU0FBU00sTUFBTSxFQUFFQyxXQUFXUCxTQUFTLEdBQUdRLE1BQWtCLEdBQUc7QUFDM0QsU0FDRSx1QkFBQyxTQUFFLDZHQUFFLFdBQVdYLEdBQUdDLGNBQWMsRUFBRUUsUUFBUSxDQUFDLEdBQUdPLFNBQVMsR0FBRyxHQUFJQyxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFFO0FBRXpFO0FBQUFDLEtBSlNIO0FBTVQsU0FBU0EsT0FBT1I7QUFBYyxJQUFBVztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJjdmEiLCJjbiIsImJhZGdlVmFyaWFudHMiLCJ2YXJpYW50cyIsInZhcmlhbnQiLCJkZWZhdWx0Iiwic2Vjb25kYXJ5IiwiZGVzdHJ1Y3RpdmUiLCJvdXRsaW5lIiwiZGVmYXVsdFZhcmlhbnRzIiwiQmFkZ2UiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImJhZGdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IGJhZGdlVmFyaWFudHMgPSBjdmEoXG4gIC8vIEByZXBsaXRcbiAgLy8gV2hpdGVzcGFjZS1ub3dyYXA6IEJhZGdlcyBzaG91bGQgbmV2ZXIgd3JhcC5cbiAgXCJ3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgcHgtMi41IHB5LTAuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJpbmcgZm9jdXM6cmluZy1vZmZzZXQtMlwiICtcbiAgXCIgaG92ZXItZWxldmF0ZSBcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gQHJlcGxpdCBzaGFkb3cteHMgaW5zdGVhZCBvZiBzaGFkb3csIG5vIGhvdmVyIGJlY2F1c2Ugd2UgdXNlIGhvdmVyLWVsZXZhdGVcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdy14c1wiLFxuICAgICAgICBzZWNvbmRhcnk6XG4gICAgICAgICAgLy8gQHJlcGxpdCBubyBob3ZlciBiZWNhdXNlIHdlIHVzZSBob3Zlci1lbGV2YXRlXG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmRcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgLy8gQHJlcGxpdCBzaGFkb3cteHMgaW5zdGVhZCBvZiBzaGFkb3csIG5vIGhvdmVyIGJlY2F1c2Ugd2UgdXNlIGhvdmVyLWVsZXZhdGVcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1kZXN0cnVjdGl2ZSB0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgc2hhZG93LXhzXCIsXG4gICAgICAgICAgLy8gQHJlcGxpdCBzaGFkb3cteHNcIiAtIHVzZSBiYWRnZSBvdXRsaW5lIHZhcmlhYmxlXG4gICAgICAgIG91dGxpbmU6IFwidGV4dC1mb3JlZ3JvdW5kIGJvcmRlciBbYm9yZGVyLWNvbG9yOnZhcigtLWJhZGdlLW91dGxpbmUpXVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfVxuKVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiBiYWRnZVZhcmlhbnRzPiB7fVxuXG5mdW5jdGlvbiBCYWRnZSh7IGNsYXNzTmFtZSwgdmFyaWFudCwgLi4ucHJvcHMgfTogQmFkZ2VQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihiYWRnZVZhcmlhbnRzKHsgdmFyaWFudCB9KSwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuICApXG59XG5cbmV4cG9ydCB7IEJhZGdlLCBiYWRnZVZhcmlhbnRzIH1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvdWkvYmFkZ2UudHN4In0=