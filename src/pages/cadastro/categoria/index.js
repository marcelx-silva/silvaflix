import React , {useState} from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){


        const [categorias,setCategorias] = useState(['Teste']);

        const valoresInicias ={ 
            nome : '',
            descricao : '',
            cor : '',
        }

        const [values,setValues] = useState(valoresInicias);

        function setValue(chave,valor){
            setValues({
                ...values,
                [chave] : valor,
            })
         }   

         function HandlerChange(infosDoEvento){
            const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
            const { value } = infosDoEvento.target;
            setValue(
              getAttribute('name'),
              value
            );
          }
             
        
    return(
    <PageDefault>
        <h1> Cadastrar Categoria : {values.nome} </h1>
        <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            //console.log(`Você cadastrou a categoria ${values}`);
            setCategorias([
                ...categorias,values
            ])

            setValues({valoresInicias})
        }}>
            <FormField 
                label='Nome da Categoria'
                type="text"
                name='nome'
                value={values.nome}
            />

            <FormField 
                label='Descrição'
                type = 'textarea'
                name='descricao'
                value={values.descricao}

            />


          
            <FormField 
                label='Cor da Categoria'
                type="color"
                name="cor"
                value={values.cor}
            />

            {/* <div>
            <label > Cor
                <input 
                type="color"
                name='cor'
                value={values.cor}
                onChange={HandlerChange}
                />
            </label>
            </div> */}
            
            <button type="">Cadastrar </button>
        </form>

            <ul>
                {categorias.map((categoria,indice)=>{ 
                    return(
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

        <Link to="/">
          Ir para home
        </Link>
    </PageDefault>
    )
  }

  export default CadastroCategoria;