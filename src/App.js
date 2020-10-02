import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {

  const [reels, setReels] = useState([]);

  useEffect(() => {

    db.collection('ig-reels').onSnapshot(snapshot => {
        setReels(snapshot.docs.map(doc => doc.data()))
    });

  }, [])

  return (
    <div className="app">
      <div className="app_top">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" className="app_logo" alt="logo" />
      </div>
      <div className="app_videos">
      {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
        <VideoCard
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
            />
      ))}
      </div>
    </div>
  );
}

export default App;

 



