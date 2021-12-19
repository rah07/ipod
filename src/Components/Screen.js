import React from 'react';
import ImageCoverflow from './ImageCoverflow';
import MusicAlbums from './Music';
import MusicPlayer from './MusicPlayer';

const screen = (props) => {
    const { displayHome, displayCoverflow, displayMusic, displayGames, displaySettings, displayAbout } = props.currentState.visibleComponent;
    let isMusicPlayerActive = props.currentState.isMusicPlayerActive;
    let renderComponent = null;
    let title = props.currentState.pageTitle;
    if (displayHome) {
        renderComponent =
            <div className="menu-options">
                <div id="coverflow" className="option selected">Coverflow </div>
                <div id="music" className="option">Music </div>
                <div id="games" className="option">Games </div>
                <div id="settings" className="option">Settings </div>
                <div id="about" className="option">About </div>
            </div>
    }
    else if (displayCoverflow) {
        renderComponent =
            <ImageCoverflow albums={props.currentState.albums} active={props.currentState.activeCoverflow}></ImageCoverflow>
    }
    else if (displayMusic) {
        if (isMusicPlayerActive) {
            console.log("Render Music Player");
            renderComponent = <MusicPlayer
                song={props.currentState.songs[props.currentState.activeSongId]}
                songId={props.currentState.activeSongId}
                isMusicPlaying={props.currentState.isMusicPlaying} />
        }
        else {
            renderComponent = <MusicAlbums
                songs={props.currentState.songs}
                isMusicPlayerActive={isMusicPlayerActive}
                activeSongId={props.currentState.activeSongId} />
        }
    }
    else if (displayGames) {
        renderComponent = <div className="game-wrapper">
            <img src="tetris.gif" id="game" alt="tetris game" />
        </div>
    }
    else if (displaySettings) {
        renderComponent = <div className="game-wrapper">
            <img src="settings.gif" id="settings" alt="settings" />
        </div>
    }
    else if (displayAbout) {
        renderComponent = <div className="menu-options">
            <div className="abt-wrapper">
                <img src="ipod_MediaPlayer.svg" id="abt_logo" alt="about" />
                <span className="abt-text"> Made by Aakash Kandhari</span>
            </div>
            <div id="coverflow" className="option selected">Linkedin </div>
        </div>
    }
    return (
        <div className="screen">
            <div className="title-bar">
                <div className="play-icon"> {props.currentState.isMusicPlaying ? <i className="far fa-pause-circle fa-1x"></i> : <i className="far fa-play-circle fa-1x"></i>}</div>
                <div className="title">{title}</div>
                <img id="battery" className="battery small" src="battery.svg" alt="battery" />
            </div>
            { renderComponent}
        </div>
    )

}

export default screen;