import React from 'react';
import { TeacherContainer, TeachersContainer, TeacherName, TeacherDescription, Image, Container, Contact } from './styles';
import { TeacherDescriptions } from './teacherDescriptions';

const Classes: React.FC = () => {
  return (
    <Container>
        <TeachersContainer>
            <TeacherContainer>
                {TeacherDescriptions.map((teacher) => {
                    return <>
                        <TeacherName>{teacher.name}</TeacherName>
                        <Image src={teacher.image} alt={teacher.alt} />
                        <TeacherDescription>
                            {teacher.description}
                        </TeacherDescription>
                        <Contact href={teacher.contact}>{teacher.contactText}</Contact>
                    </>
                })}
            </TeacherContainer>
        </TeachersContainer>
    </Container>
  );
};

export default Classes;