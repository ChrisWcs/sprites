import React from 'react';
import PropTypes from 'prop-types';

import Row from '../styledcomps/Row';
import Column from '../styledcomps/Column';
import Pixel from '../styledcomps/Pixel';

const Thumbnail = ({ matrix }) => (
    <Column>
        {matrix.map( (r, i) =>{
            return(
                <Row key={i}>{r.map( (p, j) => <Pixel key={j} color={p} width={10} height={10}/>)}</Row>
            );
        })}
    </Column>
);

Thumbnail.propTypes = {
    matrix: PropTypes.array
};

export default Thumbnail;