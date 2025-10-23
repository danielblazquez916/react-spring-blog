import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Error404 from "./Error404";
import PostContent from "./PostContent";
import { useState } from "react";

function App() {

  const [page, setPage] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog page={page} setPage={setPage}/>}/>
          <Route path="/blog/:postID" element={<PostContent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
