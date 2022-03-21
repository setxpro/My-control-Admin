import styled from 'styled-components';

export const ContentRepository = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    
`;
export const AreaItemRepo = styled.div`
    width: 300px;
    height: 235px;
    border: 1px solid #00B4D8;
    margin: 10px;
    padding: 5px;
    img {
        background-color: purple;
        width: 280px;
        height: 110px;
    }

    > a {
        position: absolute;
        margin-top: 5px;
        color: ${props => props.mode ? '#fff' : '#00B4D8'};
        
        padding: 5px;
        border: 1px solid ${props => props.mode ? '#fff' : '#00B4D8'};
        border-radius: 8px;
        text-decoration: none;
        font-size: 12px;
        transition: all 1s ease;

        &:hover {
            background-color: #00B4D8;
            color: #fff;
            border: 1px solid #00B4D8;
        }
        
    }
`;
export const RepoItem = styled.div`
  width: 260px;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 1px 3px 5px #000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.mode ? 'transparent' : '#00B4D8'};

  a {
        text-decoration: none;
        

        p {
            width: 250px;
            text-align: center;
            text-overflow: ellipsis; /* ... */
            overflow: hidden;
            white-space: nowrap;
            color: #fff;
        }
  }

   
`;

export const Description = styled.p`
    width: 290px;
    text-align: center;
    font-size: 13px;
    color: ${props => props.mode ? '#fff' : '#888'};
    padding-top: 8px;
    text-overflow: ellipsis; /* ... */
    overflow: hidden;
    white-space: nowrap;
`;

export const InputSearch = styled.input`
    width: 500px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    outline: none;
    font-size: 1rem;
    margin-left: 250px;
`;
