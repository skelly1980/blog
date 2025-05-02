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