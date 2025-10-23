import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import api from "./api/axiosconfig";

const CommentSection = ({ post }) => {
  const [contenido, setContenido] = useState("");
  const [autor, setAutor] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const postComment = async () => {
    try {
      const payload = {
        content: contenido,
        author: autor,
        postID: post.postID,
      };

      const response = await api.post("/api/comments/createComment", payload);
      console.log(response.data);

      setComentarios([response.data, ...post.commentIds]);
    } catch (err) {
      console.log(err);
    } finally {
      // Limpiar los campos del formulario
      setContenido("");
      setAutor("");
    }
  };

  useEffect(() => {
    setComentarios(post.commentIds);
  }, [post.commentIds]);

  return (
    <>
      <h2 className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase ">
        Comentarios ({comentarios.length})
      </h2>

      <div className="bg-white p-6 flex items-center justify-center w-screen lg:px-40">
        <div className="flex flex-col space-y-4 min-w-full">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Añadir comentario:</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Autor
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={autor}
                placeholder="Coloca tu nombre"
                onChange={(e) => {
                  setAutor(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="comment"
              >
                Comentario
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-28 min-h-28"
                id="comment"
                value={contenido}
                rows="3"
                onChange={(e) => {
                  setContenido(e.target.value);
                }}
                placeholder="Coloca tu comentario"
              ></textarea>
            </div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                postComment();
              }}
            >
              Comentar
            </button>
          </div>

          {/* TODOS LOS COMENTARIOS */}
          {comentarios.map((item, index) => {
            return (
              <Comment
                content={item.content}
                author={item.author}
                date={item._id.date}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
