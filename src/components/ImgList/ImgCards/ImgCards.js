import React, { Component, createRef } from 'react';


class ImgCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            spans : 0
        }
        this.imgRef = createRef();
    }


    componentDidMount() {
        console.log(this.imgRef);
        this.imgRef.current.addEventListener('load', this.setSpans);
    }

    setSpans=()=> {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height / 300);
        this.setState({spans})
    }
    render() {
        const { urls, description } = this.props.image;


        return (
            <a href={urls.regular} 
            style={{gridRowEnd: `span ${this.state.spans}`}}
            target="_blank">

                <img alt={description}
                    src={urls.regular}
                    ref={this.imgRef} />
            </a>
        )
    }
}

export default ImgCard;