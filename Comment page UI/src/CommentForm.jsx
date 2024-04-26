import { useState,useEffect } from "react";
import "./CommentForm.css"

export default function CommentForm() {

    let [formData,setFormData] = useState({
        username:"",
        remark:"",
        rating:5
    });

    function inputHandeler(event) {
        let nameField = event.target.name;
        let valueField = event.target.value;

        setFormData((data) => {
            return {...formData,[nameField]:valueField}
        });
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username:"",
            remark:"",
            rating:5
        });
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} action="">
                <h2>Give a Comments!</h2>
                <label htmlFor="username">Username</label>
                <input 
                id="username" placeholder="Enter UserName" type="text" value={formData.username} onChange={inputHandeler} name="username"/>
                <br />
                <br />
                <label htmlFor="remark">Remark</label>
                <textarea id="remark" type="textArea" placeholder="Add Few Remark" value={formData.remark} onChange={inputHandeler} name="remark" />
                <br />
                <br />
                <label htmlFor="rating">Rating</label>
                <input id="rating" type="number" min={1} max={5} value={formData.rating} onChange={inputHandeler} name="rating" />
                <br />
                <br />
                <button>Submit</button>
                <br />
                <br />
            </form>
        </div>
    )
}