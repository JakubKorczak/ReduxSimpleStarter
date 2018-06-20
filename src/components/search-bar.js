import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            value: false
        }
    }
    render() {
        return (
            <div className="search-bar">
                <span>Search for video:</span>
                <input type="text"
                       value={this.state.term}
                       onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        )
    }

    onInputChange = (term) => {
        this.setState({term});
        this.props.onInputChange(term);
    };
    // handlerInputChange(event) {
    //     console.log(event.target.value);
    // }

}

export default SearchBar;
