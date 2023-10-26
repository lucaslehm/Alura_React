import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nomeDoTime: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57C278'
    },
    {
      nomeDoTime: 'Front End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nomeDoTime: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nomeDoTime: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nomeDoTime: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nomeDoTime: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nomeDoTime: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const criarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        times={times.map(times => times.nomeDoTime)}
        aoCriarCard={c => criarColaborador(c)}
      />

      {times.map(time => <Time
        key={time.nomeDoTime}
        nomeDoTime={time.nomeDoTime}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.timeColaborador === time.nomeDoTime)}
      />)}

      <Rodape/>


    </div>
  );
}

export default App;
