import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  shortcuts: {
    "app-shell": "min-h-screen bg-slate-950 text-slate-100 font-sans",
    "card": "bg-slate-900/50 border border-slate-800/60 rounded-2xl shadow-xl backdrop-blur-sm",
    "chip": "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-sky-500/10 text-sky-300 border border-sky-500/30",
    "btn": "inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold text-sm transition-all hover:scale-105 active:scale-100 bg-sky-500 text-white shadow-lg hover:shadow-sky-500/50",
    "btn-secondary": "inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold text-sm transition-all hover:scale-105 active:scale-100 border-2 border-sky-500 text-sky-300 hover:bg-sky-500/10",
    "glass": "backdrop-blur-xl bg-white/5 border border-white/10"
  },
  theme: {
    fontFamily: {
      sans: "'Space Grotesk', 'Inter', ui-sans-serif, system-ui",
      display: "'Space Grotesk', ui-sans-serif"
    },
    colors: {
      brand: {
        primary: "#0ea5e9",
        secondary: "#06b6d4",
        accent: "#3b82f6"
      }
    }
  },
  safelist: [
    "i-lucide-github",
    "i-lucide-linkedin",
    "i-lucide-mail",
    "i-lucide-external-link",
    "i-lucide-sparkles",
    "i-lucide-bolt",
    "i-lucide-rocket",
    "i-lucide-code-2",
    "i-lucide-pen-tool"
  ],
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block"
      }
    }),
    presetScrollbar()
  ]
});
