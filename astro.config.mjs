import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nick.mclarty.me",
  output: "static",
  integrations: [sitemap()],
  fonts: [
    {
      name: "Geist",
      cssVariable: "--font-sans",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.fontsource(),
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
});
