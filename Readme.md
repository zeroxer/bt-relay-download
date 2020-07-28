# P2P 下载加速

## BT Tracker

```shell
npm install bittorrent-tracker -g
# 启动 tracker server
bittorrent-tracker
# HTTP tracker: http://localhost:8000/announce
# UDP tracker: udp://0.0.0.0:8000
# UDP6 tracker: udp://localhost:8000
# WebSocket tracker: ws://localhost:8000
# Tracker stats: http://localhost:8000/stats
```

## 分享 Seed
```shell
npm i
cd seed
node seed.js
```

## 下载 Download
```shell
cd download
node download.js
```