import { connect } from 'react-redux';
import { fetchItems } from 'actions';

import { EnumPageTypes } from 'enums/EnumPageTypes';
import Twitters from './Twitters';

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems(EnumPageTypes.TWITTERS)),
});

const TwittersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);

export default TwittersContainer;
