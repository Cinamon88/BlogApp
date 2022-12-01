import { useSelector, useDispatch } from 'react-redux';
import { getPostById, removePost } from "../../../../redux/postsRedux";
import { Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import DeletePostModal from '../../../features/DeletePostModal';
import { dateToStr } from '../../../../utils/dateToStr';

 
const SinglePost = () => {
    const { id } = useParams();
    const postData = useSelector((state) => getPostById(state, id));
    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);
    const openModal = () => setModal(true);
    const dispatch = useDispatch();
    const deletePost = (e) => {
        e.preventDefault();
        dispatch(removePost(postData.id));
        setModal(false);
    }

    if (modal) {
        return <DeletePostModal show={modal} closeModal={closeModal} deletePost={deletePost} />;
    }

    if (!postData) {
        return <Navigate to="/" />;
    } else

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
                            <Button variant="outline-danger" onClick={openModal}>
                                Delete
                            </Button>
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
                            <b>Published:</b> {dateToStr(postData.publishedDate)}
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                    </Col>
                </Row>
            </>
        );
    
};

export default SinglePost;