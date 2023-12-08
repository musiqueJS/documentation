import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Musique.js</span>,
  project: {
    link: "https://github.com/musiqueJS/musiqueJS",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Musique.js © 2023",
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s | Musique.js",
      };
    } else {
      return {
        titleTemplate: "Musique.js",
      };
    }
  },
  head: (
    <>
      <link rel="icon" href="static/logo.png" type="image/svg+xml+png" />

      <link
        rel="icon"
        href="static/logo.png"
        type="image/svg+xml+png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  ),
};

export default config;
