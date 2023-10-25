import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (

        <div className='lista-suspensa'>

            <label htmlFor={props.id}>{props.label}</label>
            <select value={props.valor} onChange={e => props.aoAlterado(e.target.value)}>

                {props.itens.map(item => <option key={item}>{item}</option>)}
                
            </select>
        </div>
    )
}

export default ListaSuspensa
