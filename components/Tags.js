import Link from "next/link";

const tags = [
  "ai",
  "python",
  "go",
  "image-processing",
  "opencv",
  "concurrency",
  "python-performance",
  "color-science",
  "react",
  "next-js",
  "flutter",
];

export default function Tags() {
  return (
    <div className="tags-container">
      <div className="tags">
        {tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag} className="tag-link">
            #{tag}
          </Link>
        ))}
      </div>

      <style jsx>{`
        .tags-container {
          padding: 16px 5vw;
          background: rgba(18, 18, 26, 0.95);
          border-bottom: 1px solid rgba(0, 240, 255, 0.1);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .tags :global(.tag-link) {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          color: #39ff14;
          padding: 6px 12px;
          text-decoration: none;
          background: rgba(57, 255, 20, 0.08);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .tags :global(.tag-link:hover) {
          color: #00f0ff;
          background: rgba(0, 240, 255, 0.1);
          border-color: rgba(0, 240, 255, 0.3);
          transform: translateY(-1px);
        }

        .tags :global(.tag-link:active) {
          color: #ff00aa;
          border-color: rgba(255, 0, 170, 0.3);
        }
      `}</style>
    </div>
  );
}
