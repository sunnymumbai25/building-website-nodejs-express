const express = require('express');
const path = require('path');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speaker.json');

const routes = require('./routes');

const app = express();

const port = 3000;

console.log(`restarting`);

//include ejs template engien library
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//apply midddle ware
app.use(express.static(path.join(__dirname, './static')));

// app.get('/', (request, response) => {
//   //  response.send('hello express :)');
//   //response.sendFile(path.join(__dirname, './static/index.html'));
//   response.render('pages/index', { pageTitle: 'Welcome' });
// });

// app.get('/speakers', (request, response) => {
//   //  response.send('hello express :)');
//   response.sendFile(path.join(__dirname, './static/speakers.html'));
// });

//app.use('/', routes());
app.listen(port, () => {
  console.log(`Express server listing on port ${port}!`);
});
