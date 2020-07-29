import React, {useState} from 'react';

import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'

import FormField from '../../../components/FormField'

function CadastroCategoria(){
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:''
    }
    const [categorias, setCatergorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    


    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]:valor,
        })
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), e.target.value)
    }
  

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(e){
            e.preventDefault();
            setCatergorias([
                ...categorias, 
                values
            ])

            setValues(valoresIniciais)
        }}>


            <FormField
            label="Nome da Categoria: "
            type="text"
            name="nome"
            value={values.nome}            
            onChange={handleChange}
            />

            <FormField
            label="Descrição: "
            type="text"
            name="descricao"
            value={values.descricao}            
            onChange={handleChange}
            />

            <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}            
            onChange={handleChange}
            />            
            
            
        <button>
            Cadastrar
        </button>

        </form>

        <ul>
            {categorias.map((categoria, index) => {
                return (
                    <li key={index}>
                        {categoria.nome}
                    </li>
                )
            })}
        </ul>
        
        <Link to="/">
            Ir para a Home
        </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;