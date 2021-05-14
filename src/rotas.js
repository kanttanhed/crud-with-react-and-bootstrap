import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastrarProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'

let rot = () => {
    return(
            <Switch>
                <Route exact path="/cadastroProdutos/:sku?" component={CadastrarProduto}/>
                <Route exact path="/consultaProdutos" component={ConsultaProdutos}/>
                <Route exact path="/" component={Home}/>
            </Switch>
     
    )
}

export default rot