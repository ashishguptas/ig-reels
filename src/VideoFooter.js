import React from 'react';
import './VideoFooter.css';
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <Avatar src={avatarSrc} />
                <h3><span className="channel_name">{channel}</span> •<Button>Follow</Button></h3>
            </div>
            <div className="videoFooter_ticker">
                <MusicNoteIcon className="videoFooter_icon" />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <h1>{song}</h1>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter_action">
                <div className="videoFooter_actionLeft">
                    <FavoriteIcon fontSize="small" />
                    <ModeCommentIcon fontSize="small" />
                    <SendIcon fontSize="small" />
                    <MoreHorizIcon fontSize="small" />
                </div>
                <div className="videoFooter_actionRight">
                    <div className="videoFooter_stat">
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter_stat">
                        <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
