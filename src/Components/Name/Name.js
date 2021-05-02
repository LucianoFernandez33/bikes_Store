import React from 'react';
import react, {Component} from 'react';

export default class Name extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: this.props.nombre
        }
    }
    
    handleName = () => {
        this.setState({
            name: 'Luciano Fernandez'
        })
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={this.handleName}>CHANGE NAME</button>
                <h2>{this.state.name}</h2>
                
            </React.Fragment>
        )

    }
}