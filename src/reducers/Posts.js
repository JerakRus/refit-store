import { handleActions } from 'redux-actions';
import * as actions from '../actions/posts';
import _ from 'lodash';


const postsHomePage = handleActions({
    [actions.setPostsSuccess](state, { payload: { posts } }) {
        return [...state, ..._.reverse(posts)];
    },
}, []);

export default postsHomePage;