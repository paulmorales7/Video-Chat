const socket = io('/')
let videoStream
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
videoStream = stream;
addVideoStream(myVideo, stream)
})

socket.emit('join-room', ROOM_ID);

socket.on('user-connected', () => {
    connectToNewUser();
})

const connectToNewUser = () => {
    
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}