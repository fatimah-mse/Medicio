import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactInfo = [
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faLocationPin}/>,
        title: 'Address',
        text: 'A108 Adam Street New York, NY 535022',
        lg: 12
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faPhone}/>,
        title: 'Call Us',
        text: '+963 981 944 215',
        lg: 6
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faEnvelope}/>,
        title: 'Email Us',
        text: 'fatimahmse83@gmail.com',
        lg: 6
    }
]