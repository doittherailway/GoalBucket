import { connect } from 'react-redux';
import Aside from './aside';

const mapStateToProps = state => ({
    aside: state.ui.aside
});

export default connect(mapStateToProps)(Aside);