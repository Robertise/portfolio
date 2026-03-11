import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { LuArrowLeft, LuDownload, LuClock, LuUser, LuCalendar } from "react-icons/lu";
import { getBlogBySlug } from "../utils/blogHelpers";
import { ThemeProvider } from "../contexts/ThemeContext";
import Header from "../components/Header";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      try {
        // Get blog data
        const blogData = getBlogBySlug(slug);
        if (!blogData) {
          setError("Blog not found");
          setLoading(false);
          return;
        }

        setBlog(blogData);

        // Load blog content from markdown file
        try {
          const response = await fetch(`/blog-content/${slug}.md`);
          if (response.ok) {
            const mdContent = await response.text();
            setContent(mdContent);
          } else {
            console.warn(`Blog content file not found for slug: ${slug}`);
            setContent(null);
          }
        } catch (fetchErr) {
          console.error("Error fetching blog content:", fetchErr);
          setContent(null);
        }
      } catch (err) {
        console.error("Error loading blog:", err);
        setError("Failed to load blog content");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  // Navigate back to home and scroll to blogs section
  const handleBackToBlogs = () => {
    navigate("/", { state: { skipIntro: true, scrollToBlogs: true } });
  };

  const handleDownload = () => {
    if (blog?.document_url) {
      const link = document.createElement("a");
      link.href = blog.document_url;
      link.download = `${blog.slug}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <ThemeProvider>
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-(--border-color) rounded"></div>
            <div className="h-4 bg-(--border-color) rounded w-3/4"></div>
            <div className="h-96 bg-(--border-color) rounded"></div>
          </div>
        </div>
      </section>
      </ThemeProvider>
    );
  }

  if (error || !blog) {
    return (
      <ThemeProvider>
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-center min-h-75">
          <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-4">
              {error || "Blog not found"}
            </h2>
            <p className="text-(--text-secondary) mb-6">
              The blog you're looking for doesn't exist or couldn't be loaded.
            </p>
            <button
              onClick={handleBackToBlogs}
              className="px-6 py-2 bg-(--accent) text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Return to Blogs
            </button>
          </div>
        </div>
      </section>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <>
        <Header />
        <section className="mt-25">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToBlogs}
            className="back-to-blogs-btn group flex items-center gap-2.5 mb-8 relative overflow-hidden"
          >
            {/* Arrow */}
            <span className="back-arrow-wrap flex items-center justify-center w-8 h-8 rounded-full border border-(--accent) text-(--accent)">
              <LuArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>

            {/* Label */}
            <span className="text-sm font-medium tracking-wide text-(--accent) transition-all duration-300 relative">
              Back to Blogs
              {/* Underline slide-in */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-(--accent) transition-all duration-300 group-hover:w-full" />
            </span>
          </button>

        {/* Header Section */}
        <article>
          {/* Blog Image */}
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 bg-(--bg-primary)">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-(--text-primary) mb-6">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 md:gap-6 items-center text-(--text-secondary) mb-8 pb-8 border-b border-(--border-color)">

            {/* Date */}
            <div className="flex items-center gap-2">
              <LuCalendar className="w-4 h-4 text-(--accent)" />
              <span className="text-sm md:text-base">{blog.date}</span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2">
              <LuClock className="w-4 h-4 text-(--accent)" />
              <span className="text-sm md:text-base">{blog.reading_time} min read</span>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={!blog.document_url}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                blog.document_url
                  ? "bg-(--primary) text-white hover:opacity-90 cursor-pointer"
                  : "bg-(--bg-primary) text-(--text-secondary) border border-(--border-color) cursor-not-allowed opacity-50"
              }`}
            >
              <LuDownload className="w-4 h-4" />
              {blog.document_url ? "Download" : "No Document"}
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-(--bg-primary) text-(--accent) text-sm font-medium rounded-md border border-(--border-color) hover:border-(--accent) transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none mb-12">
            {content ? (
              <MarkdownRenderer content={content} />
            ) : (
              <p className="text-(--text-secondary)">Content could not be loaded.</p>
            )}
          </div>

          {/* References Section */}
          {blog.references && blog.references.length > 0 && (
            <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-(--text-primary) mb-4">
                References & Further Reading
              </h3>
              <ul className="space-y-3">
                {blog.references.map((ref, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-(--accent) font-bold mt-1">•</span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--accent) hover:text-(--primary) transition-colors break-all"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )} 
        </article>
      </div>
    </section>
      </>
    </ThemeProvider>
  );
};
export default BlogDetail;

const MarkdownRenderer = ({ content }) => {
  const lines = content.split(/\r?\n/);
  const elements = [];
  let i = 0;
  let key = 0;

  const add = (node) => {
    elements.push(<Fragment key={`md-${key++}`}>{node}</Fragment>);
  };

  const isTableDivider = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const isTableStart = (idx) =>
    lines[idx] && lines[idx].includes("|") && idx + 1 < lines.length && isTableDivider(lines[idx + 1]);

  while (i < lines.length) {
    let line = lines[i];

    // Skip empty lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const language = line.replace(/```/, "").trim() || "text";
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing fence
      add(<CodeBlock language={language} code={codeLines.join("\n")} />);
      continue;
    }

    // Tables
    if (isTableStart(i)) {
      const headerCells = splitTableRow(lines[i]);
      i += 2; // Skip header + divider
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }

      add(
        <table className="w-full border-collapse my-6">
          <thead>
            <tr>
              {headerCells.map((cell, idx) => (
                <th key={`h-${idx}`} className="px-3 py-2 text-left text-(--text-primary) font-semibold bg-(--bg-primary) border-b border-(--border-color)">
                  {renderInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr key={`r-${rIdx}`} className="border-b border-(--border-color)">
                {row.map((cell, cIdx) => (
                  <td key={`c-${rIdx}-${cIdx}`} className="px-3 py-2 text-(--text-secondary)">
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const HeadingTag = `h${Math.min(level, 3)}`;
      const classNames = {
        1: "text-3xl md:text-4xl font-bold text-(--text-primary) mt-6 mb-3",
        2: "text-2xl md:text-3xl font-semibold text-(--text-primary) mt-5 mb-3",
        3: "text-xl md:text-2xl font-semibold text-(--text-primary) mt-4 mb-2",
      };
      add(<HeadingTag className={classNames[Math.min(level, 3)]}>{renderInline(text)}</HeadingTag>);
      i++;
      continue;
    }

    // Blockquotes
    if (/^>\s?/.test(line)) {
      const quoteLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      add(
        <blockquote className="border-l-4 border-(--accent) pl-4 my-4 italic text-(--text-secondary)">
          {renderInline(quoteLines.join(" "))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*+]\s+/, ""));
        i++;
      }
      add(
        <ul className="list-disc ml-6 my-4 space-y-2 text-(--text-secondary)">
          {items.map((item, idx) => (
            <li key={`ul-${idx}`}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      add(
        <ol className="list-decimal ml-6 my-4 space-y-2 text-(--text-secondary)">
          {items.map((item, idx) => (
            <li key={`ol-${idx}`}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Horizontal rule
    if (/^(---|\*\*\*|___)\s*$/.test(line.trim())) {
      add(<hr className="border-(--border-color) my-6" />);
      i++;
      continue;
    }

    // Paragraph
    const paragraphLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("````") &&
      !lines[i].startsWith("```") &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^[-*+]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !isTableStart(i) &&
      !/^(---|\*\*\*|___)\s*$/.test(lines[i].trim())
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }

    const paragraphText = paragraphLines.join(" ").trim();
    if (paragraphText) {
      add(<p className="mb-4 leading-7 text-(--text-secondary)">{renderInline(paragraphText)}</p>);
    }
  }

  return <div className="blog-content space-y-6 text-(--text-secondary) leading-relaxed">{elements}</div>;
};

const splitTableRow = (row) => row.split("|").map((cell) => cell.trim()).filter(Boolean);

const CodeBlock = ({ language, code }) => {
  return (
    <div className="code-block border border-(--border-color) rounded-lg overflow-hidden my-6 bg-(--bg-primary)">
      <div className="code-block__header px-4 py-2 text-xs uppercase tracking-wide text-(--text-secondary) border-b border-(--border-color) bg-(--bg-primary)">
        {language}
      </div>
      <pre className="m-0 p-4 overflow-x-auto">
        <code className="text-sm font-mono whitespace-pre leading-relaxed text-(--text-secondary)">{code}</code>
      </pre>
    </div>
  );
};

const renderInline = (text) => {
  const parts = text.split(/(`[^`]+`)/g).filter(Boolean);
  const nodes = [];

  parts.forEach((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(
        <code key={`code-${idx}`} className="inline-code bg-(--bg-primary) px-1.5 py-0.5 rounded text-(--accent) text-sm font-mono">
          {part.slice(1, -1)}
        </code>
      );
    } else {
      nodes.push(...renderTextWithEmphasis(part, idx));
    }
  });

  return nodes;
};

const renderTextWithEmphasis = (text, baseKey = 0) => {
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_|!\[[^\]]*\]\([^\)]*\)|\[[^\]]+\]\([^\)]*\))/g;
  const nodes = [];
  let lastIndex = 0;
  let key = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`${baseKey}-txt-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </span>
      );
    }

    const token = match[0];

    if (token.startsWith("![")) {
      const imageMatch = token.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imageMatch) {
        nodes.push(
          <img
            key={`${baseKey}-img-${key++}`}
            src={imageMatch[2]}
            alt={imageMatch[1]}
            className="inline-block align-middle max-w-full rounded"
          />
        );
      }
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        nodes.push(
          <a
            key={`${baseKey}-link-${key++}`}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--accent) underline hover:text-(--primary)"
          >
            {linkMatch[1]}
          </a>
        );
      }
    } else if (token.startsWith("**") || token.startsWith("__")) {
      nodes.push(
        <strong key={`${baseKey}-strong-${key++}`} className="text-(--text-primary) font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    } else {
      nodes.push(
        <em key={`${baseKey}-em-${key++}`} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <span key={`${baseKey}-txt-${key++}`}>
        {text.slice(lastIndex)}
      </span>
    );
  }

  return nodes;
};