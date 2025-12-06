
type Props = {
  small?: string;
  title: string;
  description: string;
};

const Banner = ({ small, title, description }: Props) => {
  return (
    <>
      <small>{small}</small>
      <h2 className="uppercase">{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Banner;
