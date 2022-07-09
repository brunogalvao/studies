import { useQueryPersonalPageQuery } from "./graphql/generated"

import { Envelope, Gif, Gift, GithubLogo, LinkedinLogo, Phone, TwitterLogo } from "phosphor-react";

export default function App() {

  const { data } = useQueryPersonalPageQuery();

  console.log(data?.pessoals);

  return (
    <div>

      <h1 className="font-thin text-5xl m-8 text-center">{data?.pessoals[0].nome}</h1>

      {data?.pessoals.map(pessoal => (
        <ul
          className="mx-8 gap-4 border-b-2 pb-4"
          key={pessoal.id}>
          <li className="flex items-center">
            <img
              className="w-10 h-10 mr-2 rounded-full border-2 border-orange-500"
              src={pessoal.photo?.url} />
            {pessoal.nome}
          </li>

          <li className="flex items-center">
            <Gift
              size={40}
              weight="fill"
              className="text-orange-500"
            />
            {pessoal.dataNascimento}
          </li>

          <li className="flex items-center">
            <Envelope
              size={40}
              weight="fill"
              className="mr-2 text-orange-500" />
            {pessoal.eMail}
          </li>

          <li className="flex items-center">
            <Phone size={40} weight="fill" className="text-orange-500"/>
            {pessoal.celular}
          </li>

          <li className="flex items-center">
            <a href={"https://www.linkedin.com/in/" + pessoal.linkedin} target="_blank">
              <LinkedinLogo size={40} weight="fill" className="text-orange-500"/>
            </a>

            <a href={"https://github.com/" + pessoal.gitHub} target="_blank">
              <GithubLogo size={40} weight="fill" className="text-orange-500"/>
            </a>

            <a href={"https://twitter.com/" + pessoal.twitter} target="_blank">
              <TwitterLogo size={40} weight="fill" className="text-orange-500"/>
            </a>
          </li>

          <li className="mt-4 mb-4">
            {pessoal.descricaoBio?.text}
          </li>
        </ul>
      ))}

    </div>
  )

}
