import { useState } from "react";

const Form = (props) => {
    const [player, setPlayer] = useState({
        firstname: "",
        lastname: "",
        username: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setPlayer((player) => ({ ...player, firstname }));

    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setPlayer((player) => ({ ...player, lastname }));

    }

    const handleUsername = (event) => {
        const username = event.target.value;
        setPlayer((player) => ({ ...player, username }));

    }

    //A function to handle the post request
    const postplayer = (newplayer) => {
        return fetch('http://localhost:4002/api/players', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newplayer)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addplayer(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postplayer(player);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={player.firstname}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={player.lastname}
                    onChange={handleLastnameChange}
                />
                <label>Username</label>
                   <input
                    type="text"
                    id="add-user-username"
                    placeholder="Username"
                    required
                    value={player.username}
                    onChange={handleUsername}
                />
            </fieldset>
            <button type="submit">Add</button>

            

        </form>
    );
};

export default Form;