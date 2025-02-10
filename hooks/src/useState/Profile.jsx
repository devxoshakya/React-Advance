import React, { useState } from 'react'

const Profile = () => {
    const [data, setData] = useState({
        name : "",
        age : ""
    })
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({name,age});
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name'  onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='age' onChange={(e) => setAge(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
            <li>
                {data.name}
            </li>
            <li>
                {data.age}
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
