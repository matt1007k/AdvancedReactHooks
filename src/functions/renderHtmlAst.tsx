import { createElement, useMemo } from "react"
import rehypeReact from "rehype-react"
import { unified } from "unified"

export const renderHtmlAst = (htmlAst: any) =>
  useMemo(() => {
    const processor = unified().use(rehypeReact, {
      createElement,
    })
    return processor.stringify(htmlAst)
  }, [htmlAst])
