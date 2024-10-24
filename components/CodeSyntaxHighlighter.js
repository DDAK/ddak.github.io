import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

class CodeSyntaxHighlighter extends React.Component {
  constructor(props) {
    super(props);
    const className = this.props.code_props?.className || '';
    const parts = className.replace("language-", "").split(":");

    this.language = parts[0] || '';
    this.file_name = parts[1] || '';

    // Ensure children is a string
    this.code = typeof this.props.code_props.children === 'string' 
      ? this.props.code_props.children 
      : String(this.props.code_props.children);

    console.log('CodeSyntaxHighlighter props:', this.props.code_props);
    console.log('Language:', this.language);
    console.log('File name:', this.file_name);
    console.log('Code:', this.code);
  }

  render() {
    return (
      <div>
        {this.file_name && <div>{this.file_name}</div>}
        <SyntaxHighlighter 
          language={this.language || 'text'} 
          style={tomorrow}
          showLineNumbers={true}
        >
          {this.code}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default CodeSyntaxHighlighter;
