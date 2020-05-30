import { connect } from 'react-redux';
import { fetchItems } from 'actions';

import { EnumPageTypes } from 'enums/EnumPageTypes';
import Notes from './Notes';

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems(EnumPageTypes.NOTES)),
});

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);

export default NotesContainer;
