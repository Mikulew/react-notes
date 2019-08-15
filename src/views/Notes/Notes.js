import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(note => (
      <Card
        cardType="notes"
        id={note.id}
        title={note.title}
        content={note.content}
        created={note.created}
        key={note.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
