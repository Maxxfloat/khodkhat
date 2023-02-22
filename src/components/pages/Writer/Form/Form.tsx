import { ReactNode } from 'react';

function Form({ children }: { children: ReactNode }) {
  return (
    <form className="w-full p-3 capitalize border border-black">
      <fieldset>
        <legend className="mb-3 font-bold">writer options</legend>
        {children}
      </fieldset>
    </form>
  );
}

export default Form;
