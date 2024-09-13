import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopNavData =[
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faClock}/>,
        txt: 'Monday - Saturday, 8AM to 10PM',
        hide: 'd-none'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faMobile}/>,
        txt: 'Call us now +963 981 944 215'
    }
]