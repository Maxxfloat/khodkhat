/* eslint-disable react/jsx-props-no-spreading */
import WriterOptionInputWrapper from '@/components/InputFields/WriterOptionInputWrapper';
import useOptionsMenuModel from './useOptionsMenuModel';

function OptionsMenu() {
  const { numberOfPages, tones, register } = useOptionsMenuModel();

  return (
    <div className="grid grid-flow-row my-5 md:grid-cols-2 gap-x-12 gap-y-5">
      <WriterOptionInputWrapper label="words">
        <input
          type="number"
          min="200"
          id="words"
          className="outline-none mie-2 "
          {...register('words', { min: 200 })}
        />
        <span>about {numberOfPages} pages</span>
      </WriterOptionInputWrapper>
      <WriterOptionInputWrapper label="tone">
        <select id="tone" className="w-full" {...register('tone')}>
          {tones.map((tone) => {
            return (
              <option className="w-full" key={tone}>
                {tone}
              </option>
            );
          })}
        </select>
      </WriterOptionInputWrapper>
      <WriterOptionInputWrapper label="more data">
        <textarea id="more data" className="w-full" {...register('additionalInfo')} />
      </WriterOptionInputWrapper>
    </div>
  );
}

export default OptionsMenu;
