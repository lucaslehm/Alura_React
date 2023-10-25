import './CampoTexto.css'


const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='campo-texto'>

            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} id={props.id} placeholder={props.placeholder} required={props.obrigadorio}></input>

        </div>
    )
}

export default CampoTexto