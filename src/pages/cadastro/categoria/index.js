import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
    <PageDefault>
        <h1> Cadastrar Categoria</h1>
        <form>
            <label > Nome da categoria
                <input type="text"/>
            </label>
            <button type="">Cadastrar </button>
        </form>
        <Link to="/">
          Ir para home
        </Link>
    </PageDefault>
    )
  }

  export default CadastroCategoria;