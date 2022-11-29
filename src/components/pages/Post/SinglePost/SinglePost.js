import { useSelector } from 'react-redux';
import { getPostById } from "../../../../redux/postsRedux";
import { Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
 
const SinglePost = () => {
    const { id } = useParams();
    const postData = useSelector((state) => getPostById(state, id));

    return (
        <>
            <Row className="justify-content-center">
                <Col md={8} className="d-flex justify-content-between">
                    <h1>{postData.title}</h1>
                    <div>
                        <Link key={postData.id} to={"/post/edit/" + postData.id}>
                        <Button variant="outline-info" className="m-2">
                            Edit
                        </Button>
                        </Link>
                        <Button variant="outline-danger">Delete</Button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8}>
                    <p>
                        <b>Author: </b>
                        {postData.author}
                    </p>
                    <p>
                        <b>Published:</b> {postData.publishedDate}
                    </p>
                    <p>{postData.content}</p>
                </Col>
            </Row>
        </>
    );
};

export default SinglePost;