const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    return response.send(`Speaker list`);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`detail page of ${request.params.shortname}`);
  });

  return router;
};
