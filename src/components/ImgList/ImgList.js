import React from 'react';
import ImgCard from './ImgCards/ImgCards';
import './ImgList.css';
const ImgList = (props) => {
    const Images = props.images.map((image) => {
        return (<ImgCard key={image.id} image={image}/>)
    })

    return (
        <div className="img-list">{Images}</div>
    )
}

export default ImgList;