import React, { useEffect, useState } from 'react';

const DebouncingWithUseEffect = () => {
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 1000); // Delay of 300ms

   
    return () => {
      clearTimeout(handler);
    };
  }, [text]); 

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
};

export default DebouncingWithUseEffect;
