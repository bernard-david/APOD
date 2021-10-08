import React, { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const Favorite = props => {
    const {data} = props

    const [form, setForm] = useState({
        copyright: "",
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        title: "",
    })

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/nasaimages/create', form)
            .then(res => {
                if (res.data.error) {
                    console.log("There's an error!");
                } else {
                    console.log("No errors here!");
                    navigate("/nasaimage");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="hidden" name="copyright" value={data.copyright} />
                <input type="hidden" name="date" value={data.date}/>
                <input type="hidden" name="explanation" value={data.explanation}/>
                <input type="hidden" name="hdurl" value={data.hdurl}/>
                <input type="hidden" name="media_type" value={data.media_type}/>
                <input type="hidden" name="title" value={data.title}/>
                <button className="btn btn-primary">Favorite</button>
            </form>
        </div>
    )
}

export default Favorite