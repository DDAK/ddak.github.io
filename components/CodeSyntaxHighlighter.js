import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// Custom cyberpunk theme
const cyberpunkTheme = {
  'code[class*="language-"]': {
    color: '#e4e4e7',
    background: 'none',
    fontFamily: "'Share Tech Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: '0.9rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    tabSize: 2,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#e4e4e7',
    background: '#0d0d12',
    fontFamily: "'Share Tech Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: '0.9rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    tabSize: 2,
    hyphens: 'none',
    padding: '1.5em',
    margin: '0',
    overflow: 'auto',
    borderRadius: '0 0 8px 8px',
  },
  comment: { color: '#6b7280' },
  prolog: { color: '#6b7280' },
  doctype: { color: '#6b7280' },
  cdata: { color: '#6b7280' },
  punctuation: { color: '#a1a1aa' },
  property: { color: '#00f0ff' },
  tag: { color: '#ff00aa' },
  boolean: { color: '#ff6b00' },
  number: { color: '#ff6b00' },
  constant: { color: '#ff6b00' },
  symbol: { color: '#39ff14' },
  deleted: { color: '#ff00aa' },
  selector: { color: '#39ff14' },
  'attr-name': { color: '#00f0ff' },
  string: { color: '#39ff14' },
  char: { color: '#39ff14' },
  builtin: { color: '#bf00ff' },
  inserted: { color: '#39ff14' },
  operator: { color: '#00f0ff' },
  entity: { color: '#ff6b00', cursor: 'help' },
  url: { color: '#00f0ff' },
  '.language-css .token.string': { color: '#39ff14' },
  '.style .token.string': { color: '#39ff14' },
  variable: { color: '#e4e4e7' },
  atrule: { color: '#00f0ff' },
  'attr-value': { color: '#39ff14' },
  function: { color: '#bf00ff' },
  'class-name': { color: '#00f0ff' },
  keyword: { color: '#ff00aa' },
  regex: { color: '#39ff14' },
  important: { color: '#ff6b00', fontWeight: 'bold' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  'linenumber': { color: '#4a4a5a', minWidth: '2.5em', paddingRight: '1em', textAlign: 'right', userSelect: 'none' },
};

function CodeSyntaxHighlighter({ code_props }) {
  const className = code_props?.className || '';
  const isInlineCode = !className.includes('language-');

  // Handle inline code (no language specified)
  if (isInlineCode) {
    return (
      <code className="inline-code">
        {code_props.children}
        <style jsx>{`
          .inline-code {
            font-family: 'Share Tech Mono', 'Fira Code', Consolas, monospace;
            font-size: 0.9em;
            background: rgba(0, 240, 255, 0.1);
            color: #00f0ff;
            padding: 2px 8px;
            border-radius: 4px;
            border: 1px solid rgba(0, 240, 255, 0.2);
          }
        `}</style>
      </code>
    );
  }

  const parts = className.replace("language-", "").split(":");
  const language = parts[0] || 'text';
  const fileName = parts[1] || '';

  const code = typeof code_props.children === 'string'
    ? code_props.children
    : String(code_props.children);

  return (
    <div className="code-block">
      {fileName && (
        <div className="file-header">
          <span className="file-icon">📄</span>
          <span className="file-name">{fileName}</span>
        </div>
      )}
      <div className="language-badge">{language}</div>
      <SyntaxHighlighter
        language={language}
        style={cyberpunkTheme}
        showLineNumbers={true}
        wrapLines={true}
        lineNumberStyle={{
          color: '#4a4a5a',
          minWidth: '2.5em',
          paddingRight: '1em',
          textAlign: 'right',
          userSelect: 'none',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          marginRight: '1em',
        }}
        customStyle={{
          margin: 0,
          borderRadius: fileName ? '0 0 8px 8px' : '8px',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          borderTop: fileName ? 'none' : '1px solid rgba(0, 240, 255, 0.15)',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>

      <style jsx>{`
        .code-block {
          margin: 1.5rem 0;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }

        .file-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #15151f;
          border: 1px solid rgba(0, 240, 255, 0.15);
          border-bottom: none;
          border-radius: 8px 8px 0 0;
        }

        .file-icon {
          font-size: 0.9rem;
        }

        .file-name {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          color: #a1a1aa;
        }

        .language-badge {
          position: absolute;
          top: ${fileName ? '48px' : '8px'};
          right: 12px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.7rem;
          color: #39ff14;
          background: rgba(57, 255, 20, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid rgba(57, 255, 20, 0.2);
          text-transform: uppercase;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default CodeSyntaxHighlighter;
