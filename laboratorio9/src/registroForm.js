import React from 'react';
import Registro from './Registro';

class registroForm extends React.Component{
    constructor(props){
        super(props){
            this.state={carnet: '', horario: '', tarde: ''}
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleSubmit(event){
        event.preventDefault();
        let Registro = new registroForm(this.state.carnet, this.state.horario, this.state.tarde)
        this.props.onSave(Registro);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' 
    }

    }
}