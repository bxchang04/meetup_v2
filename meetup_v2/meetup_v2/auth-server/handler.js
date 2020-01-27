'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=3dssascu6mej4fuptij43jdbh4'
    + '&client_secret=v1A/UF3x+u2vzYrj5AsIS5frj+Z9gmdPCgd6qSsy'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://bxchang04.github.io/meetup_v2'
    + '&code=04c4c6dd3e1abd3e6677e67058bdfb45';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
