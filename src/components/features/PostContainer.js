import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import PostCard from "./PostCard";

const PostContainer = () => {
  const allPosts = useSelector(getAllPosts);
    
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {allPosts.map((post, index) => (
          <div key={index}>
            <PostCard
              key={index}
              id={post.id}
              title={post.title}
              author={post.author}
              date={post.publishedDate}
              category={post.category}
              description={post.shortDescription}
              />
          </div>
        ))}
      </div>
    </>
  );
};

export default PostContainer;