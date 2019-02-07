import { connect } from 'react-redux';
import Post from '../components/body/Post';

const formatDate = date => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
};
const date = new Date();

const mapStateToProps = (state, {post}) => {
    const props = {
        date: formatDate(post.date || date),
        siteColor: state.siteColor,
    };
    return props;
};


export default connect(
    mapStateToProps,
)(Post);
