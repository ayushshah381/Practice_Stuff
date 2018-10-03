import React from 'react';
//import ReactDOM from 'react-dom';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "f62d7e80f73e05d30113fafed95d3e57";

class App extends React.Component{
   state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
   } 

   getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if(city && country){
      //console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
     this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value!"
      }); 
    }
   } 

  render(){
    return(
      <div>
        <Titles />
        
        <Form getWeather={this.getWeather}/>
        
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.desription}
        error={this.state.error} />
      </div>
      );
  }
}

export default App;