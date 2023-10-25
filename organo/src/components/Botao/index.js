import './Botao.css'

const Botao = (props) => {
    return (
        <div className='botao'>
            <button>{props.texto}</button>
        </div>
    )
}

export default Botao