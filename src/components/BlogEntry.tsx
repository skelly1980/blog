
export const BlogEntry = (props) => {
    const {blogEntry} = props;
  return (
    <div>
      <div>{blogEntry.title}</div>
      <img width={450} src={blogEntry.img} alt={blogEntry.title} />
      <div>{blogEntry.content}</div>
    </div>
  );
};
