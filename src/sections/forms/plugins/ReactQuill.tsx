'use client';

import { useState } from 'react';

// next
import dynamic from 'next/dynamic';

// third party
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});

// ==============================|| QUILL EDITOR ||============================== //

const ReactQuillDemo = () => {
  const [text, setText] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  const handleChange = (value: string) => {
    setText(value);
  };

  return <ReactQuill value={text} onChange={handleChange} />;
};

export default ReactQuillDemo;
