import { blankSprite } from '../utils/graphicsUtil';

const initialState = () => ({
    mat: blankSprite(5,5),
    color: {
        r: 0,
        g: 0,
        b: 0,
    }
});

export default initialState;