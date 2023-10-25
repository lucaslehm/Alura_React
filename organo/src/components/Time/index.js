import CardColaborador from '../CardColaborador'
import './Time.css'

const Time = (props) => {
    return (

        <section className='time' style={{ backgroundColor: props.corPrimaria }}>

            <h3 style={{ borderColor: props.corSecundaria }}>
                {props.nomeDoTime}
            </h3>

            <div className='colaboladores'>
                {props.colaboradores.map(colaborador =>
                    <CardColaborador
                        nomeColaborador={colaborador.nomeColaborador}
                        cargoColaborador={colaborador.cargoColaborador}
                        imagemColaborador={colaborador.imagemColaborador}
                    />
                )}
            </div>

        </section>
    )
}

export default Time