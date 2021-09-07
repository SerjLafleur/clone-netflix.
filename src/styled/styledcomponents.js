import styled from 'styled-components'
import { InputBase } from '@material-ui/core'

export const NetflixInput = styled(InputBase)`
z-index: 30;
background:#fff ;
padding: 25.5px;
height: 30px;
border-radius: 5px ;
border: none;
outline: none;
`
// fuencion y styled de NexflixButton
const handleWidth = (wide) => {
    switch (wide) {
        case 'fulWidth': return '100%';
        case 'medium': return '260px';
        default: return '160px'
    }

}
export const NetflixButton = styled.button`
background-color: ${(props) => props.color === 'gray' ? 'lightgray' : 'red'};
color: #fff;
z-index: 15;
padding: 15px;
border-radius: ${({ radius }) => radius ? '5px' : null};
text-transform: inherit;
font-size: 1.1rem;
border: none;
outline: none;
cursor: pointer;
width: ${({ wide }) => handleWidth(wide)}
`


