
import { useState, useEffect } from "react";
import './App.css'
import Description from "./Description";
import Feedback from "./Feedback";
import Notification from "./Notification"
import Options from "./Options"




const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Завантаження даних із localStorage при завантаженні додатку
  useEffect(() => {
    const savedGood = localStorage.getItem("good");
    const savedNeutral = localStorage.getItem("neutral");
    const savedBad = localStorage.getItem("bad");

    if (savedGood) setGood(Number(savedGood));
    if (savedNeutral) setNeutral(Number(savedNeutral));
    if (savedBad) setBad(Number(savedBad));
  }, []);

  // Збереження стану у localStorage при його зміні
  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const handleResetClick = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onGoodClick={handleGoodClick}
        onNeutralClick={handleNeutralClick}
        onBadClick={handleBadClick}
        onResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}


export default App;

