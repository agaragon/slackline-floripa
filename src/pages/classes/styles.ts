import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const TeachersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    width: 80%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TeacherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  `;


export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TeacherDescription = styled.p``

export const TeacherName = styled.h1``