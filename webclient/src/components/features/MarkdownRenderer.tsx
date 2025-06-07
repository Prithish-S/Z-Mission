import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps
{
  children:string,
}

export default function MarkdownRenderer({ children }:MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-2xl font-serif font-medium text-gray-800 text-left  my-4 break-words">
            {children}
          </h2>
        ),
        h1: ({ children }) => (
          <h2 className="text-3xl font-serif font-medium text-gray-800 my-3 break-words">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="text-xl font-sans text-justify  text-gray-800 leading-relaxed break-words">
            {children}
          </p>
        ),
        pre: ({ children }) => (
          <pre className="bg-gray-200 rounded-md px-1 py-0.5 mt-5 md:w-2xl overflow-auto ">
            {children}
          </pre>
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
