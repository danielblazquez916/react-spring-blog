import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import LoadingCard from "./LoadingCard";
import Pagination from "./Pagination";
import api from "./api/axiosconfig";

const BlogList = ({page, setPage}) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/posts?page=" + page);
      console.log(response.data.content);
      console.log(response.data.totalPages);

      setPosts(response.data.content);
      setTotalPages(response.data.totalPages);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <div>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-5 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {loading ? (
              <>
              {/* lo que se renderiza mientras se realiza la solicitud
              (la gracia es que son 6 como maximo por pagina) */}
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              <>
                {posts.map((post) => {
                  return (
                    <div key={post.postID}>
                      <BlogCard post={post} lastPage={page} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>

      <>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} getPosts={getPosts}/>
      </>
    </div>
  );
};

export default BlogList;
