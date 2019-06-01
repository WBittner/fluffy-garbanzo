import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(
    express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }),
);

console.log(path.join(__dirname, 'public'));

app.get('/hello', (req, res) => res.send('world'));

app.listen(app.get('port'), () => {
    console.log(`We live on ${app.get('port')}!`);
});
