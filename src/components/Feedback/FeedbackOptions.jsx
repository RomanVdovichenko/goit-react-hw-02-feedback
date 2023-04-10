import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const buttonMap = [
  { id: 'id-good', titleBtn: 'Good', name: 'good' },
  { id: 'id-neutral', titleBtn: 'Neutral', name: 'neutral' },
  { id: 'id-bad', titleBtn: 'Bad', name: 'bad' },
];

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return buttonMap.map(btn => (
    <button
      key={btn.id}
      className={css.btn}
      name={btn.name}
      onClick={onLeaveFeedback}
      type={options}
    >
      {btn.titleBtn}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
