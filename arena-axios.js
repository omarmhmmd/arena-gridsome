const axios = require('axios');

axios.get('https://api.are.na/v2/channels/masjid/contents/')
  .then(function (response) {

    var item = response.data.contents;
    for (var i = 0; i < item.length; i++) {
      console.log("Image: " + item[i].image.original.url);
      console.log("Name: " + item[i].title);
      console.log("Location: " + item[i].description);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
