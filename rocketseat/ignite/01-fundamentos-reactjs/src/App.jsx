import { useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import './global.css';

export default function App() {

  return (
    <div>

      <Header />

      <h1>Clean Template</h1>

      <Post
        autor="Bruno Galvão"
        index={1}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae sint, ab aut provident consequatur, illum, cupiditate ipsa reiciendis porro quisquam eligendi dolore sapiente facere aliquid voluptatibus enim commodi soluta?"
      />

      <Post
        autor="Eduardo Galvão"
        index={2}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae sint, ab aut provident consequatur, illum, cupiditate ipsa reiciendis porro quisquam eligendi dolore sapiente facere aliquid voluptatibus enim commodi soluta?"
      />

    </div>
  )

}