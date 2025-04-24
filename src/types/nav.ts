export type NavMenuItem = {
    title: string;
    href: string;
    dropdown?: NavMenuItem[];
}

export type NavMenu = NavMenuItem[];