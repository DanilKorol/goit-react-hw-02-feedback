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
    <ul className={css.list}>
      <li>
        <p className={css.text}>
          Good : <span className={css.span}>{good}</span>
        </p>
      </li>
      <li>
        <p className={css.text}>
          Neutral : <span className={css.span}>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.text}>
          Bad : <span className={css.span}>{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.text}>
          Total : <span className={css.span}>{total}</span>
        </p>
      </li>
      <li>
        <p className={css.text}>
          Positive feedback :{' '}
          <span className={css.span}>{positivePercentage()} %</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
