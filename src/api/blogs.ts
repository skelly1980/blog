import coding from "../../public/blog-coding.png";
import flyFishing from "../../public/blog-flyfishing.png";
import hockey from "../../public/blog-hockey.png";

export interface Blog {
  id: number;
  title: string;
  img: string;
  content: string;
}

export const getBlogs = (): Blog[] => {
  return [
    {
      id: 1,
      title: "blog 1",
      img: coding,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
    },
    {
      id: 2,
      title: "blog 2",
      img: flyFishing,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
    },
    {
      id: 3,
      title: "blog 3",
      img: hockey,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit similique repellendus rerum est quam quasi in temporibus pariatur id?",
    },
  ];
};