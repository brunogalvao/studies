function App() {

  let texto = "Titulo";
  return (

    <div className="grid grid-cols-2 gap-4 place-content-around mx-8">
      <div>
        <h1 className="text-5xl text-center font-thin uppercase text-violet-400 m-6">{texto}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis consequatur dolores hic incidunt earum esse ipsum animi ea provident, voluptatum aliquam. A, quibusdam. Facere nihil aliquam beatae est natus.</p>
      </div>

      <div>
        <h1 className="title">{texto}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis consequatur dolores hic incidunt earum esse ipsum animi ea provident, voluptatum aliquam. A, quibusdam. Facere nihil aliquam beatae est natus.</p>
      </div>
    </div>

  )
}

export default App
