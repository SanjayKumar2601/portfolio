import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ subtitle, title }) => (
  <motion.div
    className="about-heading"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
  >
    <h4 className="section-subtitle">{subtitle}</h4>
    <h2 className="section-title">{title}</h2>
  </motion.div>
);

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;