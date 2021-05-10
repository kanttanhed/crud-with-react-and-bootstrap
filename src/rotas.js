import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastrarProduto from './views/produtos/cadastro'

let rot = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastrarProduto}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default rot