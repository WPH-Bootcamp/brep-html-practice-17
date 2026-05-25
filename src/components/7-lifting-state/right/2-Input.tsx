type InputProps = {
  value: string;
  onChange: (e: any) => void;
};

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
