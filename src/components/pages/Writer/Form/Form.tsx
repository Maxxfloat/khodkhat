import { ReactNode } from 'react';
import useFormModel from './useFormModel';

function Form({ children }: { children: ReactNode }) {
  const { submitHandler } = useFormModel();

  return (
    <form className="w-full p-3 capitalize border border-black" onSubmit={submitHandler}>
      <fieldset>
        <legend className="mb-3 font-bold">writer options</legend>
        {children}
        <input type="submit" title="sub" />
      </fieldset>
    </form>
  );
}

export default Form;
