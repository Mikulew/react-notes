import { connect } from 'react-redux';
import { authenticate } from 'actions';

import LoginPage from './LoginPage';

const mapStateToProps = ({ userID }) => ({ userID });

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});
const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

export default LoginPageContainer;
