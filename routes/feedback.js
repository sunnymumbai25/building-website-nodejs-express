const express = require('express');

const router = express.Router();

module.exports = (parmas) => {
  const { feedbackService } = parmas;

  router.get('/', (request, response) => {
    return response.send(`Feedback Page`);
  });

  router.post('/:shortname', (request, response) => {
    return response.send('feedback form posted');
  });

  return router;
};
