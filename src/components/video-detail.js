import React, { Component } from 'react';

// class VideoDetail extends Component {
//     render() {
//         return (
//             <div>1</div>
//         );
//     }
// }
const VideoDetail = ({video}) => {
    // {video : {snippet : {title, description}, id}}
    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0" className="embed-responsive-item" />
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;
