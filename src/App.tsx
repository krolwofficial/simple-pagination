import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import PaginationButtons from "./components/PaginationButtons";
import { postType } from "./interfaces";

const App: React.FC = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const lastPage = posts.length / postsPerPage;

  // Change Page
  const paginateNumber = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFirst = () => {
    setCurrentPage(1);
  };
  const paginateNext = () =>
    currentPage !== 10 && setCurrentPage(currentPage + 1);
  const paginatePrev = () =>
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  const paginateLast = () => setCurrentPage(lastPage);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setPosts(json));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} />
      <PaginationButtons
        paginateFirst={paginateFirst}
        paginatePrev={paginatePrev}
        paginateNext={paginateNext}
        paginateLast={paginateLast}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginateNumber}
        loading={loading}
      />
    </div>
  );
};

export default App;
