import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post Page</h2>
      <p>Now viewing blog post with ID: {postId}</p>
    </div>
  );
}
