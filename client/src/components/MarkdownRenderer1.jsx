// this file i contructed for testing

import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownRenderer1({ children }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      
      components={{
        h2: ({ children }) => (
          <h2 className="text-2xl font-serif font-medium text-gray-800 text-left  my-4">
            {children}
          </h2>
        ),
        h1: ({ children }) => (
          <h2 className="text-3xl font-serif font-medium text-gray-800 my-3">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="text-xl font-sans text-justify  text-gray-800 leading-relaxed">
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-6 mb-4" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="list-decimal pl-6 mb-4" {...props}>
            {children}
          </ol>
        ),
      }}
    >
      {children}
    </Markdown>
  );
}
