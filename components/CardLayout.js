import Link from "next/link";
import Image from "next/image";

export default function CardLayout({ postsMetaData }) {
  return (
    <div className="card-layout">
      {postsMetaData.map((post) => {
        const metadata = post.metadata || post;
        const imgName = metadata.imgName || 'default-image.jpg';

        return (
          <article className="card" key={metadata.title || 'post'}>
            <Link href={`/blog/${metadata.id || '#'}`} className="card-link">
              <div className="img-container">
                <Image
                  src={`/images/${imgName}`}
                  alt={metadata.title || 'Post image'}
                  width={450}
                  height={225}
                  loading="lazy"
                  className="card-img"
                />
                <div className="img-overlay"></div>
              </div>

              <div className="card-content">
                <span className="date">{metadata.date || 'No date'}</span>
                <h2 className="title">{metadata.title || 'Untitled Post'}</h2>
                <p className="description">{metadata.description || 'No description available'}</p>

                <div className="tags">
                  {(metadata.tags || []).slice(0, 3).map((tag_name) => (
                    <span key={tag_name} className="tag">
                      #{tag_name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        );
      })}

      <style jsx>{`
        .card-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px;
          padding: 32px 5vw;
          background: #0a0a0f;
          min-height: calc(100vh - 200px);
        }

        .card {
          background: linear-gradient(145deg, #12121a 0%, #15151f 100%);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0) 0%, rgba(0, 240, 255, 0) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 240, 255, 0.2);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(0, 240, 255, 0.1);
        }

        .card:hover::before {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.5) 0%, rgba(57, 255, 20, 0.5) 100%);
        }

        .card :global(.card-link) {
          text-decoration: none;
          display: block;
        }

        .img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .img-container :global(.card-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover .img-container :global(.card-img) {
          transform: scale(1.05);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10, 10, 15, 0.9) 100%);
          pointer-events: none;
        }

        .card-content {
          padding: 20px 24px 24px;
        }

        .date {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: #00f0ff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .title {
          font-family: 'Maven Pro', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #e4e4e7;
          margin: 8px 0 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .card:hover .title {
          color: #00f0ff;
        }

        .description {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 0.95rem;
          color: #a1a1aa;
          line-height: 1.6;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: #39ff14;
          padding: 4px 10px;
          background: rgba(57, 255, 20, 0.1);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .card:hover .tag {
          background: rgba(57, 255, 20, 0.15);
          border-color: rgba(57, 255, 20, 0.4);
        }

        @media screen and (max-width: 1200px) {
          .card-layout {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 20px;
            padding: 24px 4vw;
          }
        }

        @media screen and (max-width: 720px) {
          .card-layout {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 20px 4vw;
          }

          .card-content {
            padding: 16px 20px 20px;
          }

          .title {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  );
}
