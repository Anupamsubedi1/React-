
import './App.css'



const Card = ({title, movielength  }) => {
  return ( 
    <div style={{
      border: "2px solid black",
      margin: "20px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "lightblue",
      maxWidth: "300px"
    }}><h1>{title} </h1></div>
  )
}

const App = () => {
  
  return (
    <div className="App-header">
      <Card title="star wars" movielength={10} actors = {["Mark Hamill", "Harrison Ford"]}/>
      
      <Card title="avatar"  movielength={20}  actors = {["Sam Worthington", "Zoe Saldana"]}/>
    </div>
  );
}

export default App
