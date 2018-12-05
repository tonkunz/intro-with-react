import React, { Component } from 'react'

/* Componente responsável por adicionar novos contatos a aplicação.
O importante aqui é entender que este componente é o que chamamos
de "Controled Component", ele não só renderiza um formulário, mas
também controla o que acontece nele! A "fonte da verdade" para esse
estado do formulário vive dentro do estado do componente em vez de
dentro do DOM. Os benefícios dos componentes controlados são:

- Validação instantânea do input
- Gerenciar de maneira condicional a ativação/desabilitação de botões
- Determinar os formatos de entrada  */

class AddContact extends Component {
	state = {
		contact : {
			name: '',
			email: '',
		},
	}

	//Método responsável por atualizar nosso state
	handleInputChange = (event) => {
		const {name, value} = event.target

		this.setState( (currentState) => ({
			...currentState, contact : {
				...currentState.contact, [name] : value,
			}
		}))
	}

	handleSubmitForm = (event) => {
		event.preventDefault(); //Para que a página não recarregue, como faz por padrão!
		this.props.submitUser(this.state.contact)
	}

	isDisabled = () => {
		return this.state.contact.name === '' || this.state.contact.email === '';
	}

	render(){
		//Destructuring ES6
		const {name,email} = this.state

		return(<div>
			<form onSubmit={this.handleSubmitForm}>
				Name: 
				<input
					name='name'
					type='text'
					placeholder='Enter the name'
					value={name}
					onChange={this.handleInputChange}
				/>
				Email: 
				<input
					name='email'
					type='text'
					placeholder='Enter the email'
					value={email}
					onChange={this.handleInputChange}
				/>
				<button disabled={this.isDisabled()}>Send</button>
			</form>
		</div>)
	}
}

export default AddContact;