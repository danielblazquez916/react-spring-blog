/*
import api from "./axiosconfig";

// efectos secundarios: /////////////////
const getAllPosts = (page) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  var totalPages = 0;

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/posts?page=" + page);
      console.log(response.data.content);
      console.log(response.data.totalPages);

      setPosts(response.data.content);
      totalPages = response.data.totalPages;

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  return [posts, loading, totalPages];
}

export default getAllPosts;
///////////////////////////////////////
*/

