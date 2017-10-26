import React from 'react';
import PropTypes from 'prop-types';

import Row from '../styledcomps/Row';
import Column from '../styledcomps/Column';
import Pixel from '../styledcomps/Pixel';

const Canvas = ({ matrix, func }) => (
    <Column>
        {matrix.map( (r, i) =>{
            return(
                <Row key={i}>{r.map( (p, j) => <Pixel onClick={func(i,j)} key={j} color={p} width={40} height={40}/>)}</Row>
            );
        })}
    </Column>
);

Canvas.propTypes = {
    matrix: PropTypes.array,
    func: PropTypes.func,
};

export default Canvas;