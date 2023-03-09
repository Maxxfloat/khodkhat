/* eslint-disable react/jsx-props-no-spreading */
import { FormProvider } from 'react-hook-form';
import dynamic from 'next/dynamic';
import SubjectField from '@/components/InputFields/SubjectField';
import OptionsMenu from './Form/OptionsMenu/OptionsMenu';
import useWriterModel from './useWriterModel';
import Form from './Form/Form';

const Result = dynamic(() => import('./Result/Result'), { ssr: false });

function Writer() {
  const { formMethods } = useWriterModel();

  return (
    <div className="flex flex-col items-center">
      <div className="mx-1 sm:mx-0 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <FormProvider {...formMethods}>
          <Form>
            <SubjectField />
            <OptionsMenu />
            <button type="submit" className="px-3 py-1 text-lg border-2 border-black">
              Send
            </button>
          </Form>
        </FormProvider>
        <div className="mt-3">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Writer;
