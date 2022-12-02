import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import 'react-datepicker/dist/react-datepicker.css';

 
const PostForm = ({ action, actionText, ...props }) => {
  const [ title, setTitle ] = useState(props.title || '');
  const [ author, setAuthor ] = useState(props.author || '');
  const [ publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [ shortDescription, setShortDescription ] = useState(props.shortDescription || '');
  const [ content, setContent ] = useState(props.content || '');
  const [ contentError, setContentError ] = useState(false);
  const [ dateError, setDateError ] = useState(false);
  
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
   }
 };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <h1>{actionText}</h1>
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
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min. 3)</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  {...register("author", { required: true, minLength: 3 })}
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                  type="text" placeholder="Enter author"
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">Name of the author is too short (min. 3)</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="published">
                <Form.Label>Published</Form.Label>
                <DatePicker
                  selected={publishedDate ? new Date(publishedDate) : new Date()}
                  onChange={(date) => setPublishedDate(date)}
                />
                {dateError && <small className="d-block form-text text-danger mt-2">Please choose date.</small>}
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
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min. 20) </small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Main Content</Form.Label>
              <ReactQuill             
                theme="snow"   
                value={content} 
                onChange={setContent}
                placeholder="Type here" 
              />
              {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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