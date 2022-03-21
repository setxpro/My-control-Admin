import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: ${props => props.mode ? '#0C637F' : '#00B4D8'};

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  
`;

export const SocialArea = styled.div`

        display: flex;
        gap: 1rem;
    
    a {
        color: #fff;
        font-size: 1.5rem;
    }
`;
export const InfoDev = styled.div`

    display: flex;
    gap: 1rem;

    p {
        color:  #777;
        
        a {
            color: #777;
            text-decoration: none;
        }
    }
`;