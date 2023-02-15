import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from '../actions/shoppingCart';
import PhoneCard from '../components/PhoneCard';


const mapStateToProps = ({shoppingCart}, {id}) => ({
    addedCount: shoppingCart.items.reduce((count, phone) => count + (phone.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(shoppingCartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneCard);
