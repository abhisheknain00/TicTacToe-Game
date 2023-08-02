const statusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O'; ////DERIVED STATE

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }

    if (noMovesLeft) {
      return (
        <div>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> Tied
        </div>
      );
    }

    return (
      <div>
        Next Player is{' '}
        <span className={isXNext ? 'text-green' : 'text-orange'}>
          {nextPlayer}
        </span>
      </div>
    );
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default statusMessage;
