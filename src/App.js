import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagenation from './pagenation';

// import { nanoid } from 'nanoid';
// import './App.css';
// import data from './Mock-data.json'
// import ReadOnlyRow from './components/ReadOnlyRow';
// import EditbleRow from './components/EditbleRow';
// import Table from './components/Table';
// import Time from './components/Timer/Time';


const App = () => {
  const [data, setData] = useState([]);
  
  const [perpage, setPerpage] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => { setData(res.data); setPerpage(res.data.slice(0, 10)); })
      

  }, []);
  //   console.log("response",response.data)
  //   let uniqueData = [...new Map(response.data.map((user)=>[user["userId"],user])).values()]
  //   // [1,{}], 1:{},1:{},1:{}
  // console.log("unique",uniqueData)
  // setData(uniqueData)

  // })

  const pageHandler = (pageNumber) => {
    setPerpage(data.slice((0, pageNumber * 10) - 10, pageNumber * 10));
    
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The name you entered was: ${data}`);
  // }
  return (
    <>
      <div>
        {/* <center>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label>User Name
              <input type='text' placeholder='user name' onChange={(e) => setData(e.target.value)} />
            </label><br />
            <label>email
              <input type='text' placeholder='email' onChange={(e) => setData(e.target.value)} />
            </label><br />
            <label>phone
              <input type='text' placeholder='phone' onChange={(e) => setData(e.target.value)} />
            </label><br />
            <button type='submit'>submit</button>
          </form>
        </center> */}

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {perpage.map((post) => (
              <tr>
                <th>{post.id}</th>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.completed}</td>
              </tr>
            ))}
            <Pagenation data={data} pageHandler={pageHandler} />
          </tbody>
        </table>
      </div>
    </>
  )
}
export default App
