import React, { useEffect, useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

// This file is the form that saves an image from the Nasa API into the database

const Favorite = props => {
    //destructure data coming in from the component that Favorite is exported in
    const {data} = props

    //base structure of the form
    const [form, setForm] = useState({
        copyright: "",
        date: "",
        explanation: "",
        hdurl: "",
        thumbnail: "",
        media_type: "",
        title: "",
    })

    //utilize useEffect inorder to prepopulate form with empty strings
    useEffect(() => {
        setForm(data)
    }, [data])

    //handles the saving of the Nasa image data, redirects to home page
    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/nasaimages/create', form)
            .then(res => {
                if (res.data.error) {
                    console.log("There's an error!");
                } else {
                    console.log("No errors here!");
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }

    //returns a button with hidden inputs containing the data from Nasa 
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="hidden" name="copyright" value={data.copyright}/>
                <input type="hidden" name="date" value={data.date}/>
                <input type="hidden" name="explanation" value={data.explanation}/>
                <input type="hidden" name="hdurl" value={data.hdurl}/>
                <input type="hidden" name="hdurl" value={data.thumbnail}/>
                <input type="hidden" name="media_type" value={data.media_type}/>
                <input type="hidden" name="title" value={data.title}/>
                <button className="btn btn-primary">Favorite</button>
            </form>
        </div>
    )
}

export default Favorite