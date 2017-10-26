import { connect } from 'react-redux';
import ColorPicker from '../components/ColorPicker';

const mapStateToProps = (state) => ({
    color: state.color
});

const mapDispatchToProps = () => ({
    handleChange: () => {}
});

const ConColorPicker = connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

export default ConColorPicker;