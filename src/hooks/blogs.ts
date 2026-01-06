import { createBlog, getBlogs, updateBlog, getBlogsById } from "../api/blogs";
import { Blog, BlogContent } from "../types/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBlog as apiDeleteBlog } from "../api/blogs";

export const useGetBlogs = () => {
  return useQuery({
    queryFn: async () => await getBlogs(),
    queryKey: ["blogs"],
    enabled: true,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

type CreateBlogObject = {
  blog: BlogContent;
  imageFile?: File | null;
}

type UpdateBlogObject = {
  blog: Blog;
  imageFile?: File | null;
}


export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (createBlogObject: CreateBlogObject) => {
      return await createBlog(createBlogObject.blog, createBlogObject.imageFile)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    }
  })
}

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedBlogObject: UpdateBlogObject) => {
      return await updateBlog(updatedBlogObject.blog, updatedBlogObject.imageFile)
    },
     onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    }
  })
}

export const useRemoveBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await apiDeleteBlog(id);
    },
     onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    }
  })
}

// export const useBlogsStore = () => {

//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   //Calling backend to get blogs
//   const getBlogsData = async () => {
//     const blogs = await getBlogs();
//     setBlogs(blogs);
//   };

//   useEffect(() => {
//     getBlogsData();
//   }, []);

//   const create = async (blog: BlogContent, imageFile?: File | null) => {
//     const newBlog = await createBlog(blog, imageFile);
//     setBlogs((prev) => [...prev, newBlog]);
//     return newBlog;
//   };

//   const update = async (
//     blog: Blog,
//     imageFile?: File | null
//   ) => {
//     const updatedBlog = await updateBlog(blog, imageFile);
//     setBlogs((prev) => prev.map((b) => (b.id === blog.id ? updatedBlog:b)));
//     return updatedBlog
//   }

//   const removeBlog = async (id: string) => {
//     await apiDeleteBlog(id);
//   };

//   return {
//     blogs,
//     removeBlog,
//     createBlog: create,
//     updateBlog: update,
//   };
// };

export const useGetBlogById = (id: string) => {
  return useQuery({
    queryFn: async () => await getBlogsById(id),
    queryKey: ['blog', id],
    enabled: !!id,
    retry: false,
  });
};
