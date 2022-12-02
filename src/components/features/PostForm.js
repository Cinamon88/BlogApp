import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TextAreaQuill from "./TextAreaQuill";
import { useForm } from "react-hook-form";
import 'react-datepicker/dist/react-datepicker.css';

 
const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  

  const handleSubmit = (e) => {
    action({ title, author, publishedDate, shortDescription, content });
    
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <h1>{actionText}</h1>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={12} md={10}>
                <Form onSubmit={validate(handleSubmit)}>
                    <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        {...register("title", { required: true, minLength: 3 })}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text" placeholder="Enter title"
                      />
                      {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                          {...register("author", { required: true, minLength: 3 })}
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          type="text" placeholder="Enter author"
                        />
                        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="published">
                        <Form.Label>Published</Form.Label>
                        <DatePicker
                        selected={publishedDate ? new Date(publishedDate) : new Date()}
                        onChange={(date) => setPublishedDate(date)}
                        />
                    </Form.Group>
                    </Col>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                        {...register("shortDescription", { required: true, minLength: 20 })}
                        value={shortDescription}
                        onChange={e => setShortDescription(e.target.value)}
                        type="text" placeholder="Short description"
                      />
                      {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required. Min 20 letters. </small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                      <Form.Label>Main Content</Form.Label>
                      <TextAreaQuill>
                        <Form.Control
                            type="text"
                            as="textarea"
                            rows={10}
                            placeholder="Add your post here."
                            required
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            />
                      </TextAreaQuill>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                    {actionText}
                    </Button>
                </Form>
            </Col>
        </Row>
    </>
  );
};

export default PostForm;