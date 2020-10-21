const Arena = require("are.na");
const arena = new Arena();

arena
  .channel("masjid")
  .get()
  .then(chan => {
    chan.contents.map(item => {
      console.log("Image: " + item.image.original.url);
      console.log("Name: " + item.title);
      console.log("Location: " + item.description);
    });
  })
  .catch(err => console.log(err));
