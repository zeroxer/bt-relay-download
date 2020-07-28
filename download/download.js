var WebTorrent = require('webtorrent')
var client = new WebTorrent()

const opts = {
    announce: 'http://localhost:8000/announce',
    path: './'
}

const torrent = client.add('830675264659054f6511efeda37c596191a52b5e', opts, function (torrent) {
    console.log('Download: ', torrent.infoHash)
    console.log('Save to: ', torrent.files[0].name)
})

torrent.on('done', () => {
    client.destroy()
})
