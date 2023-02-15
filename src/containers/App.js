import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as phonesActions from '../actions/phones';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortItems = (phones, filter)=>{
    switch (filter){
        case 'price_higher':
            return orderBy(phones, 'price', 'desc');
        case 'price_lower':
            return  orderBy(phones, 'price', 'asc');
        case 'company':
            return orderBy(phones, 'author', 'asc');
        default:
            return phones;
    }
};

const filterPhones = (phones, searchQuery) =>
    phones.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
            || o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0,
    );

const searchPhones = (phones, filter, searchQuery) => {
    return sortItems(filterPhones(phones, searchQuery),filter);
}

const mapStateToProps = ({phones, filter}) => ({
    phones: phones.items && searchPhones(phones.items, filter.filter, filter.searchQuery),
    isReady: phones.isReady
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(phonesActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
