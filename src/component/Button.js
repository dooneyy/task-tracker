import PropTypes from 'prop-types'


const button = ({color, text, onClick }) => {
    return <button className='btn' style={{backgroundColor: color}}  onClick={onClick}>{text}</button>
}

button.defaultProps = {
    color: 'steelBlue'
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default button
