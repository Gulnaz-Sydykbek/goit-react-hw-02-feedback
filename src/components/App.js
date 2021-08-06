import React, { Component } from 'react';
import Container from './container/Container';
import Statistics from './feedback/section/Statistics';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Section from './feedback/section/Section';
import Notification from './feedback/notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;

    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countTotal = this.countTotalFeedback();
    const feedbackPercentage = (good * 100) / countTotal;

    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const onLeaveFeedback = this.onLeaveFeedback;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
