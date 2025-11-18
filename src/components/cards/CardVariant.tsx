type Props = {
    children: React.ReactNode;
    variant: "centered" | "flexed";
}

const classes = {
    centered: "text-center",
    flexed: "flex items-center gap-4",
}

export const CardVariant = (props: Props) => {
    const { children, variant } = props;
    const style = classes[variant];

    return <div className={style}>{children}</div>
}