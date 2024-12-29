

const Options = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onResetClick,
  totalFeedback,
}) => {
    return (
      <>
        <button onClick={onGoodClick}>Good</button>
        <button onClick={onNeutralClick}>Neutral</button>
            <button onClick={onBadClick}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={onResetClick}>Reset</button>
            )}
      </>
    );
};

export default Options;