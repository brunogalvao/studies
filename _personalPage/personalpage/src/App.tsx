import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const QUERY = gql`
  query MyQuery {
  pessoals {
    nome
    linkedin
    id
    eMail
  }
}
`

interface Pessoal {
  nome: string,
  id: string,
  linkedin: string,
  eMail: string
}

function App() {

  const { data } = useQuery<{ pessoals: Pessoal[] }>(QUERY)

  // console.log(data?.pessoals[0].nome)

  return (
    <div>
      <h1>Algum texto para o Projeto</h1>

      {data?.pessoals.map( pessoal => (
        <ul key={pessoal.id}>
          <li>Nome: {pessoal.nome}</li>
          <li>Linkedin: {pessoal.linkedin}</li>
          <li>E-mail: {pessoal.eMail}</li>
        </ul>
      ))}

    </div>
  )

}

export default App
