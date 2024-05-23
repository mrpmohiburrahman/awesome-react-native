module.exports = {
  packages: [
    {
      type: "category",
      label: "Category",
      items: [
        {
          type: "category",
          label: "Components",
          items: [
            "components/bottomsheetview",
            "components/bottomsheetscrollview",
            "components/bottomsheetflatlist",
            "components/bottomsheetsectionlist",
            "components/bottomsheetvirtualizedlist",
            "components/bottomsheetbackdrop",
            "components/UI",
            "components/navigation",
            "components/deepLinking",
            "components/textAndRichContent",
            "components/bottomsheetfooter",
            "components/bottomsheettextinput",
          ],
        },
        "getting-started",
        "usage",
        "props",
        "methods",
        "hooks",
        "scrollables",
        {
          type: "category",
          label: "Guides",
          items: [
            "guides/custom-handle",
            "guides/custom-backdrop",
            "guides/custom-background",
            "guides/custom-footer",
            "guides/detach-modal",
            "guides/keyboard-handling",
            "guides/pull-to-refresh",
            "guides/adding-shadow",
            "guides/react-navigation-integration",
          ],
        },
        "troubleshooting",
        "faq",
      ],
    },
    /* {
      type: "category",
      label: "Bottom Sheet Modal",
      items: [
        "modal/getting-started",
        "modal/usage",
        "modal/props",
        "modal/methods",
        "modal/hooks",
      ],
    } */
    ,
  ],
};
