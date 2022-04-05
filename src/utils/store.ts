const cards = [
    {
        id: 'card-1',
        content: 'Learning how to cook',
    },
    {
        id: 'card-2',
        content: 'Making sandwich',
    },
    {
        id: 'card-3',
        content: 'Taking the trash out',
    },
];

const data = {
  lists: {
    'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Progressing',
      cards: [
          {
              id: 'card-4',
              content: 'Cloning Trello',
          },
          {
              id: 'card-5',
              content: 'Upload video to Youtube',
          },
      ]
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;