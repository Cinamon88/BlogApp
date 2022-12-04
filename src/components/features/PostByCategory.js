import { Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../redux/postsRedux';
import { dateToStr } from '../../utils/dateToStr';
import { Link } from 'react-router-dom';

const PostByCategory = () => {
  const { postCategory } = useParams();
  const posts = useSelector((state) => getPostByCategory(state, postCategory));

  if (posts.length === 0)
    return (
      <>
        <h1>Category: {postCategory}</h1>
        <h3>No posts in this category</h3>
      </>
    );
  return (
    <>
      <h1>Category: {postCategory}</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={6} lg={4}>
            <Card key={post.id} className='mt-4'>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {post.author} <br />
                  <strong>Published:</strong> {dateToStr(post.publishedDate)}
                  <br />
                  <strong>Category:</strong> {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant='primary' as={Link} to={'/post/' + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PostByCategory;