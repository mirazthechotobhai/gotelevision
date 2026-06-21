import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/form.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const React = ((m) => m?.__esModule ? m : {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m})(__vite__cjsImport1_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=1af48463";
import {
  Controller,
  FormProvider,
  useFormContext
} from "/node_modules/.vite/deps/react-hook-form.js?v=1af48463";
import { cn } from "/src/lib/utils.ts";
import { Label } from "/src/components/ui/label.tsx";
const Form = FormProvider;
const FormFieldContext = React.createContext(null);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxDEV(FormFieldContext.Provider, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:34:4", "data-component-name": "FormFieldContext.Provider", value: { name: props.name }, children: /* @__PURE__ */ jsxDEV(Controller, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:35:6", "data-component-name": "Controller", ...props }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
_c = FormField;
const useFormField = () => {
  _s();
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
  return [useFormContext];
});
const FormItemContext = React.createContext(null);
const FormItem = _s2(React.forwardRef(_c2 = _s2(
  ({ className, ...props }, ref) => {
    _s2();
    const id = React.useId();
    return /* @__PURE__ */ jsxDEV(FormItemContext.Provider, { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:80:4", "data-component-name": "FormItemContext.Provider", value: { id }, children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:81:6", "data-component-name": "div", ref, className: cn("space-y-2", className), ...props }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this);
  },
  "WhsuKpSQZEWeFcB7gWlfDRQktoQ="
)), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c3 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = _s3(React.forwardRef(_c4 = _s3(
  ({ className, ...props }, ref) => {
    _s3();
    const { error, formItemId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      Label,
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:94:4",
        "data-component-name": "Label",
        ref,
        className: cn(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    );
  },
  "Z4R+rKjylfAcqmbRnqWEg1TfTcg=",
  false,
  function() {
    return [useFormField];
  }
)), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
  return [useFormField];
});
_c5 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = _s4(React.forwardRef(_c6 = _s4(
  ({ ...props }, ref) => {
    _s4();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      Slot,
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:111:4",
        "data-component-name": "Slot",
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
        lineNumber: 111,
        columnNumber: 7
      },
      this
    );
  },
  "mI3rlmONcPPBVtOc6UefMrXAJ6w=",
  false,
  function() {
    return [useFormField];
  }
)), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
  return [useFormField];
});
_c7 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = _s5(React.forwardRef(_c8 = _s5(
  ({ className, ...props }, ref) => {
    _s5();
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      "p",
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:133:4",
        "data-component-name": "p",
        ref,
        id: formDescriptionId,
        className: cn("text-[0.8rem] text-muted-foreground", className),
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
        lineNumber: 133,
        columnNumber: 7
      },
      this
    );
  },
  "573aRXA8dloSrMaQM9SdAF4A9NI=",
  false,
  function() {
    return [useFormField];
  }
)), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
  return [useFormField];
});
_c9 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = _s6(React.forwardRef(_c0 = _s6(
  ({ className, children, ...props }, ref) => {
    _s6();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsxDEV(
      "p",
      {
        "data-replit-metadata": "artifacts/iptv-app/src/components/ui/form.tsx:155:4",
        "data-component-name": "p",
        ref,
        id: formMessageId,
        className: cn("text-[0.8rem] font-medium text-destructive", className),
        ...props,
        children: body
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    );
  },
  "WONNS8VCMr8LShuUovb8QgOmMVY=",
  false,
  function() {
    return [useFormField];
  }
)), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
  return [useFormField];
});
_c1 = FormMessage;
FormMessage.displayName = "FormMessage";
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1;
$RefreshReg$(_c, "FormField");
$RefreshReg$(_c2, "FormItem$React.forwardRef");
$RefreshReg$(_c3, "FormItem");
$RefreshReg$(_c4, "FormLabel$React.forwardRef");
$RefreshReg$(_c5, "FormLabel");
$RefreshReg$(_c6, "FormControl$React.forwardRef");
$RefreshReg$(_c7, "FormControl");
$RefreshReg$(_c8, "FormDescription$React.forwardRef");
$RefreshReg$(_c9, "FormDescription");
$RefreshReg$(_c0, "FormMessage$React.forwardRef");
$RefreshReg$(_c1, "FormMessage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/ui/form.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUksS0FBQTtBQUFBLGFBQUFJLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUcsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBRyxLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFHLEtBQUE7QUFBQSxhQUFBSyxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTbG90IiwiQ29udHJvbGxlciIsIkZvcm1Qcm92aWRlciIsInVzZUZvcm1Db250ZXh0IiwiY24iLCJMYWJlbCIsIkZvcm0iLCJGb3JtRmllbGRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkZvcm1GaWVsZCIsInByb3BzIiwibmFtZSIsIl9jIiwidXNlRm9ybUZpZWxkIiwiX3MiLCJmaWVsZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiaXRlbUNvbnRleHQiLCJGb3JtSXRlbUNvbnRleHQiLCJnZXRGaWVsZFN0YXRlIiwiZm9ybVN0YXRlIiwiRXJyb3IiLCJmaWVsZFN0YXRlIiwiaWQiLCJmb3JtSXRlbUlkIiwiZm9ybURlc2NyaXB0aW9uSWQiLCJmb3JtTWVzc2FnZUlkIiwiRm9ybUl0ZW0iLCJfczIiLCJmb3J3YXJkUmVmIiwiX2MyIiwiY2xhc3NOYW1lIiwicmVmIiwidXNlSWQiLCJfYzMiLCJkaXNwbGF5TmFtZSIsIkZvcm1MYWJlbCIsIl9zMyIsIl9jNCIsImVycm9yIiwiX2M1IiwiRm9ybUNvbnRyb2wiLCJfczQiLCJfYzYiLCJfYzciLCJGb3JtRGVzY3JpcHRpb24iLCJfczUiLCJfYzgiLCJfYzkiLCJGb3JtTWVzc2FnZSIsIl9zNiIsIl9jMCIsImNoaWxkcmVuIiwiYm9keSIsIlN0cmluZyIsIm1lc3NhZ2UiLCJfYzEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIExhYmVsUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIlxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXG5pbXBvcnQge1xuICBDb250cm9sbGVyLFxuICBGb3JtUHJvdmlkZXIsXG4gIHVzZUZvcm1Db250ZXh0LFxuICB0eXBlIENvbnRyb2xsZXJQcm9wcyxcbiAgdHlwZSBGaWVsZFBhdGgsXG4gIHR5cGUgRmllbGRWYWx1ZXMsXG59IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxuXG5jb25zdCBGb3JtID0gRm9ybVByb3ZpZGVyXG5cbnR5cGUgRm9ybUZpZWxkQ29udGV4dFZhbHVlPFxuICBURmllbGRWYWx1ZXMgZXh0ZW5kcyBGaWVsZFZhbHVlcyA9IEZpZWxkVmFsdWVzLFxuICBUTmFtZSBleHRlbmRzIEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+ID0gRmllbGRQYXRoPFRGaWVsZFZhbHVlcz5cbj4gPSB7XG4gIG5hbWU6IFROYW1lXG59XG5cbmNvbnN0IEZvcm1GaWVsZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZvcm1GaWVsZENvbnRleHRWYWx1ZSB8IG51bGw+KG51bGwpXG5cbmNvbnN0IEZvcm1GaWVsZCA9IDxcbiAgVEZpZWxkVmFsdWVzIGV4dGVuZHMgRmllbGRWYWx1ZXMgPSBGaWVsZFZhbHVlcyxcbiAgVE5hbWUgZXh0ZW5kcyBGaWVsZFBhdGg8VEZpZWxkVmFsdWVzPiA9IEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+XG4+KHtcbiAgLi4ucHJvcHNcbn06IENvbnRyb2xsZXJQcm9wczxURmllbGRWYWx1ZXMsIFROYW1lPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWU6IHByb3BzLm5hbWUgfX0+XG4gICAgICA8Q29udHJvbGxlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IHVzZUZvcm1GaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGRDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChGb3JtRmllbGRDb250ZXh0KVxuICBjb25zdCBpdGVtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUl0ZW1Db250ZXh0KVxuICBjb25zdCB7IGdldEZpZWxkU3RhdGUsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybUNvbnRleHQoKVxuXG4gIGlmICghZmllbGRDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlRm9ybUZpZWxkIHNob3VsZCBiZSB1c2VkIHdpdGhpbiA8Rm9ybUZpZWxkPlwiKVxuICB9XG5cbiAgaWYgKCFpdGVtQ29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUZvcm1GaWVsZCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gPEZvcm1JdGVtPlwiKVxuICB9XG5cbiAgY29uc3QgZmllbGRTdGF0ZSA9IGdldEZpZWxkU3RhdGUoZmllbGRDb250ZXh0Lm5hbWUsIGZvcm1TdGF0ZSlcblxuICBjb25zdCB7IGlkIH0gPSBpdGVtQ29udGV4dFxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZTogZmllbGRDb250ZXh0Lm5hbWUsXG4gICAgZm9ybUl0ZW1JZDogYCR7aWR9LWZvcm0taXRlbWAsXG4gICAgZm9ybURlc2NyaXB0aW9uSWQ6IGAke2lkfS1mb3JtLWl0ZW0tZGVzY3JpcHRpb25gLFxuICAgIGZvcm1NZXNzYWdlSWQ6IGAke2lkfS1mb3JtLWl0ZW0tbWVzc2FnZWAsXG4gICAgLi4uZmllbGRTdGF0ZSxcbiAgfVxufVxuXG50eXBlIEZvcm1JdGVtQ29udGV4dFZhbHVlID0ge1xuICBpZDogc3RyaW5nXG59XG5cbmNvbnN0IEZvcm1JdGVtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUl0ZW1Db250ZXh0VmFsdWUgfCBudWxsPihudWxsKVxuXG5jb25zdCBGb3JtSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgaWQgPSBSZWFjdC51c2VJZCgpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlkIH19PlxuICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcInNwYWNlLXktMlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtSXRlbUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0pXG5Gb3JtSXRlbS5kaXNwbGF5TmFtZSA9IFwiRm9ybUl0ZW1cIlxuXG5jb25zdCBGb3JtTGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGVycm9yLCBmb3JtSXRlbUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPExhYmVsXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oZXJyb3IgJiYgXCJ0ZXh0LWRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZSl9XG4gICAgICBodG1sRm9yPXtmb3JtSXRlbUlkfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn0pXG5Gb3JtTGFiZWwuZGlzcGxheU5hbWUgPSBcIkZvcm1MYWJlbFwiXG5cbmNvbnN0IEZvcm1Db250cm9sID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2xvdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2xvdD5cbj4oKHsgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQsIGZvcm1EZXNjcmlwdGlvbklkLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPFNsb3RcbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9e2Zvcm1JdGVtSWR9XG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgIWVycm9yXG4gICAgICAgICAgPyBgJHtmb3JtRGVzY3JpcHRpb25JZH1gXG4gICAgICAgICAgOiBgJHtmb3JtRGVzY3JpcHRpb25JZH0gJHtmb3JtTWVzc2FnZUlkfWBcbiAgICAgIH1cbiAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59KVxuRm9ybUNvbnRyb2wuZGlzcGxheU5hbWUgPSBcIkZvcm1Db250cm9sXCJcblxuY29uc3QgRm9ybURlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFBhcmFncmFwaEVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGZvcm1EZXNjcmlwdGlvbklkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPHBcbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9e2Zvcm1EZXNjcmlwdGlvbklkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtWzAuOHJlbV0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufSlcbkZvcm1EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiRm9ybURlc2NyaXB0aW9uXCJcblxuY29uc3QgRm9ybU1lc3NhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MUGFyYWdyYXBoRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFBhcmFncmFwaEVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGVycm9yLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuICBjb25zdCBib2R5ID0gZXJyb3IgPyBTdHJpbmcoZXJyb3I/Lm1lc3NhZ2UgPz8gXCJcIikgOiBjaGlsZHJlblxuXG4gIGlmICghYm9keSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxwXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGlkPXtmb3JtTWVzc2FnZUlkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtWzAuOHJlbV0gZm9udC1tZWRpdW0gdGV4dC1kZXN0cnVjdGl2ZVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtib2R5fVxuICAgIDwvcD5cbiAgKVxufSlcbkZvcm1NZXNzYWdlLmRpc3BsYXlOYW1lID0gXCJGb3JtTWVzc2FnZVwiXG5cbmV4cG9ydCB7XG4gIHVzZUZvcm1GaWVsZCxcbiAgRm9ybSxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1EZXNjcmlwdGlvbixcbiAgRm9ybU1lc3NhZ2UsXG4gIEZvcm1GaWVsZCxcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvdWkvZm9ybS50c3gifQ==