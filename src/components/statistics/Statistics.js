import PropTypes from 'prop-types';
import Notification from '../notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}
      {total !== 0 && (
        <ul className={css['statistics-list']}>
          <li>
            Good:<span className={css.reviews}>{good}</span>
          </li>
          <li>
            Neutral:<span className={css.reviews}>{neutral}</span>
          </li>
          <li>
            Bad:<span className={css.reviews}>{bad}</span>
          </li>
          <li>
            Total:<span className={css.reviews}>{total}</span>
          </li>
          <li>
            Positive feedback:
            <span className={css.reviews}>{positivePercentage}%</span>
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
