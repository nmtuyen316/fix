import {
    Input,
    Button
} from "@chakra-ui/react";
import { Peer } from "peerjs";
import { useEffect, useRef, useState } from "react";

const CallOnline = () => {
    const videoRemote = useRef(null);
    const videoCurrentUser = useRef(null);
    const peerInstance = useRef(null);
    const [peerId, setPeerId] = useState(null);
    const [remotePeerValue, setRemotePeerValue] = useState();
    useEffect(() => {
        const peer = new Peer();
        peer.on("open", function (id) {
            setPeerId(id);
        });
        peer.on("call", function (call) {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            getUserMedia(
                { video: true, audio: true },
                function (stream) {
                    videoCurrentUser.current.srcObject = stream;
                    videoCurrentUser.current.play();
                    call.answer(stream);
                    call.on('stream', function (mediaStream) {
                        videoRemote.current.srcObject = mediaStream;
                        videoRemote.current.play();
                    })
                }
                );
                const conn = peer.connect(remotePeerValue);
                peer.on('connection', function (conn) { });
                conn.on('open', function () {
                    // Receive messages
                    conn.on('data', function (data) {
                        console.log('Received', data);
                    });
        
                    // Send messages
                    conn.send('Hello!');
                });
        });
        peerInstance.current = peer;
    }, [remotePeerValue]);
    const call = (remotePeerId) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        getUserMedia(
            { videoRemote: true, audio: true },
            function (stream) {
                videoCurrentUser.current.srcObject = stream;
                videoCurrentUser.current.play();
                var call = peerInstance.current.call(remotePeerId, stream);
                call.on("stream", function (remoteStream) {
                    videoRemote.current.srcObject = remoteStream;
                    videoRemote.current.play();
                });
            },
            function (err) {
                console.log("Failed to get local stream", err);
            }
        );
    };
    return (
        <>
            <h1>{peerId}</h1>
            <Input type={'text'} value={remotePeerValue} onChange={e => setRemotePeerValue(e.target.value)} />
            <Button onClick={call}>Call</Button>
            <video ref={videoCurrentUser} autoPlay></video>
            <video ref={videoRemote} autoPlay></video>
        </>
    );
};
export default CallOnline;
