import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import api from "./api/axiosconfig";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";


const PostContent = () => {
  const { postID } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getOnePost = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/posts/" + postID);
      setPost(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOnePost();
  }, []);

  return (
    <Layout>
      {!loading ? (
        <>
          <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
              {/*
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
          */}
            </div>
            <svg
              className="absolute top-0 left-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <circle cx="20" cy="20" r="15" fill="rgba(0, 0, 0, 0.05)" />
              <circle cx="60" cy="30" r="25" fill="rgba(0, 0, 0, 0.05)" />
              <circle cx="80" cy="70" r="19" fill="rgba(0, 0, 0, 0.05)" />
              <circle cx="40" cy="80" r="10" fill="rgba(0, 0, 0, 0.05)" />
            </svg>

            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                    Te introducimos a
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {post.title}
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8 text-center font-bold">
                  {post.description}
                </p>
              </div>

              <p className="mt-20 mb-6 text-gray-500 mx-auto max-w-2xl text-xl text-center leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>

          <CommentSection post={post}/>
        </>
      ) : (
        <>
          <div className="text-center font-bold">haciendo magia...</div>
        </>
      )}
    </Layout>
  );
};

export default PostContent;
