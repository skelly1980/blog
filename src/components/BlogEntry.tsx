
export const BlogEntry = (props) => {
    const {blogEntry} = props;
  return (
    <div>
      <div>{blogEntry.title}</div>
      <div>{blogEntry.content}</div>
    </div>
  );
};
