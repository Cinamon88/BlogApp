
//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, id) => 
  posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName("EDIT_POST");

// action creators
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const removePost = (id) => ({ type: REMOVE_POST, id});
export const editPost = (payload) => ({ type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
        return [...statePart, { ...action.payload }];
    case REMOVE_POST:
        return statePart.filter((post) => post.id !== action.id);
        case EDIT_POST:
          return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;