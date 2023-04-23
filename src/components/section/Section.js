import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ titel, children }) => {
  return (
    <section className={css.section}>
      <h2>{titel}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
