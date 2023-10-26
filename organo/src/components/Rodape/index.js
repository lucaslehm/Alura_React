import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape-inicial'>

            <div className='redes-sociais'>

                <a className='icone-rede-social' href='https://www.facebook.com/AluraCursosOnline/?locale=pt_BR' rel='external' target='_blank'><img src='./images/fb.png' alt='logo facebook'/> </a>
                <a className='icone-rede-social' href='https://twitter.com/AluraOnline' rel='external' target='_blank'><img src='./images/tw.png' alt='logo twitter'/> </a>
                <a className='icone-rede-social' href='https://www.instagram.com/aluraonline/' rel='external' target='_blank'><img src='./images/ig.png' alt='logo instagram'/> </a>

            </div>

            <img className='logo-alura' src='./images/logo.png' alt='logo organo'/>

            <p>Desenvolvido por Alura</p>

        </footer>
    )
}

export default Rodape