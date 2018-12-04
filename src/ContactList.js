import React, { Component } from 'react'
import ShowContact from './ShowContact'
/* Componente que se preocupa em renderizar a lista
ordenada de contatos recebido via props por App.js */

class ContactList extends Component{

	render(){
		//Destructuring ES6
		const {contacts} = this.props

		return(
			<ol>
				{
					contacts.map((c, i) => <li key={i}> <ShowContact contact={c}/> </li>)
				}
			</ol>
		)
	}
}

export default ContactList;