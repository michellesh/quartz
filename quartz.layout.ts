import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { mapFn, filterFn, sortFn } from "./functions.ts"

const Explorer = () => Component.Explorer({
  title: "All pages",
  hideTitle: true,
  folderDefaultState: "open",
  filterFn: filterFn,
  sortFn: sortFn,
});

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Made by Micky": "https://mickymakes.art",
      "Rainbow Clock GitHub": "https://github.com/michellesh/rainbow-clock",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.PrinterFriendlyLink()),
    Component.MobileOnly(Explorer()),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents(),
  ],
  left: [
    Component.DesktopOnly(Component.Image()),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.PrinterFriendlyLink()),
    Component.DesktopOnly(Explorer()),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.DesktopOnly(Component.Image()),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.PrinterFriendlyLink(),
    Component.DesktopOnly(Explorer()),
  ],
  right: [],
}
