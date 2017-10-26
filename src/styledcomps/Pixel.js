import styled from 'styled-components';

const Pixel = styled.div`
    background: ${ props => props.color };
    width: ${ props => props.width };
    height: ${ props => props.height };
`;

export default Pixel;