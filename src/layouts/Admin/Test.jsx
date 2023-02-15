import axios from 'axios'
import React, { useState } from 'react'

function Test() {
    const [file, setFile] = useState("")
    function formSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('uploadfile', file)
        console.log(formData);
        // e.preventDefau
        console.log(file);
        axios.post("http://localhost:8000/uploadfile", formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <form action="#" onSubmit={formSubmit} >
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <input type="submit" />
            </form>
        </div >
    )
}

export default Test