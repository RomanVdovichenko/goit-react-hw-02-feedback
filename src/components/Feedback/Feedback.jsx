import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Pleasse leave feedback">
          <FeedbackOptions
            options={'button'}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={`${this.countPositiveFeedbackPercentage()} %`}
            />
          </Section>
        )}
      </>
    );
  }
}
