import {useParams} from "react-router-dom";

export default function Single() {
    let { id } = useParams();
    return <h1>Page ID: {id}</h1>;
}