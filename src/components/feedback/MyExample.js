/*import React from 'react';
import shortId from 'shortid';

class Feedback extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
  }

  countTotalFeedback = () => {
    const result = this.state.good + this.state.neutral + this.state.bad;
    return result;
  }

  countPositiveFeedbackPercentage = () => {
    const per = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(per);
  }

  render() {
    const options = Object.keys(this.state);
    console.log(options)

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {options.map((option) => (
				    <button key={shortId.generate()} type="button" name={option} onClick={this.onLeaveFeedback}>
					    {option}
				    </button>
			    ))}
        </div>
        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <p>No feedback given</p> 
        ) : (
          <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div> 
        )}
      </div>
    );
  }
}

export default Feedback;*/
