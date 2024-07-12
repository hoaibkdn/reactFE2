/** @format */
import { memo, ChangeEvent, useState, useRef } from 'react';

const Form = ({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) => {
  console.log('form');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault(); //

    if (titleRef.current) {
      console.log('value title ', titleRef.current.value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Form {firstname}</h3>

      <div>
        <label>Title</label>
        <input
          ref={titleRef}
          type='text'
          value={title} // controlled component
          // defaultValue={'Hello world'}
          onChange={onChangeTitle}
        />
      </div>

      <div>
        <label>Content</label>
        <input type='text' value={content} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default memo(Form); // no props,
