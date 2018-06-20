import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelected(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imgUrl} alt="" className="media-object"/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
