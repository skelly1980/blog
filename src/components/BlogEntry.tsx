import { Blog } from "../types/blog";

type Props = {
  blogEntry: Blog;
}

export const BlogEntry = (props: Props) => {
  const {blogEntry} = props;

  return (
    <div>
      <div>{blogEntry.title}</div>
      <img width={450} src={blogEntry.img} alt={blogEntry.title} />
      <div>{blogEntry.content}</div>
    </div>
  );
};
