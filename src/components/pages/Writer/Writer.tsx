/* eslint-disable react/jsx-props-no-spreading */
import { FormProvider } from 'react-hook-form';
import SubjectField from '@/components/InputFields/SubjectField';
import OptionsMenu from './Form/OptionsMenu/OptionsMenu';
import useWriteModel from './useWriterModel';
import Form from './Form/Form';

function Writer() {
  const { formMethods } = useWriteModel();

  return (
    <div className="flex flex-col items-center">
      <div className="mx-1 sm:mx-0 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <FormProvider {...formMethods}>
          <Form>
            <SubjectField />
            <OptionsMenu />
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Writer;
