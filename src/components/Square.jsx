/* eslint-disable react/prop-types */
const Square = ({ value, onClick }) => {
  return (
    <button type="buttton" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
