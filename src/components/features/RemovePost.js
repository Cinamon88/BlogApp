import { Button, Modal } from "react-bootstrap";

const removePost = (props) => {
    return (
        <Modal 
            show={props.show}
            onHide={props.closeModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>Close</Button>
                <Button variant="danger" onClick={props.deletePost}>Remove</Button>
            </Modal.Footer>
            </Modal>
    );
};

export default removePost;