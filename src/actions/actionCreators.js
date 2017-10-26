import { UPDATE_COLOR, UPDATE_PIXEL } from './actions';

export const createUpdateColor = (color, value) => ({
    type: UPDATE_COLOR,
    color,
    value,
});

export const createUpdatePixel = (r, c) => ({
    type: UPDATE_PIXEL,
    r,
    c,
});