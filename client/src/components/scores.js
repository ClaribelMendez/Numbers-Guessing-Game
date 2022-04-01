import { useState , useEffect } from 'react';

export default function Scores(){
    const [scores, setScores] = useState([])

    useEffect(() => {

    fetch("http://localhost:4002/api/scores")
    .then((response) => response.json())
    .then(scores =>{
        //setPlayers((players[3]));
        //console.log("Testing", typeof players);
        for (let index in scores){
           if( index !== "3"){
               setScores(scores);
           }
        };       
    })
}, [])
    
    return (
        <div className="leaderboard">
          <h2> List of Players </h2>
          <ol>
              {scores.map(score =>
                  <li key={score.id}> {score.firstname} {score.lastname} {score.username} {score.score}</li>)}
          </ol>
          </div>
          )


              }

