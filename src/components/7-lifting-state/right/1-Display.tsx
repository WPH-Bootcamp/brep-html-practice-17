type DisplayProps = {
  value: string;
};

const Display = ({ value }: DisplayProps) => {
  return <h2>Display (right) : {value}</h2>;
};

export default Display;
