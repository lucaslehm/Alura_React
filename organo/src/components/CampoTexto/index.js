import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className='campo-texto'>

            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input id={props.id} placeholder={props.placeholder}></input>

        </div>
    )
}

export default CampoTexto