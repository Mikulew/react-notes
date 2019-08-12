import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'I want to be a React developer! #1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
    created: '2 days',
  },
  {
    id: 2,
    title: 'I want to be a React developer! #2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
    created: '2 days',
  },
  {
    id: 3,
    title: 'I want to be a React developer! #3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
    created: '2 days',
  },
  {
    id: 4,
    title: 'I want to be a React developer! #4',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
    created: '2 days',
  },
  {
    id: 5,
    title: 'I want to be a React developer! #5',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
    created: '2 days',
  },
];

const Notes = () => (
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

export default Notes;
