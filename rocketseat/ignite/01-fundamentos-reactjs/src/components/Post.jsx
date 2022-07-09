/*
props : {
    autor: '',
    content: ''
}
*/

export default function Post(props) {

    console.log(props.index);

    return (
        <div>
            <strong>{props.autor}</strong>
            <p>{props.index} - {props.content}</p>
        </div>
    )

}
