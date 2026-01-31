'use client';
import React, { useEffect } from 'react';

export default function Toast({ message, onClose }: { message: string; onClose?: () => void }){
  useEffect(()=>{
    const t = setTimeout(()=> onClose && onClose(), 3000);
    return ()=> clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed right-4 bottom-4 rounded-[var(--radius)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-4 py-2 shadow-lg">
      {message}
    </div>
  )
}
