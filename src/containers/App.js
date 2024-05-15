import React,{Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {Names} from '../components/NamesList';
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component
{
    constructor(){
        super();
        this.state ={
            Names:[],
            searchfield:''
        };
       
    }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')//these three lines i just copied from jsonplaceholder site^_^.
      .then(response => response.json())
      .then(users=> this.setState({Names:Names}) )
       
    }



    //when you wanna create method inside react by your own you've to write it using arrow function. 

       onSearch =(event)=> {                     
        this.setState({searchfield: event.target.value});   //1-like event.which 2-instead of this.state.searchfield=  
    }


    // i wanna communicate these two components through these values so i pass this.state.Names -->bc it's static
    // and pass it to the CardList then we created a function and wanna pass  it to the SearchBox.
    //the components here called pure or dump components bc they no nothing about other component,
    //they just know that they always recieve smth and return the same thing each time.

    render()
    {
        const {Names,searchfield}=this.state; 
        const NamesFilter = Names.filter(Names => {
            return Names.name.toLowerCase().includes(searchfield.toLowerCase())  });

        return !Names.length ? //it was this.state.Names.length ===0
            <h1 className="tc">Loading...</h1> :
            <div className="tc ">
                <h1 className="f2">Robots</h1> 
                <SearchBox onSearch={this.onSearch}/>
                <Scroll>
                <CardList  Names={NamesFilter} />
                </Scroll>
            </div>
    }
 
}

export default App;

//render comes with class and always has to return smth.