import AddPostForm from "../../../features/AddPostForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/postsRedux";

const PostAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/');
    };
    
    return (
        <AddPostForm action={handleSubmit} actionText="Add post" />
    );
};

export default PostAdd;