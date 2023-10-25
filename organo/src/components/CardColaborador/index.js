import './CardColaborador.css'

const CardColaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.imagemColaborador} alt={props.nomeColaborador}></img>
            </div>

            <div className='rodape'>
                <h4>{props.nomeColaborador}</h4>
                <h5>{props.cargoColaborador}</h5>
            </div>
        </div>
    )
}

export default CardColaborador