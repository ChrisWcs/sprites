import initialState from './initialState';
import { UPDATE_COLOR, UPDATE_PIXEL } from '../actions/actions';
import { copySprite } from '../utils/graphicsUtil';

const reducer = (state = initialState(), action) => {
    switch(action.type){
        case UPDATE_COLOR:
            return {
                ...state,
                color: {
                    ...state.color,
                    [action.color]: action.value
                }
            };
        case UPDATE_PIXEL:
            let newSprite = copySprite(state.mat);
            newSprite[action.r][action.c] = `rgb(${state.color.r}, ${state.color.b},${state.color.g})`;
            return {
                ...state,
                mat: newSprite
            };
        default:
            return state;
    }
};

export default reducer;