import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
}

const MarkdownProduct: React.FC<Props> = ({ content }) => {
  return (
    <div className='border shadow-sm p-4'>
      <ReactMarkdown children={content} />
    </div>
  )
}

export default MarkdownProduct;
