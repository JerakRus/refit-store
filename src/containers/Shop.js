import { connect } from 'react-redux';
import Shop from '../components/body/Shop';


const search = (items, searchQuery) => {
    return items.filter(i =>
        i.model.toLowerCase().indexOf(searchQuery) >= 0 ||
        i.firm.toLowerCase().indexOf(searchQuery) >= 0 ||
        i.title.toLowerCase().indexOf(searchQuery) >= 0 ||
        i.description.toLowerCase().indexOf(searchQuery) >= 0);
};

const sortParts = (items, filterParts) => {
    if (filterParts === 'all') {
        return items;
    }
    return items.filter(item => {
        const md = `${item.firm} ${item.model}`;
        return md === filterParts;
    });
};

const sortSmartphones = (items, filterPhones) => {
    if (filterPhones === 'all') {
        return items;
    }
    return items.filter(item => {
        const md = `${item.firm}`;
        return md === filterPhones;
    });
};

const sortNumbers = (items, filterNumbers) => {
    if (filterNumbers === 'all') {
        return items;
    }
    return [];
}

const mapStateToProps = state => {
    const { filter } = state;
    const props = {
        parts: search(sortParts(state.parts, filter.parts), filter.searchQuery),
        smartphones: search(sortSmartphones(state.smartphones, filter.smartphones), filter.searchQuery),
        numbers: search(sortNumbers(state.numbers, filter.numbers), filter.searchQuery),
        siteColor: state.siteColor,
    };
    return props;
};

export default connect(
    mapStateToProps,
)(Shop);
