import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName] = useState("Merve")  //setName bu state in değerini değiştiriyor
  const [age,setAge] = useState(1)
  const [friends,setFriends] = useState(["Henry","David"])    //array için [] kullanılır
  const [address,setAddress] = useState({ title:"Los Angeles", zip:1234})  //array için {} kullanılır

  return (
    <div className="App">
      <h1> Merhaba {name} </h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Margot")}>Name Button</button>
      <button onClick={()=> setAge(2)}>Age Button</button>


      <hr />
      <br />

      <h2> Friends </h2>
      {friends.map((f, index) => (
        <div key={index}>
          {f}
        </div>
      ))}

      <button onClick={() => setFriends([...friends, "Merve"])}>
        Add new friend
      </button> //arraydeki önceki değerleri "Henry","David" korumak için ...friends ifadesi konur



      <hr />
      <br />

      <h2> Address </h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button onClick={() => setAddress({...address, title: "New York", zip: 4444})}> obje için bütün değerleri güncellemek istiyorsak ...address buna ihtiyacımız olmayacaktır
        Change the address
      </button>




    </div>
  );
}

export default App;
