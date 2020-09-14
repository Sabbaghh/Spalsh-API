import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {
        term: ''
    }
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="search">Search : </label>
                    <input name="search" type="text"
                        onChange={(e) => this.setState({ term: e.target.value })}
                        value={this.state.term} />
                </form>
            </div>

        )
    }
}

export default SearchBar;