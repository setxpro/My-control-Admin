import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    width: ${props => props.wdt ? '1060px' : '100%'} ;
    height: 100%;
    margin: auto;
    background-color: ${props => props.mode ? '#073B4C' : '#E9ECEF'};
    color: ${props => props.mode ? '#E9ECEF' : '#090A0B'};
    padding: 1rem;
    padding-bottom: 100px; /* OBS  */
`;
