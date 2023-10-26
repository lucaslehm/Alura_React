import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nomeColaborador, setNomeColaborador] = useState('')
    const [cargoColaborador, setCargoColaborador] = useState('')
    const [imagemColaborador, setImagemColaborador] = useState('')
    const [timeColaborador, setTimeColaborador] = useState(props.times[0])

    const criarCard = (e) => {
        e.preventDefault()
        props.aoCriarCard({
            nomeColaborador,
            cargoColaborador,
            imagemColaborador,
            timeColaborador
        })
        setNomeColaborador('')
        setCargoColaborador('')
        setImagemColaborador('')
        setTimeColaborador('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={criarCard}>

                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <CampoTexto
                    label='Nome'
                    id='nome'
                    placeholder='Digite seu nome'
                    obrigadorio={true}
                    valor = {nomeColaborador} 
                    aoAlterado={valor => setNomeColaborador(valor)} 
                />

                <CampoTexto 
                    label='Cargo' 
                    id='cargo' 
                    placeholder='Digite seu cargo' 
                    obrigadorio={true}
                    valor = {cargoColaborador}
                    aoAlterado={valor => setCargoColaborador(valor)} 
                />

                <CampoTexto 
                    label='Imagem' 
                    id='imagem' 
                    placeholder='Insira o endereço da imagem'
                    valor = {imagemColaborador}
                    aoAlterado={valor => setImagemColaborador(valor)} 
                />

                <ListaSuspensa
                    label='Times' 
                    itens={props.times}
                    valor ={timeColaborador}
                    aoAlterado={valor => setTimeColaborador(valor)} 
                />

                <Botao 
                    texto='Criar card' 
                />
            </form>
        </section>
    )
}

export default Formulario