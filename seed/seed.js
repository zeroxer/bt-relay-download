var WebTorrent = require('webtorrent')

var client = new WebTorrent()

const opts = {
    announce: 'http://localhost:8000/announce'
}

client.seed('./test.exe', opts, function (torrent) {
    console.log('Client is seeding:', torrent.infoHash)
})
