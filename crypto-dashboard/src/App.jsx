import Test from "@/components/Test";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    console.log("Hola desde useEffect");
    fetch("/api/v2/assets")
    .then((response) =>{
      console.log("STATUS:", response.status);
      console.log("OK:", response.ok);
      return response.json();
    })
    .then((data) => {
      console.log("DATA:", data);
    }) 
    .catch((error) => {
      console.error("ERROR:", error);
    });
  
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Crypto Dashboard</h1>
      <p>Base de estilos funcionando</p>
    </div>
  );
}

export default App;