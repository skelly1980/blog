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
            href: "/blog",
            dropdown: [
                {
                    title: "Coding",
                    href: "#"
                },
                {
                    title: "Outdoors",
                    href: "#"
                },
                {
                    title: "Hockey",
                    href: "#"
                },
            ]   
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ]
}