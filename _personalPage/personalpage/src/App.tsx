import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

import { Envelope, GithubLogo, LinkedinLogo, Phone, TwitterLogo, UserCircle } from "phosphor-react";

const QUERY = gql`
  query QueryPersonalPage {
  pessoals {
    nome
    linkedin
    id
    eMail
    gitHub
    twitter
    celular
  }
}
`



interface Pessoal {
  nome: string,
  id: string,
  linkedin: string,
  eMail: string,
  gitHub: string,
  celular: string,
  twitter: string
}

function App() {

  const { data } = useQuery<{ pessoals: Pessoal[] }>(QUERY)

  console.log(data?.pessoals[0].celular) 

  return (
    <div>
      <h1 className="font-thin text-5xl m-8 text-center">{data?.pessoals[0].nome}</h1>

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
            <Phone size={40} weight="fill" />
            {pessoal.celular}
          </li>

          <li className="flex items-center">
            <a href={"https://www.linkedin.com/in/" + pessoal.linkedin} target="_blank">
              <LinkedinLogo size={40} weight="fill" />
            </a>

            <a href={"https://github.com/" + pessoal.gitHub} target="_blank">
              <GithubLogo size={40} weight="fill" />
            </a>

            <a href={"https://twitter.com/" + pessoal.twitter} target="_blank">
              <TwitterLogo size={40} weight="fill" />
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
