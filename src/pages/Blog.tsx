import { BlogEntry } from "../components/BlogEntry"

const blogs = [
  {
    id: 1,
    title: "blog 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
  },
  {
    id: 2,
    title: "blog 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
  }
]

export const Blog = () => {
  return (
    <>
    <div>Blog</div>
    {blogs.map((blogEntry) => {
      return (
        <BlogEntry blogEntry={blogEntry} />
      )
    })}
    </>
  )
}