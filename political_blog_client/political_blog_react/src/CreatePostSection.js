import React, { useState } from "react";

const CreatePostSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            if(open == false){
              setOpen(true);
            }else{
              setOpen(false);
            }
            
          }}
          className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-16 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
        >
          Create my own post!
        </button>
      </div>

      {open ? (
        <>
         {/* create post section */}
          <div>
            <div class="m-5" />
            <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-xl">
            <input
                className="autor bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg"
                spellcheck="false"
                placeholder="Autor"
                type="text"
              />
              <input
                className="titulo bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg"
                spellcheck="false"
                placeholder="Titulo"
                type="text"
              />
              <input
                className="descripcion bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg"
                spellcheck="false"
                placeholder="Descripción"
                type="text"
              />
              

              <textarea
                class="contenido bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none rounded-lg min-h-14"
                spellcheck="false"
                placeholder="¿Qué quieres compartir al mundo?"
                
              ></textarea>

              {/* separator */}
              <div class=" m-2" />
              {/* buttons */}
              <div class="buttons flex">
                <button
                onClick={() => {setOpen(false);}}
                class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto rounded-lg">
                  Cancel
                </button>
                <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 rounded-lg">
                  Post
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* seems to be nothing here... */}
        </>
      )}
    </>
  );
};

export default CreatePostSection;
