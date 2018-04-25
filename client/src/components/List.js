import React from 'react'
import ListItem from './ListItem'

function List(props){
    return (
        <div>
            {props.items.map((e,i) => <ListItem key ={i} name={e.name} imgURL={e.image_url} address={createAddress(e)} yelpURL={e.url}/>)}
        </div>
    )
}

function createAddress(e){
    e = e.location
    return `${e.address1}, ${e.city}, ${e.state}, ${e.zip_code}, ${e.country}`
}

export default List