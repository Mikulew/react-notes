const initialState = {
  notes: [
    {
      id: 1,
      title: 'I want to be a React developer! #1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
      created: '2 days',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'React router',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
      created: '3 days',
      twitterName: 'react_devv',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React.js developer #1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
      articleUrl: 'https://polskifrontend.pl',
      created: '1 day',
    },
  ],
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
