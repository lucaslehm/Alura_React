import CardColaborador from '../CardColaborador'
import './Time.css'

const Time = (props) => {
    return (

        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corPrimaria }}>

            <h3 style={{ borderColor: props.corSecundaria }}>
                {props.nomeDoTime}
            </h3>

            <div className='colaboladores'>
                {props.colaboradores.map(colaborador =>
                    <CardColaborador
                        key={colaborador.nomeColaborador}
                        nomeColaborador={colaborador.nomeColaborador}
                        cargoColaborador={colaborador.cargoColaborador}
                        imagemColaborador={colaborador.imagemColaborador}
                        corDeFundo={props.corSecundaria}
                    />
                )}
            </div>

        </section>
    )
}

export default Time