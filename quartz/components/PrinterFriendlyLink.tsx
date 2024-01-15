import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const DownloadPDF = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {

  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const path = url.pathname as FullSlug
  const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
  const printerIconPath = joinSegments(baseDir, "static/printer-icon.png")

  return (
    <div class="download-link-container">
      <img class="download-icon" src={printerIconPath} />
      <a href="/printer-friendly-version">Printer friendly version of this guide</a>
    </div>
  )
}

DownloadPDF.css = `
.download-link-container {
  display: flex;
  align-items: start;
}
.download-icon {
  width: 1.3em;
  margin: 0 0.2em 0 0;
}
`

export default (() => DownloadPDF) satisfies QuartzComponentConstructor
