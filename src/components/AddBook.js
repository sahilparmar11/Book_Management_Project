import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">BookID</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,bookID:e.target.value})
                }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">BookName</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,bookName:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">Image Path</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,bookImage:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">AuthorName</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,authorName:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Price</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,price:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <div class="offset-4 col-8">
                <button onClick={()=>{
                    const apiUrl = "http://localhost:4002/books";

                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/books');
                    });
                }} name="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default AddBook;