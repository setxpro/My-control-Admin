import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.mode ? 'block' : 'none'};
    width: 240px;
    height: 100vh;
    -webkit-box-shadow: 10px 0px 14px 2px rgba(0,0,0,0.63); 
    box-shadow: 10px 0px 14px 2px rgba(0,0,0,0.63);
`;
export const Content = styled.div`
    width: 240px;
    height: 100vh;
    background: ${props => props.theme === true ? '#073B4C' : ''};  

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    img {
        width: 100px;
        height: 100px;
        margin-top: 1rem;
        border-radius: 50%;
        padding: 3px;
        border: 2px solid ${props => props.theme === true ? '#FFFF' : '#073B4C'};
    }
    h3 {
        color: ${props => props.theme === true ? '#FFFF' : '#073B4C'};
    }
    p {
        color: ${props => props.theme === true ? '#FFFF' : '#073B4C'};
    }
`;

export const NavSideBar = styled.div`
    width: 240px;
    height: 100vh;

    nav {

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            
            li {
                margin-bottom: 2px;
                border-left: 3px solid transparent;
                
                padding: 10px;
                a {
                    padding: 10px;
                    text-decoration: none;
                    color: ${props => props.theme === true ? '#FFFF' : '#073B4C'};
                }

                &:hover {
                    background-color: ${props => props.theme === true ? 'rgba(176, 176, 176, .1)' : 'rgba(0, 180, 216,.3)'};;
                    border-left: 3px solid #f00;
                }
            }
        }
    }
`;