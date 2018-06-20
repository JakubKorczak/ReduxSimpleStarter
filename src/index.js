import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const youtubeAPIKey = 'AIzaSyBD56bTOsuKRm5TmUTjME5LIIjWbYfMQCE';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchForVideo('marvel');

    }

    searchForVideo = (term) => {
        YTSearch({key: youtubeAPIKey, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({ videos: videos });
        });
    };



    render() {
        const searchVideo = _.debounce((term) => {this.searchForVideo(term)}, 300);
        return (
            <div>
                <SearchBar onInputChange={searchVideo} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelected={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}
// const App = () => {
//     return (
//         <div>Hello!
//             <SearchBar></SearchBar>
//         </div>
//     );
// };

ReactDOM.render(<App />, document.querySelector('.container'));
