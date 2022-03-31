import { useState, useEffect } from "react";
import Form from "./form";

function Players() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/players")
        .then((response) => response.json())
        .then(players =>{
            //setPlayers((players[3]));
            //console.log("Testing", typeof players);
            for (let index in players){
               if( index !== "3"){
                   setPlayers(players);
               }
            };       
        })
        
    }, []);

    

    const addplayer = (newPlayer) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setPlayers((players) => [...players, newPlayer]);
    }


    return (
      <div className="players">
        <h2> List of Players </h2>
        <ul>
            {players.map(player =>
                <li key={player.id}> {player.firstname} {player.lastname} {player.username}</li>)}
        </ul>
        <Form addplayer={addplayer} />
      </div>
    );
  }
  
  export default Players;