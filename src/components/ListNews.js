import React from 'react';
import NewItem from './NewItem';

const ListNews = ({news}) => (



    <div className="row initSpace">

        <div className="col-12 centerc">

        {news.map(newitem => (
        <NewItem 
            key ={newitem.url}
            newitem ={newitem}
        />

        ))}
           
        </div>
    </div>

);

export default ListNews;