/** @format */
import {
  memo,
  ChangeEvent,
  useState,
  useRef,
  useCallback,
  useMemo, // save data
} from 'react';
import Input from './Input';

const computeData = () => {
  const startTime = Date.now();
  let i = 0;
  const n = 1000000;
  while (i < n) {
    i++;
  }
  console.log('time ', Date.now() - startTime);
  return i;
};

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
  const [count, setCount] = useState(0);
  const titleRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const onChangeForm = useCallback(
    (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
      setForm((prevform) => ({
        ...prevform,
        [inputType]: e.target.value,
      }));
    },
    [] // dependencies
  );

  const dataComputed = useMemo(() => computeData(), []); //

  const triggerInput = useCallback(() => {
    form.title = 'set form';
  }, [form]); // [] empty: create function whern mounting
  // [form]: re-create function when form change

  const onSubmit = (e: any) => {
    e.preventDefault(); //

    // if (titleRef.current) {
    //   console.log('value title ', titleRef.current.value);
    // }
    console.log('ref form', formRef);
    const formData = {
      title: formRef.current[0]?.value,
      content: formRef.current[1]?.value,
    };
    console.log('formData ', formData);
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Count</p>
      <p>{count}</p>
      <p>{dataComputed}</p>
      <button onClick={handleIncrease}>Increase</button>
      <h3>Form {firstname}</h3>
      {/* {['Title', 'Content', 'Author', 'Gender', 'Note'].map((item, index) => (
        <Input
          label={item}
          ref={(element) => (formRef.current[index] = element)}
        />
      ))} */}
      <Input label={'Test'} ref={titleRef} triggerInput={triggerInput} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default memo(Form); // no props,
// memo -> higher order component
// memo (Component1) => Component1.1
