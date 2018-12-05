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
		query : '',
	}

	//Método responsável por atualizar nosso state Query
	handleInptut = (value) => {
		this.setState( () => ({
			query : value,
		}))
	}

	isDisabled = () => {
		return this.state.query === '';
	}

	render(){
		//Destructuring ES6
		const {query} = this.state

		return(<div>
			<form onSubmit='#'>
				Nome: 
				<input 
					type='text'
					placeholder='Enter the name'
					value={query}
					onChange={(event) => this.handleInptut(event.target.value)}
				/>
				<button disabled={this.isDisabled()}>Send</button>
			</form>
		</div>)
	}
}

export default AddContact;