import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string,
  title: string,
}

function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  let texto = "Titulo";

  return (

    <div className="grid grid-cols-2 gap-4 place-content-around mx-8">
      <ul className="lesson">
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>

  )
}

export default App
