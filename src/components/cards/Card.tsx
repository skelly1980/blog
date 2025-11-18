type Props = {
  flex?: string;
  url: string;
  alt: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
  classes?: string;
  titleStyles: string;
  padding?: string;
};

const Card = ({ flex, url, alt, title, description, width, height, classes, titleStyles, padding }: Props) => {
  return (
    <div className={flex}>
      <img
        className={classes}
        src={url}
        alt={alt}
        width={width}
        height={height}
      />
      <div className={padding}>
        <p className={titleStyles}>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
