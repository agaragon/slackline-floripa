import slacklineImage from '../../assets/images/slackline.jpg';
type TeacherDescription = {
    name: string,
    description: string,
    image: string,
    contact: string,
    alt: string,
    contactText: string
}

export const TeacherDescriptions:TeacherDescription[] = [
    {
        name: 'André Guimarães Aragon',
        description: 'Um slackliner brasileiro com mais de 4 anos de experiência. Começou a andar de slackline pois se machucou correndo.',
        image: slacklineImage,
        contactText: 'Fale comigo no whatsapp!',
        contact: 'https://wa.me/5548988185545?text=Oi%2C+Andr%C3%A9%21+Quero+aprender+a+andar+de+slackline%21',
        alt: 'Slackline'
    },    
]
