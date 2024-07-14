/** @format */

import { ChangeEvent, memo, useState, forwardRef } from 'react';

type Props = {
  label: string;
  value?: string;
  triggerInput?: () => void;
  // onChange: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void;
  // inputType: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, value, triggerInput }, ref) => {
    const [valueInput, setValue] = useState(value || '');
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    console.log('triggerInput', triggerInput);
    console.log('render ', label);
    return (
      <div>
        <label>{label}</label>
        <input
          ref={ref}
          type='text'
          value={valueInput}
          onChange={onChangeInput}
        />
      </div>
    );
  }
);

export default memo(Input);
