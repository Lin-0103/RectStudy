import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Elian",
      idade: 0,
    };
  }

  render() {
    return (
      <div>
        <h4>Esse é um componente de classe, o estado nome é:  {this.state.nome}</h4>
      </div>
    );
  }
}


/* --- NOTES
1° ESTRUTURA DE UM COMPONENTE DE CLASSE:
    ESPORTAÇÃO DA CLASSE COM NOME{
        CONSTRUCTOR{
            (* PROPS AND STATES HERE *)
        }

        RENDER(){
            RETURN(
                (*COMPONENT HERE*)
            )
        }
    }

    2° INFORMATIONS ON STATE SECTION ARE GET USEING 'THIS.STATE.(*STATE HERE*)'
    */
