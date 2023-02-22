import { ReactNode } from 'react';

function WriterOptionInputWrapper({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <div className="p-1 bg-white border-b border-black shadow-md focus-within:border-red-500 ">
        {children}
      </div>
    </div>
  );
}

export default WriterOptionInputWrapper;
