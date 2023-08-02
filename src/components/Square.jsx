/* eslint-disable react/prop-types */
const Square = ({ value, onClick, isWinningSquare }) => {
  const colourClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="buttton"
      className={`square ${colourClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
