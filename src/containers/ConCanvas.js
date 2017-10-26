import { connect } from 'react-redux';
import Canvas from '../components/Canvas';

const mapStateToProps = (state) => ({
    matrix: state.mat
});

const mapDispatchToProps = () => ({
    func: () => {}
});

const ConCanvas = connect( mapStateToProps, mapDispatchToProps )(Canvas);

export default ConCanvas;