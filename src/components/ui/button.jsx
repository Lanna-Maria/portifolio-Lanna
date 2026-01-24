// button.jsx
import React from 'react';
import { Slot } from '@radix-ui/react-slot'; // se você quiser suporte a "asChild"
import { cn } from './utils';

function Button({ className, children, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button };
