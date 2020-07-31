import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
    <PageDefault>
        <h1> Cadastrar Video</h1>
        <form>
            <label > Nome do video
                <input type="text"/>
            </label>
            <button type="">Cadastrar </button>
        </form>
        <Link to="/cadastro/categoria">
            Cadastrar Categoria 
        </Link>
    </PageDefault>
    )
  }

  export default CadastroVideo;