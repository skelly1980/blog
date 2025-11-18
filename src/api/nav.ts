export const getNavMenu = () => {
    return [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Blog",
            href: "/blogs",
            dropdown: [
                {
                    title: "Coding",
                    href: "/coding"
                },
                {
                    title: "Outdoors",
                    href: "/outdoors"
                },
                {
                    title: "Hockey",
                    href: "/hockey"
                },
            ]   
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ]
}