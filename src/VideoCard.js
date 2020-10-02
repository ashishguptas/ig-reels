import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function VideoCard({ channel, avatarSrc, song, likes, shares, url }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
 
    const onVideoPress = () => {
        if (isVideoPlaying) {
            // stop
            videoRef.current.pause()
            setIsVideoPlaying(false)
        } else {
            // play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className="videocard">
        <VideoHeader />
            <video
                onClick={onVideoPress}
                ref={videoRef}
                className="videocard_player"
                src={url}
                loop
                type="video/mp4"
                alt="Reels"
            >
            </video>
            <VideoFooter
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                likes={likes}
                shares={shares}
            />
        </div>
    )
}

export default VideoCard
