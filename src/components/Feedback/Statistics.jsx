import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.text}>
        Good:<span className={css.sum}>{good}</span>
      </p>
      <p className={css.text}>
        Neutral:<span className={css.sum}>{neutral}</span>
      </p>
      <p className={css.text}>
        Bad:<span className={css.sum}>{bad}</span>
      </p>
      <p className={css.text}>
        Total:<span className={css.sum}>{total}</span>
      </p>
      <p className={css.text}>
        Positive feedback:
        <span className={css.sum}>{positivePercentage} %</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
