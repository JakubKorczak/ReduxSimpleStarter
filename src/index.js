import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const youtubeAPIKey = 'AIzaSyBD56bTOsuKRm5TmUTjME5LIIjWbYfMQCE';

const App = () => {
    return (
        <div>Hello!
            <SearchBar></SearchBar>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
