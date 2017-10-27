import { connect } from 'react-redux';
import Canvas from '../components/Canvas';
import { createUpdatePixel } from '../actions/actionCreators';

const mapStateToProps = (state) => ({
    matrix: state.mat
});

const mapDispatchToProps = (dispatch) => ({
    func: (r, c) => () => {
        dispatch(createUpdatePixel(r,c));
    }
});

const ConCanvas = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default ConCanvas;