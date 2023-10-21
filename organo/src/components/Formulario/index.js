import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front End', 
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label='Nome' id='nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' id='cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' id='imagem' placeholder='Insira o endereço da imagem' />
                <ListaSuspensa label='Times' id='times' itens={times} />
            </form>
        </section>
    )
}

export default Formulario