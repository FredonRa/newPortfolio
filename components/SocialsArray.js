import { GrMail, GrGithub} from 'react-icons/gr'
import { BsLinkedin } from 'react-icons/bs'
import { FaCloudDownloadAlt } from 'react-icons/fa'

export const SocialsArray = [
    {
        name: "Linkedin",
        icon: <BsLinkedin />,
        link: "https://www.linkedin.com/in/federico-leiva/"
    },
    {
        name: "Github",
        icon: <GrGithub />,
        link: "https://github.com/FredonRa?tab=repositories"
    },
    {
        name: "Mail",
        icon: <GrMail />,
        link: "mailto: fedeleiva20@gmail.com"
    }, 
    {
        name: "CV",
        icon: <FaCloudDownloadAlt />,
        link: "/Curriculum Vitae.pdf"
    }, 
]