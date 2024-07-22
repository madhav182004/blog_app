import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch posts');
      })
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
}
