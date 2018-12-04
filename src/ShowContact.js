import React, { Component } from 'react'
/* Este componente apenas se preocupara em renderizar
um contato, este contato é recebido devidamente pelo
seu componente pai via props, o componente ContactList.js */


class ShowContact extends Component {

	render(){
		//Destructuring ES6
		const {contact} = this.props

		return (<p>{
			`Contact Name: ${contact.name} - Email: ${contact.email}`
		}</p>)
	}
}

export default ShowContact;