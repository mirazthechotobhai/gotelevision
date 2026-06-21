import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/video-player.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af48463"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1af48463"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useRef = __vite__cjsImport1_react["useRef"];
import Hls from "/node_modules/.vite/deps/hls__js.js?v=1af48463";
export function VideoPlayer({ url }) {
  _s();
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !url) return;
    let hls;
    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Network error encountered, trying to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Media error encountered, trying to recover");
              hls.recoverMediaError();
              break;
            default:
              console.error("Fatal HLS error, cannot recover");
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      });
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [url]);
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:65:4", "data-component-name": "div", className: "relative w-full aspect-video bg-[#050505] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center ring-1 ring-white/5", children: url ? /* @__PURE__ */ jsxDEV(
    "video",
    {
      "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:67:8",
      "data-component-name": "video",
      ref: videoRef,
      controls: true,
      className: "w-full h-full object-contain bg-[#050505] outline-none",
      autoPlay: true,
      playsInline: true
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
      lineNumber: 67,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:75:8", "data-component-name": "div", className: "absolute inset-0 flex flex-col items-center justify-center text-muted-foreground z-10 bg-[#050505]", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:76:10", "data-component-name": "div", className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_50%)]" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:77:10", "data-component-name": "div", className: "relative z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:78:12", "data-component-name": "div", className: "w-20 h-20 mb-6 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] animate-pulse", style: { animationDuration: "4s" }, children: /* @__PURE__ */ jsxDEV("svg", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:79:14", "data-component-name": "svg", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "text-muted-foreground/40", children: [
        /* @__PURE__ */ jsxDEV("rect", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:79:231", "data-component-name": "rect", width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
          lineNumber: 79,
          columnNumber: 338
        }, this),
        /* @__PURE__ */ jsxDEV("polyline", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:79:287", "data-component-name": "polyline", points: "17 2 12 7 7 2" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
          lineNumber: 79,
          columnNumber: 503
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:81:12", "data-component-name": "p", className: "text-xl font-bold tracking-widest text-muted-foreground/80 uppercase", children: "NO SIGNAL" }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/iptv-app/src/components/video-player.tsx:82:12", "data-component-name": "p", className: "text-sm font-medium text-muted-foreground/40 mt-2 uppercase tracking-wider", children: "Awaiting broadcast selection" }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
_s(VideoPlayer, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = VideoPlayer;
var _c;
$RefreshReg$(_c, "VideoPlayer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/iptv-app/src/components/video-player.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQTtBQUFBLGVBQXNEO0FBQUEsUUFBRSx1QkFBQyxjQUFPLHdIQUFFLFFBQU8sbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZ0M7QUFBQSxXQUFqVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW1ULEtBRHJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsdUhBQUUsV0FBVSx3RUFBdUUseUJBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNkY7QUFBQSxNQUM3Rix1QkFBQyx1SEFBRSxXQUFVLDhFQUE2RSw0Q0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFzSDtBQUFBLFNBTHhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNQTtBQUFBLE9BUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBLEtBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxQkE7QUFFSjtBQUFBakMsR0FoRmdCRixhQUFXO0FBQUEsS0FBWEE7QUFBVyxJQUFBb0M7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiSGxzIiwiVmlkZW9QbGF5ZXIiLCJ1cmwiLCJfcyIsInZpZGVvUmVmIiwidmlkZW8iLCJjdXJyZW50IiwiaGxzIiwiaXNTdXBwb3J0ZWQiLCJlbmFibGVXb3JrZXIiLCJsb3dMYXRlbmN5TW9kZSIsImxvYWRTb3VyY2UiLCJhdHRhY2hNZWRpYSIsIm9uIiwiRXZlbnRzIiwiTUFOSUZFU1RfUEFSU0VEIiwicGxheSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJFUlJPUiIsImV2ZW50IiwiZGF0YSIsImZhdGFsIiwidHlwZSIsIkVycm9yVHlwZXMiLCJORVRXT1JLX0VSUk9SIiwiZXJyb3IiLCJzdGFydExvYWQiLCJNRURJQV9FUlJPUiIsInJlY292ZXJNZWRpYUVycm9yIiwiZGVzdHJveSIsImNhblBsYXlUeXBlIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGlvbkR1cmF0aW9uIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidmlkZW8tcGxheWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhscyBmcm9tIFwiaGxzLmpzXCI7XG5cbmludGVyZmFjZSBWaWRlb1BsYXllclByb3BzIHtcbiAgdXJsOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlkZW9QbGF5ZXIoeyB1cmwgfTogVmlkZW9QbGF5ZXJQcm9wcykge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZpZGVvID0gdmlkZW9SZWYuY3VycmVudDtcbiAgICBpZiAoIXZpZGVvIHx8ICF1cmwpIHJldHVybjtcblxuICAgIGxldCBobHM6IEhscztcblxuICAgIGlmIChIbHMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgaGxzID0gbmV3IEhscyh7XG4gICAgICAgIGVuYWJsZVdvcmtlcjogdHJ1ZSxcbiAgICAgICAgbG93TGF0ZW5jeU1vZGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGhscy5sb2FkU291cmNlKHVybCk7XG4gICAgICBobHMuYXR0YWNoTWVkaWEodmlkZW8pO1xuICAgICAgaGxzLm9uKEhscy5FdmVudHMuTUFOSUZFU1RfUEFSU0VELCAoKSA9PiB7XG4gICAgICAgIHZpZGVvLnBsYXkoKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiQXV0b3BsYXkgYmxvY2tlZDpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGhscy5vbihIbHMuRXZlbnRzLkVSUk9SLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZmF0YWwpIHtcbiAgICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBIbHMuRXJyb3JUeXBlcy5ORVRXT1JLX0VSUk9SOlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTmV0d29yayBlcnJvciBlbmNvdW50ZXJlZCwgdHJ5aW5nIHRvIHJlY292ZXJcIik7XG4gICAgICAgICAgICAgIGhscy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEhscy5FcnJvclR5cGVzLk1FRElBX0VSUk9SOlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTWVkaWEgZXJyb3IgZW5jb3VudGVyZWQsIHRyeWluZyB0byByZWNvdmVyXCIpO1xuICAgICAgICAgICAgICBobHMucmVjb3Zlck1lZGlhRXJyb3IoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmF0YWwgSExTIGVycm9yLCBjYW5ub3QgcmVjb3ZlclwiKTtcbiAgICAgICAgICAgICAgaGxzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvLmNhblBsYXlUeXBlKFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmxcIikpIHtcbiAgICAgIC8vIEZvciBTYWZhcmkgd2hlcmUgSExTIGlzIHN1cHBvcnRlZCBuYXRpdmVseVxuICAgICAgdmlkZW8uc3JjID0gdXJsO1xuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcbiAgICAgICAgdmlkZW8ucGxheSgpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJBdXRvcGxheSBibG9ja2VkOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoaGxzKSB7XG4gICAgICAgIGhscy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3VybF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgYXNwZWN0LXZpZGVvIGJnLVsjMDUwNTA1XSByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci13aGl0ZS81IHNoYWRvdy0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmluZy0xIHJpbmctd2hpdGUvNVwiPlxuICAgICAge3VybCA/IChcbiAgICAgICAgPHZpZGVvIFxuICAgICAgICAgIHJlZj17dmlkZW9SZWZ9IFxuICAgICAgICAgIGNvbnRyb2xzIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW4gYmctWyMwNTA1MDVdIG91dGxpbmUtbm9uZVwiIFxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgei0xMCBiZy1bIzA1MDUwNV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctW3JhZGlhbC1ncmFkaWVudChlbGxpcHNlX2F0X2NlbnRlcixyZ2JhKDEyNCw1OCwyMzcsMC4wNSksdHJhbnNwYXJlbnRfNTAlKV1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIG1iLTYgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvNSBiZy13aGl0ZS9bMC4wMl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LVtpbnNldF8wXzBfMjBweF9yZ2JhKDI1NSwyNTUsMjU1LDAuMDIpXSBhbmltYXRlLXB1bHNlXCIgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246ICc0cycgfX0+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZC80MFwiPjxyZWN0IHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNVwiIHg9XCIyXCIgeT1cIjdcIiByeD1cIjJcIiByeT1cIjJcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjE3IDIgMTIgNyA3IDJcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0ZXh0LW11dGVkLWZvcmVncm91bmQvODAgdXBwZXJjYXNlXCI+Tk8gU0lHTkFMPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmQvNDAgbXQtMiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5Bd2FpdGluZyBicm9hZGNhc3Qgc2VsZWN0aW9uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXJ0aWZhY3RzL2lwdHYtYXBwL3NyYy9jb21wb25lbnRzL3ZpZGVvLXBsYXllci50c3gifQ==