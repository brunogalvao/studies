import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import './styles.css';

export default function Home() {

  const [studentName, setstudenteName] = useState();

  const [students, setStudents] = useState([]);

  const [ user, setUser ] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {

    fetch('https://api.github.com/users/brunogalvao')
      .then(response => response.json())
      .then(data => {
        
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          local: data.location,
          bio: data.bio,
          repo: data.public_repos,
        })

        console.log(data);
      })

    // corpo do useEffect => ações que serão executadas quando o componente for renderizado.
    console.log('useEffect foi chamado');

  }, []);

  /*
    Dentro do Array [] e onde fica o estado do useEffect, estando vazio o useEffect será chamado apenas uma vez.

    pode ter depencias como por exemplo:
    [students] => quando o students for alterado o useEffect será chamado.
  */

  return (
    <div className='container'>

      <header>
        <h1><b>Lista de</b> Presença</h1>

        <div>
          <p> {user.name} </p>
          <img src={user.avatar} alt="Foto de Perfil" />
          
          <small> {user.local}  - <b>Reposotórios </b> {user.repo}</small>
          
          <p>{user.bio}</p>
        </div>

      </header>

      <input
        type="text"
        placeholder='Digite seu nome...'
        onChange={e => setstudenteName(e.target.value)}
      />

      <button
        type='button'
        onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(student => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />)
        )
      }

    </div>

  )
}

/*

  Quando usar o useState dentro do vector []
  o primeiro elemento será onde está o valor
  e o segundo elemento será onde está a função

  exemplo:

  const [count, setCount] = useState(0);

  count será o valor inicial
  setCount será a função para atualizar o valor
  0 será o valor inicial (dentro do useState)


*/

/*
  Hooks são funções que permitem ou conectar estado ou ciclo de vida
  totalmente funcionais.
*/
