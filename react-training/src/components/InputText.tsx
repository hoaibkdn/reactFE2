/** @format */

type InputProps = {
  label: string;
  value?: string;
};
const InputText = ({ label, value }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type='text' value={value} onChange={() => {}}></input>
    </div>
  );
};

export default InputText;
