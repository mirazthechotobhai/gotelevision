import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/button.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=1af48463";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
  {
    variants: {
      variant: {
        default: (
          // @replit: no hover, and add primary border
          "bg-primary text-primary-foreground border border-primary-border"
        ),
        destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
        outline: (
          // @replit Shows the background color of whatever card / sidebar / accent background it is inside of.
          // Inherits the current text color. Uses shadow-xs. no shadow on active
          // No hover state
          " border [border-color:var(--button-outline)] shadow-xs active:shadow-none "
        ),
        secondary: (
          // @replit border, no hover, no shadow, secondary border.
          "border bg-secondary text-secondary-foreground border border-secondary-border "
        ),
        // @replit no hover, transparent border
        ghost: "border border-transparent",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        // @replit changed sizes
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  _c = ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(
      Comp,
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/button.tsx:55:6",
        "data-component-name": "Comp",
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/button.tsx",
        lineNumber: 55,
        columnNumber: 5
      },
      this
    );
  }
);
_c2 = Button;
Button.displayName = "Button";
export { Button, buttonVariants };
var _c, _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/button.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/button.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQXNETTtBQXRETixZQUFZQSxXQUFXO0FBQ3ZCLFNBQVNDLFlBQVk7QUFDckIsU0FBU0MsV0FBOEI7QUFFdkMsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxpQkFBaUJGO0FBQUFBLEVBQ3JCO0FBQUEsRUFFQTtBQUFBLElBQ0VHLFVBQVU7QUFBQSxNQUNSQyxTQUFTO0FBQUEsUUFDUEM7QUFBQUE7QUFBQUEsVUFFRztBQUFBO0FBQUEsUUFDSEMsYUFDRTtBQUFBLFFBQ0ZDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLFVBSUU7QUFBQTtBQUFBLFFBQ0ZDO0FBQUFBO0FBQUFBLFVBRUU7QUFBQTtBQUFBO0FBQUEsUUFFRkMsT0FBTztBQUFBLFFBQ1BDLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQUMsTUFBTTtBQUFBO0FBQUEsUUFFSk4sU0FBUztBQUFBLFFBQ1RPLElBQUk7QUFBQSxRQUNKQyxJQUFJO0FBQUEsUUFDSkMsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQUMsaUJBQWlCO0FBQUEsTUFDZlgsU0FBUztBQUFBLE1BQ1RPLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGO0FBUUEsTUFBTUssU0FBU2xCLE1BQU1tQjtBQUFBQSxFQUEwQ0MsS0FDN0RBLENBQUMsRUFBRUMsV0FBV2YsU0FBU08sTUFBTVMsVUFBVSxPQUFPLEdBQUdDLE1BQU0sR0FBR0MsUUFBUTtBQUNoRSxVQUFNQyxPQUFPSCxVQUFVckIsT0FBTztBQUM5QixXQUNFO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFBRztBQUFBO0FBQUEsUUFDRixXQUFXRSxHQUFHQyxlQUFlLEVBQUVFLFNBQVNPLE1BQU1RLFVBQVUsQ0FBQyxDQUFDO0FBQUEsUUFDMUQ7QUFBQSxRQUNBLEdBQUlFO0FBQUFBO0FBQUFBLE1BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBR1c7QUFBQSxFQUdmO0FBQ0Y7QUFBQUcsTUFYTVI7QUFZTkEsT0FBT1MsY0FBYztBQUVyQixTQUFTVCxRQUFRZDtBQUFlLElBQUFnQixJQUFBTTtBQUFBLGFBQUFOLElBQUE7QUFBQSxhQUFBTSxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTbG90IiwiY3ZhIiwiY24iLCJidXR0b25WYXJpYW50cyIsInZhcmlhbnRzIiwidmFyaWFudCIsImRlZmF1bHQiLCJkZXN0cnVjdGl2ZSIsIm91dGxpbmUiLCJzZWNvbmRhcnkiLCJnaG9zdCIsImxpbmsiLCJzaXplIiwic20iLCJsZyIsImljb24iLCJkZWZhdWx0VmFyaWFudHMiLCJCdXR0b24iLCJmb3J3YXJkUmVmIiwiX2MiLCJjbGFzc05hbWUiLCJhc0NoaWxkIiwicHJvcHMiLCJyZWYiLCJDb21wIiwiX2MyIiwiZGlzcGxheU5hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2l6ZS00IFsmX3N2Z106c2hyaW5rLTBcIiArXG5cIiBob3Zlci1lbGV2YXRlIGFjdGl2ZS1lbGV2YXRlLTJcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgIC8vIEByZXBsaXQ6IG5vIGhvdmVyLCBhbmQgYWRkIHByaW1hcnkgYm9yZGVyXG4gICAgICAgICAgIFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBib3JkZXIgYm9yZGVyLXByaW1hcnktYm9yZGVyXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOlxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIHNoYWRvdy1zbSBib3JkZXItZGVzdHJ1Y3RpdmUtYm9yZGVyXCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgLy8gQHJlcGxpdCBTaG93cyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB3aGF0ZXZlciBjYXJkIC8gc2lkZWJhciAvIGFjY2VudCBiYWNrZ3JvdW5kIGl0IGlzIGluc2lkZSBvZi5cbiAgICAgICAgICAvLyBJbmhlcml0cyB0aGUgY3VycmVudCB0ZXh0IGNvbG9yLiBVc2VzIHNoYWRvdy14cy4gbm8gc2hhZG93IG9uIGFjdGl2ZVxuICAgICAgICAgIC8vIE5vIGhvdmVyIHN0YXRlXG4gICAgICAgICAgXCIgYm9yZGVyIFtib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLW91dGxpbmUpXSBzaGFkb3cteHMgYWN0aXZlOnNoYWRvdy1ub25lIFwiLFxuICAgICAgICBzZWNvbmRhcnk6XG4gICAgICAgICAgLy8gQHJlcGxpdCBib3JkZXIsIG5vIGhvdmVyLCBubyBzaGFkb3csIHNlY29uZGFyeSBib3JkZXIuXG4gICAgICAgICAgXCJib3JkZXIgYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgYm9yZGVyIGJvcmRlci1zZWNvbmRhcnktYm9yZGVyIFwiLFxuICAgICAgICAvLyBAcmVwbGl0IG5vIGhvdmVyLCB0cmFuc3BhcmVudCBib3JkZXJcbiAgICAgICAgZ2hvc3Q6IFwiYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudFwiLFxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICAvLyBAcmVwbGl0IGNoYW5nZWQgc2l6ZXNcbiAgICAgICAgZGVmYXVsdDogXCJtaW4taC05IHB4LTQgcHktMlwiLFxuICAgICAgICBzbTogXCJtaW4taC04IHJvdW5kZWQtbWQgcHgtMyB0ZXh0LXhzXCIsXG4gICAgICAgIGxnOiBcIm1pbi1oLTEwIHJvdW5kZWQtbWQgcHgtOFwiLFxuICAgICAgICBpY29uOiBcImgtOSB3LTlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfVxuKVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzXG4gIGV4dGVuZHMgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgYnV0dG9uVmFyaWFudHM+IHtcbiAgYXNDaGlsZD86IGJvb2xlYW5cbn1cblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQnV0dG9uUHJvcHM+KFxuICAoeyBjbGFzc05hbWUsIHZhcmlhbnQsIHNpemUsIGFzQ2hpbGQgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIlxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFxuICAgICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG4pXG5CdXR0b24uZGlzcGxheU5hbWUgPSBcIkJ1dHRvblwiXG5cbmV4cG9ydCB7IEJ1dHRvbiwgYnV0dG9uVmFyaWFudHMgfVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9pcHR2LWFwcC9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4In0=