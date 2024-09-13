import { faDna, faHeartbeat, faPills, faThermometer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FeaturedCardData = [
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faHeartbeat}/>,
        title: 'Lorem Ipsum',
        text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faPills}/>,
        title: 'Sed ut perspici',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faThermometer}/>,
        title: 'Magni Dolores',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {
        icon: <FontAwesomeIcon className='FM-icon fa-2xl' icon={faDna}/>,
        title: 'Nemo Enim',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    }
]