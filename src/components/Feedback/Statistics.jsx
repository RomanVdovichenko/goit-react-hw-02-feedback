import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const statisticsMap = [
  { id: 'id-1', title: 'Good', name: 'good' },
  { id: 'id-2', title: 'Neutral', name: 'neutral' },
  { id: 'id-3', title: 'Bad', name: 'bad' },
  { id: 'id-4', title: 'Total', name: 'total' },
  { id: 'id-5', title: 'Positive feedback', name: 'positivePercentage' },
];

export const Statistics = props => {
  return (
    <ul className={css.list}>
      {statisticsMap.map(item => (
        <li className={css.item} key={item.id}>
          <span className={css.text}>{item.title}:</span>
          <span className={css.text}>{props[item.name]}</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }),
};
