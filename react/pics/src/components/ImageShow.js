import React from 'react';

function ImageShow({key, image}) {
    return <div><img alt={image.alt_description} src={image.urls.small}/></div>;
}

export default ImageShow;