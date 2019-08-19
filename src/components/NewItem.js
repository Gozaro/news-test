import React from 'react';
import noimage from '../images/blank_image.gif';

const NewItem = ({newitem}) => {

    //get data
    const { urlToImage, title, description, publishedAt, author, url} = newitem;
  

    // conditional if there is not image
    const imageNew = (urlToImage)? 
        <div className="col-5 pr-0"><a href={url} target="_blank" rel="noopener noreferrer"><img src={urlToImage} className="img-fluid mt-4" alt={title} /></a></div>

    : <div className="col-5 pr-0"><img src={noimage} className="img-fluid mt-4" alt="No image available" /></div>;

    return ( 


        <div className="card mt-2 mr-1 ml-1">
            <div className="row">
        
                {imageNew}
                <div className="col-7">
                    <div className="card-body">
                        <span className="card-text"><small className="text-muted">{publishedAt}</small></span>
                        <h5 className="card-title"><a href={url} target="_blank" rel="noopener noreferrer" className="link-new">{title}</a></h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pl-4 pr-5 pb-4">
                <span>{description}</span>
                <p className="card-text"><small className="text-muted">{author}</small></p>
                </div>

            </div>
           
        </div>
        
    );
}

export default NewItem;