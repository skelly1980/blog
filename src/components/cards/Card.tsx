import { ReactNode } from "react";

type Props = {
  flex?: string;
  url?: string;
  icon?: ReactNode;
  alt?: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
  classes?: string;
  titleStyles?: string;
  padding?: string;
};

const Card = ({ flex, url, icon, alt, title, description, width, height, classes, titleStyles, padding }: Props) => {
  return (
    <div className={flex}>
      {icon && <div className="mb-4">{icon}</div>}
      {url && <img
        className={classes}
        src={url}
        alt={alt}
        width={width}
        height={height}
      />}
      <div className={padding}>
        <p className={titleStyles}>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
