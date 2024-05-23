import React from 'react';
import { TeacherContainer, TeachersContainer, TeacherName, TeacherDescription, Image, Container } from './styles';
import { TeacherDescriptions } from './teacherDescriptions';


const Classes: React.FC = () => {
  return (
    <Container>
        <TeachersContainer>
            <TeacherContainer>
                {TeacherDescriptions.map((teacher) => {
                    return <>
                        <h1>{teacher.name}</h1>
                        <Image src={teacher.image} alt={teacher.alt} />
                        <TeacherDescription>
                            {teacher.description}
                        </TeacherDescription>
                    </>
                })}
            </TeacherContainer>
        </TeachersContainer>
    </Container>
  );
};

export default Classes;