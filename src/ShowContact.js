import React from 'react'
/* Este componente apenas se preocupará em renderizar
um contato, este contato é recebido devidamente pelo
seu componente pai via props, o componente ContactList.js.
Quando tudo que um componente precisa é um método render()
podemos utilizar um componente funcional stateless*/


const ShowContact = (props) => {
	//Destructuring ES6
	const {contact} = props;


	return (<p>{
		`Contact Name: ${contact.name} - Email: ${contact.email}`
	}</p>)
	
}

export default ShowContact;