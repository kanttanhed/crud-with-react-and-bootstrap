
import React from 'react'
import ProdutoService from '../../app/produtoService'

const estadoInicial = {
        nome: '',
        sku: '',
        descricao: '',
        preco: '',
        fornecedor:'',
        sucesso: false
}

class CadastrarProduto extends React.Component{

   state = estadoInicial;

   constructor(){
       super()
       this.service = new ProdutoService();
   }

    //vai pegar o valor digitado do campo e atribui ao nome do campo
    onChange = (event) =>{
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
     }

     onSubmit = (event) => {
         const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
    }

        this.service.salvar(produto)
        this.limpaCampos()
        this.setState({sucesso: true})
     }

     limpaCampos = () => {
        this.setState(estadoInicial)
    }


    render(){
        return(
            <div className="card">
                <div className="card-header">
                     Product Registration
                </div>
                <div className="card-body">

                {this.state.sucesso && 
                    
                        <div class="alert alert-dismissible alert-success">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Well done!</strong> Cadastro realizado com sucesso.
                        </div>
                      
                }




                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name: *</label>
                                <input type="text"
                                       name="nome"
                                       onChange={this.onChange}
                                       value={this.state.nome} 
                                       className="form-control" />
                            </div>
                        </div>
                        

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text"
                                       name="sku"
                                       onChange={this.onChange} 
                                       value={this.state.sku} 
                                       className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição</label>
                                    <textarea name="descricao" 
                                              onChange={this.onChange}
                                              value={this.state.descricao} 
                                              className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço: *</label>
                                    <input name="preco"
                                           type="text" 
                                           value={this.state.preco}
                                           onChange={this.onChange}
                                          
                                           className="form-control" />
                                </div>
                            </div>
                       
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor: *</label>
                                    <input type="text"
                                           name="fornecedor" 
                                           onChange={this.onChange}
                                           value={this.state.fornecedor} 
                                           className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                            </div>
                            
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastrarProduto;