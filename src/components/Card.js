import React from 'react';  

const Card =(props)=>{

    const{name,id,gmail}=props;
    return(
        <div className='bg-light-blue dib bw3 br3 ma2 pa3 grow bw3 shadow-5 tc'>
            <img  src={`https://robohash.org/${id}?set=set1&size=100x100`} alt="robo" /> 
            <div>
                <h2>{name}</h2>
                <p>{gmail}</p>
            </div>
        </div>
    );
}

export default Card;