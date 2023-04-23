import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button
      key={btn.id}
      className={css.btn}
      name={btn.name}
      onClick={onLeaveFeedback}
      type="button"
    >
      {btn.titleBtn}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      titleBtn: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
