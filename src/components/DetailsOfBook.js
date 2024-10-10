import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailsOfBook() {
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "http://localhost:4002/books/" + id;

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    return (
        <>
            <Link to="/books" className="btn btn-info">Back</Link>

            <button className="btn btn-danger" onClick={() => {

                fetch(apiUrl, { method: "DELETE" })
                    .then(res => res.json())
                    .then(res => {
                        navigate('/books');
                    })


            }}>Delete</button>


            <h1>Name of the book is = {data.bookName}</h1>
            <img src={data.bookImage} />
        </>
    );
}

export default DetailsOfBook;