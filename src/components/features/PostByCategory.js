import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../redux/postsRedux';
import PostCard from './PostCard';


const PostByCategory = () => {
  const { postCategory } = useParams();
  const posts = useSelector(getPostByCategory);

  if (posts.length === 0)
    return (
      <div>
        <h1>Category: {postCategory}</h1>
        <p>No posts in this category</p>
      </div>
    );

  return (
    <div>
      <Row xs={1} md={4} className="g-2">
        <Col col={12}>
          <h1>Category: {postCategory}</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-3 justify-content-md-center">
      {posts.map((post, index) => (
          <div key={index}>
            <PostCard
              key={index}
              id={post.id}
              />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default PostByCategory;