// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {

    const res = await axios.get('https://api.are.na/v2/channels/masjid/contents')
    let blocks = res.data.contents

    const contentType = store.addCollection({
      typeName: 'Blocks',
    })

    for (const block of blocks) {
      contentType.addNode({
        image: block.image.original.url,
        name: block.title,
        location: block.description
      })
    }
  })
}
