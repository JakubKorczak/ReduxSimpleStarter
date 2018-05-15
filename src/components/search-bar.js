import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'xxx'
        }
    }
    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.term}
                       onChange={e => this.setState({term: e.target.value})}
                />
                {/*<div>*/}
                {/*Input val: {this.state.term}*/}
                {/*</div>*/}
            </div>
        )
    }

    // handlerInputChange(event) {
    //     console.log(event.target.value);
    // }

}

export default SearchBar;
