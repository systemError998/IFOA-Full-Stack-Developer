import { Component } from "react";
//Importando component tra graffe, gli sto dicendo di importare dalla libreria react
// solo la cartella Component e non tutta la libreria React, come farei con 
// import React from 'react';

//Componente creato con una classe
class ThirdComp extends Component {
    render() {
        return (
            <div>
                <h2> Sono il terzo componente react </h2>
            </div>
        )
    }
}

export default ThirdComp