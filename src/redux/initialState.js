const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'Adam Mickiewicz',
            category: 'News'
        },
        {
            id: '3',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'Cezary Pazura',
            category: 'Movies'
        },
    ],

    categories: [
        'Sport',
        'News',
        'Movies',
    ],
};

export default initialState;