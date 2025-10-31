import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  shortcuts: {
    "app-shell": "min-h-screen bg-slate-950 text-slate-100 font-sans",
    "card": "bg-slate-900/70 border border-slate-700/60 rounded-3xl shadow-xl shadow-fuchsia-500/20 backdrop-blur-lg",
    "chip": "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold tracking-wide bg-fuchsia-600/20 text-fuchsia-200 border border-fuchsia-500/40",
    "btn": "inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold uppercase tracking-widest text-sm transition-transform transform hover:-translate-y-1 active:translate-y-0 bg-fuchsia-500 text-slate-950 shadow-lg shadow-fuchsia-500/40",
    "glass": "backdrop-blur-xl bg-white/5 border border-white/10"
  },
  theme: {
    fontFamily: {
      sans: "'Space Grotesk', 'Inter', ui-sans-serif, system-ui",
      display: "'Clash Display', 'Space Grotesk', ui-sans-serif"
    },
    colors: {
      brand: {
        neon: "#f472ff",
        glow: "#22d3ee"
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
