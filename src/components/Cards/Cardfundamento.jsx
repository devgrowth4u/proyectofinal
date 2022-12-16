import Card_bootsrapt from 'react-bootstrap/Card';
import getDerecho from "../../api/apiDerecho";
import React, { useEffect, useState } from "react";


function Cardfundamento() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getDerecho();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);

  return (
    <div>
     <h3> 10 derechos fundamentales de los niños, por Quino / Unesco </h3>
    <div className="row row-cols-1 row-cols-md-2">    
   {  data.map((posData) => (      
      <Card_bootsrapt style={{ width: '18rem' }}>     
            <Card_bootsrapt.Img  variant="top" src={posData.imagen}  /> 
            <Card_bootsrapt.Body>  
              <hr></hr>              
            <Card_bootsrapt.Text>
              { 
              posData.Descripcion
              }
              </Card_bootsrapt.Text>
    </Card_bootsrapt.Body>
      </Card_bootsrapt>
))}             
</div>
</div>
  );
}

export default Cardfundamento;