import express  from "express"

const app = express()

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            title : 'joke 1',
            description : 'this is joke 1'
        },
        {
            id : 2,
            title : 'joke 2',
            description : 'this is joke 2'
        },
        {
            id : 3,
            title : 'joke 3',
            description : 'this is joke 3'
        },
        {
            id : 4,
            title : 'joke 4',
            description : 'this is joke 4'
        },
        {
            id : 5,
            title : 'joke 5',
            description : 'this is joke 5'
        },
    ]
    res.send(jokes)
})