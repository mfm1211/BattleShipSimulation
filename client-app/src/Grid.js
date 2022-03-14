import {useState, useEffect} from 'react'


const Grid =() =>{
    const [players, setCells] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/Player')
          .then(res =>{return res.json()})
            .then(data => {setCells(data)
            });
      },[]);

    
    const handleNextMove = ()=>{
        fetch('http://localhost:5000/Simulation')
          .then(res =>{return res.json()})
            .then(data => {setCells(data)
            });
      };

      const handleNewSimulation = ()=>{
        fetch('http://localhost:5000/Player')
          .then(res =>{return res.json()})
            .then(data => {setCells(data)
            });
      };


    return(
    <div className='grid'>
        {players && players.map((table, nr) => {
            return(
        <table key={nr}>
        <tbody>
        {table.primaryGrid.cells && table.primaryGrid.cells.map((item, index) => {
            return (
              <tr key={index}>
                 {
                        item.map((cell, i2) => 
                        <td key={i2}>
                           {
                           cell.occupiedByShip ? 
                           (cell.shipCellShotByOpponent ? 
                            (<div className="squareBlack"></div>):(<div className="squareGray"></div>)):
                            (!cell.canBeTargeted ? (<div className="pointBlack"></div>):null)
                           }
                        </td>)
                    }
               
              </tr>
            );
          })}
       </tbody>
       </table>);
        })}     
        <button onClick={handleNewSimulation}>New Simulation</button> 
        {players && (players[0].won || players[1].won) ? null:<button onClick={handleNextMove}>Next Move</button> }
    </div>
);}




export default Grid;