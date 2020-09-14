import React, { Component } from 'react';
import Unspalsh from './Api/Unsplash';
//my components
import SearchBar from "./SearchBar/SearchBar";
import ImgList from './ImgList/ImgList';


class App extends Component {
    state = {
        images: []
    }

    onSearchSubmit = (term) => {
        Unspalsh.get('search/photos', {
            params: { query: term}
        })
            .then((response) => {
                this.setState({
                    images: response.data.results
                })
            });
    }

    render() {
        return (

            <div>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImgList images = {this.state.images}/>
            </div>

        )
    }
}

export default App;