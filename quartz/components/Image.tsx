import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Image({ fileData, cfg, displayClass }: QuartzComponentProps) {

  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const path = url.pathname as FullSlug
  const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
  const imagePath = joinSegments(baseDir, "static/watercolor-clock.png")

  return (
    <div class="image-container">
      <img class="solo-image" src={imagePath}/>
    </div>
  )
}

Image.css = `
.image-container {
}
.solo-image {
  width: 10em;
}
`

export default (() => Image) satisfies QuartzComponentConstructor
