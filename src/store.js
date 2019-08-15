import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";
import auth from "./reducers/auth";
import { reducer as formReducer } from "redux-form";

const blogReducer = (state={blog: []}, action) => {
  switch(action.type) {
    case 'BLOG_LOADED':
      return {
        ...state,
        blogs: action.data.blogs,
      };
    case 'SUBMIT_BLOG':
      return {
        ...state,
        blogs: ([action.data.blog]).concat(state.blogs),
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.id),
      };
    case 'SET_EDIT':
      return {
        ...state,
        blogToEdit: action.blog,
      };
    case 'EDIT_BLOG':
      return {
        ...state,
        blogs: state.blogs.map((blog) => {
          if(blog._id === action.data.blog._id) {
            return {
              ...action.data.blog,
            }
          }
          return blog;
        }),
        blogToEdit: undefined,
      }
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth,
  blogs: blogReducer,
  form: formReducer
});

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem("token") } },
  compose (applyMiddleware(reduxThunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
