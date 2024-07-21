import React, { useState, useEffect } from 'react';
import './CursorShadow.css';

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="shadow"
      style={{ transform: `translate(${position.x - 25}px, ${position.y - 25}px)` }}
    />
  );
}

export default CursorShadow;
