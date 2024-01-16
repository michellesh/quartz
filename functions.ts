import { Options } from "./quartz/components/ExplorerNode"

export const mapFn: Options["mapFn"] = (node) => {
  // implement your function here
}

export const filterFn: Options["filterFn"] = (node) => {
  // set containing names of everything you want to filter out
  const omit = new Set(["printer-friendly-version"])
  return !omit.has(node.name.toLowerCase())
}

export const sortFn: Options["sortFn"] = (a, b) => {
  const nameOrderMap: Record<string, number> = {
    "about-the-rainbow-clock": 100,
    "about-the-rainbow-clock/how-to-set-the-time": 101,
    "about-the-rainbow-clock/hardware-breakdown": 102,
    "about-the-rainbow-clock/led-grid-layout": 103,

    "write-your-own-led-code": 200,
    "write-your-own-led-code/setup-environment": 201,
    "write-your-own-led-code/code-simple-led-grid-patterns": 202,
    "write-your-own-led-code/how-to-re-upload-the-original-clock-code": 203,

    "clock-code-breakdown": 300,
    "clock-code-breakdown/basic-code-and-file-structure": 301,
    "clock-code-breakdown/how-the-clock-code-works": 302,
    "clock-code-breakdown/how-the-led-code-works": 303,
    "clock-code-breakdown/how-the-button-code-works": 304,

    "more": 400,
    "more/other-resources": 401,
    "more/troubleshooting-faq": 402,
    "more/feedback": 403,
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
}
