import React, { Component } from 'react'

class ContactList extends Component{

	render(){
		//Destructuring ES6
		const {contacts} = this.props

		return(
			<ol>
				{
					contacts.map(c => <li>{c.name}</li>)
				}
			</ol>
		)
	}
}

export default ContactList;