import { connect } from 'react-redux';
import Post from '../components/body/Post';


const mapStateToProps = (state, {post}) => {
    const props = {
        date: post.date || '01.05.18' ,
        siteColor: state.siteColor,
    };
    return props;
};


export default connect(
    mapStateToProps,
)(Post);
