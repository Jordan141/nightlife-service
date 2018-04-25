const React = require('react')

function Banner(){
    return (
        <div className='banner text-center'>
            <h1>Plans Tonight?</h1>
                <i className='fa fa-map-marker'></i>
                <i className='fa fa-cab'></i>
                <i className='fa fa-glass'></i>
            <h4> See which bars are hoppin' tonight and RSVP ahead of time!</h4>
        </div>
    )
}

module.exports = Banner
