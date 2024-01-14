import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const Explorer = () => Component.Explorer({
  title: "All pages",
  folderDefaultState: "open",
  sortFn: (a, b) => {
    const nameOrderMap: Record<string, number> = {
      "about-the-rainbow-clock": 100,
      "how-to-set-the-time": 101,
      "hardware-breakdown": 102,
      "led-grid-layout": 103,

      "write-your-own-led-code": 200,

      "clock-code-breakdown": 300,

      "more": 400,
    }

    let orderA = 0
    let orderB = 0

    if (a.file && a.file.slug) {
      orderA = nameOrderMap[a.file.slug] || 0
    } else if (a.name) {
      orderA = nameOrderMap[a.name] || 0
    }

    if (b.file && b.file.slug) {
      orderB = nameOrderMap[b.file.slug] || 0
    } else if (b.name) {
      orderB = nameOrderMap[b.name] || 0
    }

    return orderA - orderB
  },
});

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Rainbow Clock GitHub": "https://github.com/michellesh/rainbow-clock",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Explorer()),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents({ maxDepth: 6 }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Explorer()),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Explorer(),
  ],
  right: [],
}
