import { faHospital } from "@fortawesome/free-regular-svg-icons";
import { faAward, faFlask, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutCardData = [
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faUserMd}/>,
        title: 25,
        txt: 'Doctors'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faHospital}/>,
        title: 15,
        txt: 'Departments'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faFlask}/>,
        title: 8,
        txt: 'Research Labs'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faAward}/>,
        title: 150,
        txt: 'Awards'
    }
]