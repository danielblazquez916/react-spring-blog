import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {

  const getDate = () => {
    const date = new Date(post._id.date).toLocaleDateString("es-ES", {year:"numeric", month:"numeric", day:"numeric"});
    return date;
  }

  const getTime = () => {
    const time = new Date(post._id.date).toLocaleTimeString("es-ES", {hour:"numeric", minute:"numeric"});
    return time;
  }

  return (
    <div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover bg-indigo-100" src="#" alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <div className="block mt-2">
              <div className="relative group">
                <Link to={"/blog/" + post.postID} className="text-xl font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </Link>

                <div className="absolute top-full px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.title}
                </div>
                </div>

                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </div>
              
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
            <span className="sr-only">nombre autor</span>
            <img className="h-10 w-10 rounded-full bg-indigo-100" src="#" alt="" />
            </div>

            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <div className="hover:underline">
                  {post.author}
                </div>
              </p>

              <div className="flex space-x-1 text-sm text-gray-500">
                <time>{getDate()}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{getTime()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
