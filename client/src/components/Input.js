import React, {Component} from 'react'

class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            location: 'Where you headed?',
            type: 'food'
        }
    }

    onInputChange(location){
        this.setState({location});
        this.props.onSearchTermChange(this.state.type, location);
    }

    onSelectChange(type){
        this.setState({type})
    }

    render(){
        return (
            <div className='input row'>
                <input className='col-md-9'
                    value={this.state.location}
                    onChange = {e => this.onInputChange(e.target.value)} />
                <select className='form-control col-md-2' onChange={e => this.onSelectChange(e.target.value)} >
                    <option value="food">Food</option>
                    <option value="drink">Drink</option>
                </select>
            </div>
        )
    }
}

export default Input;