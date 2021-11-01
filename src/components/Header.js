import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1> {title} </h1>
      <Button color={ showAdd ? 'Red' : 'green' } text={ showAdd ? 'Close' : 'Add' } onClick={onAdd}/>
    </header> 
  )
}

Header.defaultProps = {
    title: 'Default Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css styling in js
// const headerStyle = {
//   color: 'green',
//   backgroundColor: 'black',
// }

export default Header
