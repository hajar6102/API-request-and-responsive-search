import React from 'react';

const SearchBox =({onSearch}) =>{ // I call it onSearch  bc we are in process of searching.
    return( 
    <div >
        <input type="search"  placeholder='Search Family Member...' onChange={onSearch}
         className='pa3 ma3 bg-light-blue b--light-green" type="search" placeholder="Seach Family Members'/>        
    </div>
    );
}
// every time the event happen it will run the function auotmactically as we've done in dom

export default SearchBox;

// now we want to connect SearchBox with CardList 
// when I type smt in the SeacrhBox the specific card appear.
// so each component has to deal with the app(parent) to know what the other component want.