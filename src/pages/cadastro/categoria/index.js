import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/index'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function HandlerChange(infosDoEvento) {
    const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
    const { value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }



  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
      <h1>
       
        Cadastrar Categoria :
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log(`Você cadastrou a categoria ${values}`);
        setCategorias([
          ...categorias, values,
        ]);

        setValues({ valoresInicias });
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={HandlerChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={HandlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={HandlerChange}
        />


        <Button> 
            Cadastrar 
        </Button>
      </form>

      {categorias.length === 0 && <div>
          Carregando...
      </div>}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
