import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/channel-form-dialog.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { z } from "/node_modules/.vite/deps/zod.js?v=1af48463";
import { useForm } from "/node_modules/.vite/deps/react-hook-form.js?v=1af48463";
import { zodResolver } from "/node_modules/.vite/deps/@hookform_resolvers_zod.js?v=1af48463";
import { Button } from "/src/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/src/components/ui/dialog.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "/src/components/ui/form.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { useCreateChannel, useUpdateChannel, getListChannelsQueryKey, getGetPlaylistStatsQueryKey } from "/@fs/home/runner/workspace/lib/api-client-react/src/index.ts";
import { useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=1af48463";
import { useToast } from "/src/hooks/use-toast.ts";
import { Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=1af48463";
const channelSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().min(1, "URL is required").url("Must be a valid URL"),
  group: z.string().optional(),
  logoUrl: z.string().url("Must be a valid URL").optional().or(z.literal(""))
});
export function ChannelFormDialog({ channel, open, onOpenChange, trigger }) {
  _s();
  const isEditing = !!channel;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(channelSchema),
    defaultValues: {
      name: channel?.name || "",
      url: channel?.url || "",
      group: channel?.group || "",
      logoUrl: channel?.logoUrl || ""
    }
  });
  const createChannel = useCreateChannel();
  const updateChannel = useUpdateChannel();
  const isPending = createChannel.isPending || updateChannel.isPending;
  function onSubmit(data) {
    if (isEditing) {
      updateChannel.mutate(
        { id: channel.id, data },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getListChannelsQueryKey() });
            queryClient.invalidateQueries({ queryKey: getGetPlaylistStatsQueryKey() });
            toast({ title: "Channel updated successfully" });
            onOpenChange(false);
          },
          onError: (error) => {
            toast({
              title: "Failed to update channel",
              description: error.error || "An error occurred",
              variant: "destructive"
            });
          }
        }
      );
    } else {
      createChannel.mutate(
        { data },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getListChannelsQueryKey() });
            queryClient.invalidateQueries({ queryKey: getGetPlaylistStatsQueryKey() });
            toast({ title: "Channel added successfully" });
            form.reset();
            onOpenChange(false);
          },
          onError: (error) => {
            toast({
              title: "Failed to create channel",
              description: error.error || "An error occurred",
              variant: "destructive"
            });
          }
        }
      );
    }
  }
  return /* @__PURE__ */ jsxDEV(Dialog, { open, onOpenChange, children: [
    trigger && /* @__PURE__ */ jsxDEV(DialogTrigger, { asChild: true, children: trigger }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
      lineNumber: 112,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ jsxDEV(DialogContent, { className: "sm:max-w-[425px] border-white/10 bg-card/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600" }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(DialogHeader, { className: "pt-2", children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { className: "text-2xl font-bold tracking-tight", children: isEditing ? "Edit Channel" : "Add Channel" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { className: "text-muted-foreground/80", children: isEditing ? "Update the details for this channel." : "Add a new IPTV stream to your playlist." }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Form, { ...form, children: /* @__PURE__ */ jsxDEV("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-5 pt-4", children: [
        /* @__PURE__ */ jsxDEV(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
              /* @__PURE__ */ jsxDEV(FormLabel, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Channel Name *" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 128,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(Input, { placeholder: "e.g. BBC News", ...field, className: "bg-black/50 border-white/5 focus-visible:ring-primary/50 h-11" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 129,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 132,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 123,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          FormField,
          {
            control: form.control,
            name: "url",
            render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
              /* @__PURE__ */ jsxDEV(FormLabel, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Stream URL (M3U8) *" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(Input, { placeholder: "https://...", ...field, className: "bg-black/50 border-white/5 focus-visible:ring-primary/50 h-11 font-mono text-sm" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 143,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 142,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 136,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          FormField,
          {
            control: form.control,
            name: "group",
            render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
              /* @__PURE__ */ jsxDEV(FormLabel, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Group / Category" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(Input, { placeholder: "e.g. News, Sports, Movies", ...field, className: "bg-black/50 border-white/5 focus-visible:ring-primary/50 h-11" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 149,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          FormField,
          {
            control: form.control,
            name: "logoUrl",
            render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
              /* @__PURE__ */ jsxDEV(FormLabel, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Logo URL" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(Input, { placeholder: "https://...", ...field, className: "bg-black/50 border-white/5 focus-visible:ring-primary/50 h-11 font-mono text-sm" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
                lineNumber: 171,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 162,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(DialogFooter, { className: "pt-6 border-t border-white/5 mt-6", children: [
          /* @__PURE__ */ jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => onOpenChange(false), className: "rounded-full px-6 hover:bg-white/5", children: "Cancel" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { type: "submit", disabled: isPending, className: "rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(124,58,237,0.3)]", children: [
            isPending && /* @__PURE__ */ jsxDEV(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
              lineNumber: 180,
              columnNumber: 31
            }, this),
            isEditing ? "Save Changes" : "Add Channel"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
_s(ChannelFormDialog, "Zv6JBdB3C8xwTC3YB4TW8EJRNjQ=", false, function() {
  return [useQueryClient, useToast, useForm, useCreateChannel, useUpdateChannel];
});
_c = ChannelFormDialog;
var _c;
$RefreshReg$(_c, "ChannelFormDialog");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/channel-form-dialog.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUssVUFBUyxVQUFVVyxXQUFXLFdBQVUsc0dBQ2xEQTtBQUFBQSx5QkFBYSx1QkFBQyxXQUFRLFdBQVUsK0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQThDO0FBQUEsWUFDM0RSLFlBQVksaUJBQWlCO0FBQUEsZUFGaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVFBO0FBQUEsV0E3REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQThEQSxLQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZ0VBO0FBQUEsU0F4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXlFQTtBQUFBLE9BM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E0RUE7QUFFSjtBQUFDRCxHQTlJZUwsbUJBQWlCO0FBQUEsVUFFWGQsZ0JBQ0ZDLFVBRUx0QixTQVVTaUIsa0JBQ0FDLGdCQUFnQjtBQUFBO0FBQUEsS0FoQnhCaUI7QUFBaUIsSUFBQStCO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInoiLCJ1c2VGb3JtIiwiem9kUmVzb2x2ZXIiLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJGb3JtIiwiRm9ybUNvbnRyb2wiLCJGb3JtRmllbGQiLCJGb3JtSXRlbSIsIkZvcm1MYWJlbCIsIkZvcm1NZXNzYWdlIiwiSW5wdXQiLCJ1c2VDcmVhdGVDaGFubmVsIiwidXNlVXBkYXRlQ2hhbm5lbCIsImdldExpc3RDaGFubmVsc1F1ZXJ5S2V5IiwiZ2V0R2V0UGxheWxpc3RTdGF0c1F1ZXJ5S2V5IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VUb2FzdCIsIkxvYWRlcjIiLCJjaGFubmVsU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm1pbiIsInVybCIsImdyb3VwIiwib3B0aW9uYWwiLCJsb2dvVXJsIiwib3IiLCJsaXRlcmFsIiwiQ2hhbm5lbEZvcm1EaWFsb2ciLCJjaGFubmVsIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsInRyaWdnZXIiLCJfcyIsImlzRWRpdGluZyIsInF1ZXJ5Q2xpZW50IiwidG9hc3QiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwiY3JlYXRlQ2hhbm5lbCIsInVwZGF0ZUNoYW5uZWwiLCJpc1BlbmRpbmciLCJvblN1Ym1pdCIsImRhdGEiLCJtdXRhdGUiLCJpZCIsIm9uU3VjY2VzcyIsImludmFsaWRhdGVRdWVyaWVzIiwicXVlcnlLZXkiLCJ0aXRsZSIsIm9uRXJyb3IiLCJlcnJvciIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsInJlc2V0IiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImZpZWxkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY2hhbm5lbC1mb3JtLWRpYWxvZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG4gIERpYWxvZ0Zvb3RlcixcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1GaWVsZCxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybU1lc3NhZ2UsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVDaGFubmVsLCB1c2VVcGRhdGVDaGFubmVsLCBnZXRMaXN0Q2hhbm5lbHNRdWVyeUtleSwgZ2V0R2V0UGxheWxpc3RTdGF0c1F1ZXJ5S2V5IH0gZnJvbSBcIkB3b3Jrc3BhY2UvYXBpLWNsaWVudC1yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDaGFubmVsIH0gZnJvbSBcIkB3b3Jrc3BhY2UvYXBpLWNsaWVudC1yZWFjdC9zcmMvZ2VuZXJhdGVkL2FwaS5zY2hlbWFzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS10b2FzdFwiO1xuaW1wb3J0IHsgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgY2hhbm5lbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5taW4oMSwgXCJOYW1lIGlzIHJlcXVpcmVkXCIpLFxuICB1cmw6IHouc3RyaW5nKCkubWluKDEsIFwiVVJMIGlzIHJlcXVpcmVkXCIpLnVybChcIk11c3QgYmUgYSB2YWxpZCBVUkxcIiksXG4gIGdyb3VwOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxvZ29Vcmw6IHouc3RyaW5nKCkudXJsKFwiTXVzdCBiZSBhIHZhbGlkIFVSTFwiKS5vcHRpb25hbCgpLm9yKHoubGl0ZXJhbChcIlwiKSksXG59KTtcblxudHlwZSBDaGFubmVsRm9ybVZhbHVlcyA9IHouaW5mZXI8dHlwZW9mIGNoYW5uZWxTY2hlbWE+O1xuXG5pbnRlcmZhY2UgQ2hhbm5lbEZvcm1EaWFsb2dQcm9wcyB7XG4gIGNoYW5uZWw/OiBDaGFubmVsO1xuICBvcGVuOiBib29sZWFuO1xuICBvbk9wZW5DaGFuZ2U6IChvcGVuOiBib29sZWFuKSA9PiB2b2lkO1xuICB0cmlnZ2VyPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbEZvcm1EaWFsb2coeyBjaGFubmVsLCBvcGVuLCBvbk9wZW5DaGFuZ2UsIHRyaWdnZXIgfTogQ2hhbm5lbEZvcm1EaWFsb2dQcm9wcykge1xuICBjb25zdCBpc0VkaXRpbmcgPSAhIWNoYW5uZWw7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcblxuICBjb25zdCBmb3JtID0gdXNlRm9ybTxDaGFubmVsRm9ybVZhbHVlcz4oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihjaGFubmVsU2NoZW1hKSxcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBuYW1lOiBjaGFubmVsPy5uYW1lIHx8IFwiXCIsXG4gICAgICB1cmw6IGNoYW5uZWw/LnVybCB8fCBcIlwiLFxuICAgICAgZ3JvdXA6IGNoYW5uZWw/Lmdyb3VwIHx8IFwiXCIsXG4gICAgICBsb2dvVXJsOiBjaGFubmVsPy5sb2dvVXJsIHx8IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IHVzZUNyZWF0ZUNoYW5uZWwoKTtcbiAgY29uc3QgdXBkYXRlQ2hhbm5lbCA9IHVzZVVwZGF0ZUNoYW5uZWwoKTtcblxuICBjb25zdCBpc1BlbmRpbmcgPSBjcmVhdGVDaGFubmVsLmlzUGVuZGluZyB8fCB1cGRhdGVDaGFubmVsLmlzUGVuZGluZztcblxuICBmdW5jdGlvbiBvblN1Ym1pdChkYXRhOiBDaGFubmVsRm9ybVZhbHVlcykge1xuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgIHVwZGF0ZUNoYW5uZWwubXV0YXRlKFxuICAgICAgICB7IGlkOiBjaGFubmVsLmlkLCBkYXRhIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHsgcXVlcnlLZXk6IGdldExpc3RDaGFubmVsc1F1ZXJ5S2V5KCkgfSk7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBnZXRHZXRQbGF5bGlzdFN0YXRzUXVlcnlLZXkoKSB9KTtcbiAgICAgICAgICAgIHRvYXN0KHsgdGl0bGU6IFwiQ2hhbm5lbCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xuICAgICAgICAgICAgb25PcGVuQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdG9hc3QoeyBcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjaGFubmVsXCIsIFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IuZXJyb3IgfHwgXCJBbiBlcnJvciBvY2N1cnJlZFwiLCBcbiAgICAgICAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVDaGFubmVsLm11dGF0ZShcbiAgICAgICAgeyBkYXRhIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHsgcXVlcnlLZXk6IGdldExpc3RDaGFubmVsc1F1ZXJ5S2V5KCkgfSk7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBnZXRHZXRQbGF5bGlzdFN0YXRzUXVlcnlLZXkoKSB9KTtcbiAgICAgICAgICAgIHRvYXN0KHsgdGl0bGU6IFwiQ2hhbm5lbCBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIG9uT3BlbkNoYW5nZShmYWxzZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRvYXN0KHsgXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkZhaWxlZCB0byBjcmVhdGUgY2hhbm5lbFwiLCBcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLmVycm9yIHx8IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgXG4gICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIiBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25PcGVuQ2hhbmdlPXtvbk9wZW5DaGFuZ2V9PlxuICAgICAge3RyaWdnZXIgJiYgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD57dHJpZ2dlcn08L0RpYWxvZ1RyaWdnZXI+fVxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XSBib3JkZXItd2hpdGUvMTAgYmctY2FyZC85NSBiYWNrZHJvcC1ibHVyLXhsIHNoYWRvdy0yeGwgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tcHVycGxlLTYwMFwiPjwvZGl2PlxuICAgICAgICA8RGlhbG9nSGVhZGVyIGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICA8RGlhbG9nVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+e2lzRWRpdGluZyA/IFwiRWRpdCBDaGFubmVsXCIgOiBcIkFkZCBDaGFubmVsXCJ9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kLzgwXCI+XG4gICAgICAgICAgICB7aXNFZGl0aW5nID8gXCJVcGRhdGUgdGhlIGRldGFpbHMgZm9yIHRoaXMgY2hhbm5lbC5cIiA6IFwiQWRkIGEgbmV3IElQVFYgc3RyZWFtIHRvIHlvdXIgcGxheWxpc3QuXCJ9XG4gICAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTUgcHQtNFwiPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkNoYW5uZWwgTmFtZSAqPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImUuZy4gQkJDIE5ld3NcIiB7Li4uZmllbGR9IGNsYXNzTmFtZT1cImJnLWJsYWNrLzUwIGJvcmRlci13aGl0ZS81IGZvY3VzLXZpc2libGU6cmluZy1wcmltYXJ5LzUwIGgtMTFcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+U3RyZWFtIFVSTCAoTTNVOCkgKjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJodHRwczovLy4uLlwiIHsuLi5maWVsZH0gY2xhc3NOYW1lPVwiYmctYmxhY2svNTAgYm9yZGVyLXdoaXRlLzUgZm9jdXMtdmlzaWJsZTpyaW5nLXByaW1hcnkvNTAgaC0xMSBmb250LW1vbm8gdGV4dC1zbVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cImdyb3VwXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkdyb3VwIC8gQ2F0ZWdvcnk8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiZS5nLiBOZXdzLCBTcG9ydHMsIE1vdmllc1wiIHsuLi5maWVsZH0gY2xhc3NOYW1lPVwiYmctYmxhY2svNTAgYm9yZGVyLXdoaXRlLzUgZm9jdXMtdmlzaWJsZTpyaW5nLXByaW1hcnkvNTAgaC0xMVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cImxvZ29VcmxcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+TG9nbyBVUkw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly8uLi5cIiB7Li4uZmllbGR9IGNsYXNzTmFtZT1cImJnLWJsYWNrLzUwIGJvcmRlci13aGl0ZS81IGZvY3VzLXZpc2libGU6cmluZy1wcmltYXJ5LzUwIGgtMTEgZm9udC1tb25vIHRleHQtc21cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPERpYWxvZ0Zvb3RlciBjbGFzc05hbWU9XCJwdC02IGJvcmRlci10IGJvcmRlci13aGl0ZS81IG10LTZcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cImdob3N0XCIgb25DbGljaz17KCkgPT4gb25PcGVuQ2hhbmdlKGZhbHNlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB4LTYgaG92ZXI6Ymctd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzUGVuZGluZ30gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB4LTYgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXByaW1hcnkvOTAgc2hhZG93LVswXzBfMTVweF9yZ2JhKDEyNCw1OCwyMzcsMC4zKV1cIj5cbiAgICAgICAgICAgICAgICB7aXNQZW5kaW5nICYmIDxMb2FkZXIyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPn1cbiAgICAgICAgICAgICAgICB7aXNFZGl0aW5nID8gXCJTYXZlIENoYW5nZXNcIiA6IFwiQWRkIENoYW5uZWxcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvaXB0di1hcHAvc3JjL2NvbXBvbmVudHMvY2hhbm5lbC1mb3JtLWRpYWxvZy50c3gifQ==