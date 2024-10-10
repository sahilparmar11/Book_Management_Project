import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {   
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
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">BookID</label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, bookID: e.target.value })
                    }} type="text" class="form-control" value={data.bookID} />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">BookName</label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, bookName: e.target.value })
                    }} type="text" class="form-control" value={data.bookName} />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">Image Path</label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, bookImage: e.target.value })
                    }} type="text" class="form-control" value={data.bookImage} />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">AuthorName</label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, authorName: e.target.value })
                    }} type="text" class="form-control" value={data.authorName} />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Price</label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, price: e.target.value })
                    }} type="text" class="form-control" value={data.price} />
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button onClick={() => {
                        // const apiUrl = "http://localhost:4002/books/" + id;

                        console.log(apiUrl);

                        fetch(apiUrl, {
                            method: "PATCH",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate('/books');
                            });
                    }} name="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default EditBook;