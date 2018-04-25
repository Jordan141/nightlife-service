import React from 'react'

function ListItem(props){
    const {imgURL, name, address} = props
    return (
        <div className='listitem row'>
        <div className='col-md-2'>
            <img src={imgURL} alt='An amazing picture of the establishment...'/>
        </div>
        <div className='col-md-10'>
        <a href={props.yelpURL} target='_blank'>
            <h5>{name}</h5>
            <p className='info'>{address} </p>
        </a>
        </div>
        </div>
    )
}

export default ListItem