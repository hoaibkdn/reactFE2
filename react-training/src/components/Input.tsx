/** @format */

import { ChangeEvent, memo } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void;
  inputType: string;
};

const Input = ({ label, value, onChange, inputType }: Props) => {
  console.log('render ', label);
  return (
    <div>
      <label>{label}</label>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e, inputType)}
      />
    </div>
  );
};

export default memo(Input, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
