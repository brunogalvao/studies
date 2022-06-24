import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

import { Envelope, GithubLogo, LinkedinLogo, UserCircle } from "phosphor-react";

const QUERY = gql`
  query MyQuery {
  pessoals {
    nome
    linkedin
    id
    eMail
    gitHub
  }
}
`

interface Pessoal {
  nome: string,
  id: string,
  linkedin: string,
  eMail: string,
  gitHub: string
}

function App() {

  const { data } = useQuery<{ pessoals: Pessoal[] }>(QUERY)

  // console.log(data?.pessoals[0].nome) 

  const linkedin = "https://www.linkedin.com/in/"

  return (
    <div>
      <h1 className="font-thin text-5xl m-8 text-center">Página Pessoal</h1>

      {data?.pessoals.map(pessoal => (
        <ul className="mx-8 gap-4 border-b-2 pb-4" key={pessoal.id}>
          <li className="flex items-center">
            <UserCircle
              size={40}
              weight="fill"
              className="mr-2"
            />
            {pessoal.nome}
          </li>

          <li className="flex items-center">
            <Envelope
              size={40}
              weight="fill"
              className="mr-2" />
            {pessoal.eMail}
          </li>

          <li className="flex items-center">
            <a href={"https://www.linkedin.com/in/" + pessoal.linkedin} target="_blank">
              <LinkedinLogo size={40} weight="fill" />
            </a>

            <a href={"https://github.com/" + pessoal.gitHub} target="_blank">
              <GithubLogo size={40} weight="fill" />
            </a>
          </li>
        </ul>
      ))}

      {/* <span className="flex">
        <LinkedinLogo size={40} weight="fill" />
        {data?.pessoals[0].linkedin}
      </span> */}

    </div>
  )

}

export default App
