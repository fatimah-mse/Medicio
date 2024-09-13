import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavLinkData = [
    {
        href: '#',
        link: 'Home'
    },
    {
        href: '#',
        link: 'About'
    },
    {
        href: '#services',
        link: 'Services'
    },
    {
        href: '#departments',
        link: 'Departments'
    },
    {
        href: '#doctors',
        link: 'Doctors'
    },
    {
        href: '#',
        type: 'dropdown',
        link: (
            <>
                Dropdown
                <FontAwesomeIcon className="ms-2" icon={faChevronDown} />
            </>
            )
    },
    {
        href: '#contact',
        link: 'Contact'
    }
]