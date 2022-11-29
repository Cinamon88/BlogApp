
//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, id) => 
  posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const removePost = (id) => ({ type: REMOVE_POST, id});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
        return [...statePart, { ...action.payload }];
    case REMOVE_POST:
        return statePart.filter((post) => post.id !== action.id);
    default:
      return statePart;
  };
};

export default postsReducer;