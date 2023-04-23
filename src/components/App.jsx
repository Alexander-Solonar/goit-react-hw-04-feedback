import { useState } from 'react';
import Section from './section/';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = mark => {
    switch (mark) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + bad + neutral;
  };

  const positivePercentage = () => {
    return Math.round((100 / totalFeedback()) * good);
  };

  return (
    <div>
      <Section titel="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section titel="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={positivePercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};

export default App;
