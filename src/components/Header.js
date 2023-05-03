import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {

  return (
    <header className='header'>
        <h1>{props.title}</h1>
        {useLocation().pathname === '/' && (
          <Button 
          color={props.showAdd ? 'red' : 'green'} 
          text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd} />
        )
        }
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker - Default',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header