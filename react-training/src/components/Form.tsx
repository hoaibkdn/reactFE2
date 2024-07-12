/** @format */
import { memo, ChangeEvent, useState, useRef, useCallback } from 'react';
import Input from './Input';

const Form = ({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) => {
  console.log('form');
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
  });
  const titleRef = useRef<HTMLInputElement>(null);

  const onChangeForm = useCallback(
    (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
      setForm({
        ...form,
        [inputType]: e.target.value,
      });
    },
    [form]
  );
  const onSubmit = (e: any) => {
    e.preventDefault(); //

    if (titleRef.current) {
      console.log('value title ', titleRef.current.value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Form {firstname}</h3>
      <Input
        label='Title'
        value={form.title}
        onChange={onChangeForm}
        inputType='title'
      />
      <Input
        label='Content'
        value={form.content}
        onChange={onChangeForm}
        inputType='content'
      />
      {/* Input author */}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default memo(Form); // no props,
