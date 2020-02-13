import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BodyPage from '../../components/bodyPage';
import * as BodyPageActions from '../actions/bodyPage';

const mapStateToProps = state => ({
    body_page: state.bodyPage
});

const mapDispatchProps = dispatch => bindActionCreators(BodyPageActions, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(BodyPage);