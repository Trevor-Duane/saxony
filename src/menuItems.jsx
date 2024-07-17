import { AiFillHome } from "react-icons/ai";

export const menuItems = [
    {
        id: 1,
        // title: <AiFillHome size={18} color="#fff"/>,
        title: "HOME",
        url:"/"
    },
    {
        id: 2,
        title: "ABOUT US",
        url:"/about_us"
    },
    {
        id: 3,
        title: "JOIN THE PROJECT",
        url:"/join_partnership"
    },
    {
        id: 4,
        title: "EVENTS",
        url:"/events"
    },
    {
        id: 5,
        title: "RESOURCE CENTER",
        url:"/resources",
        submenu: [
            {
                id: 7,
                title: "About Uganda",
                url: "/uganda_information"
            },
            {
                id: 8,
                title: "Ugandan Schools",
                url: "/schools_system_uganda"
            },
            {
                id: 9,
                title: "Workshops",
                url: "/workshops"
            },
        ],
    },
    {
        id: 10,
        title: "CONTACT US",
        url:"/contact"
    },
 
];