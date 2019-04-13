import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/dynamo-table')

// app.delete('/dynamo-table/:tableName')

// app.get('/dynamo-table/:tableName/records')

// app.post('/dynamo-table/:tableName/records')

// app.put('/dynamo-table/:tableName/records/:record-id')

// app.delete('/dynamo-table/:tableName/records/:record-id')

if (!module.parent) {
    app.listen(8000, () => {
        console.log('App is listening on port 8000!');
    });
}

module.exports = app