import { connect } from 'react-redux';
import { createUpdateColor } from '../actions/actionCreators';
import ColorPicker from '../components/ColorPicker';

const mapStateToProps = (state) => ({
    color: state.color
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (letter) => (event) => {
        const {value} = event.target; 
        dispatch(createUpdateColor(letter, value)); 
    }
});

const ConColorPicker = connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

export default ConColorPicker;