import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Image = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {

  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const path = url.pathname as FullSlug
  const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
  const imagePath = joinSegments(baseDir, "static/rainbow-clock-photo.png")

  return (
    <div class={`image-container ${displayClass ?? ""}`}>
      <img src={imagePath} />
    </div>
  )
}

Image.css = `
.image-container img {
  width: 200px;
  margin: 0 0.5em;
}
`

export default (() => Image) satisfies QuartzComponentConstructor
