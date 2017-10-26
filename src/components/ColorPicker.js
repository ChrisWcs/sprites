import React from 'react';
import PropTypes from 'prop-types';

import Column from '../styledcomps/Column';
import Row from '../styledcomps/Row';
import Input from '../styledcomps/Input';

const ColorPicker = ({handleChange, color}) => (
    <Column>
        <Row>r =><Input type="text" value={color.r} onChange={handleChange('r')}/></Row>
        <Row>g =><Input type="text" value={color.g} onChange={handleChange('g')}/></Row>
        <Row>b =><Input type="text" value={color.b} onChange={handleChange('b')}/></Row>
    </Column>
);

ColorPicker.propTypes = {
    handleChange: PropTypes.func,
    color: PropTypes.object
};

export default ColorPicker;