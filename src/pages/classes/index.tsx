import React from 'react';
import { TeacherContainer, TeacherName, TeacherDescription, Image, Contact } from './styles';
import { TeacherDescriptions } from './teacherDescriptions';
import { Page } from '../../components/page';

const Classes: React.FC = () => {
  return (
    <Page>
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
    </Page>
  );
};

export default Classes;