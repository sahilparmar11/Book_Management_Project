import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetAllBook() {

    const [data, setData] = useState([]);

    // const navigate = useNavigate();


    useEffect(() => {
        const apiUrl = "http://localhost:4002/books";
        fetch(apiUrl).then(res => res.json()).then(res => setData(res));
    }, []);

   

    const booksFormated = data.map((book) => {
        return (
            <div class="col-3">
                <div class="card">
                    <img src={book.bookImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        {/* <h5 class="card-title">{book.bookID}</h5> */}
                        <p class="card-text">Name: {book.bookName}</p>
                        <p class="card-text">Author: {book.authorName}</p>
                        <p class="card-text">Price: {book.price}</p>
                        <Link className="btn btn-info" to={"/books/" + book.bookID}>Exlpore</Link>
                        <Link className="btn btn-warning" to={"/books/edit/" + book.bookID}>Edit</Link>
                        


                    </div>
                </div>
            </div>
        );
    });
    return (<>
        <Link className="btn btn-danger" to={"/books/add"}>Add New Book</Link>
        {booksFormated}
    </>);
}

export default GetAllBook;

// {
//     "bookID":3,
//     "bookName":"Give Your Heart A Break",
//     "bookImage":"",
//     "authorName":"Anuj Tiwari",
//     "price":350
// }