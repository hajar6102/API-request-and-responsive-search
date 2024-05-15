import React from 'react';
import Card from "../components/Card";

const CardList =({Names})=>{
    
    const CardsLoop =Names.map((item,i)=>
    {
        return  (<Card
            key={i}
            id={Names[i].id} 
            name={Names[i].name}
            gmail={Names[i].gmail} />);
    }
    );
    
    return(
       <div>
        {CardsLoop}
       </div>
    );
}

export default CardList;