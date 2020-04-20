import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { EnumPageTypes } from 'enums/EnumPageTypes';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;

    fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <GridTemplate pageContext={EnumPageTypes.NOTES}>
        {notes.map(({ _id: id, title, content }) => (
          <Card
            pageContext={EnumPageTypes.NOTES}
            id={id}
            title={title}
            content={content}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems(EnumPageTypes.NOTES)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
