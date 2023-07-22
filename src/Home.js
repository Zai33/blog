import { useState } from "react";
const Home = () => {

    const [name,setName] = useState('mario');
    const [age, setAge] = useState(25);
 
    const handleClick = () =>{
        setName('luigi');
        setAge(30);
    }
    return (  
        <div className="home">
            <h2>Homepage</h2><br />
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick} style={{
                color : "gray",
                backgroundColor : '#ff33',
                borderRadius: '5px'
            }}>Click Me</button>
            {/* <button onClick={(e) =>handleClickAgain('mario',e)}>ClickMeAging</button> */}
        </div>
    );
}
 
export default Home;