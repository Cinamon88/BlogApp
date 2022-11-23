
//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');

// action creators
export const addPost = (payload) => ({ type: 'ADD_POST', payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
        return [...statePart, { ...action.payload }];
    default:
      return statePart;
  };
};

export default postsReducer;