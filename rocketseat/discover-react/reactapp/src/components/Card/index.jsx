import './styles.css'

export default function Card({ name, time }) {
    return (
        <div className='card'>
            <strong> { name } </strong>
            <small> { time } </small>
        </div>
    )
}

/*
    No caso de ultilizar as propriedade pode usar o 
    Card(props) ou da forma desestruturada
    Card({ name, time, idade })
*/