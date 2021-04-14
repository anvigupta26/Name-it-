import React from 'react';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headerText: "Name it!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        name(inputText);
        this.setState({
            headerExpanded: !inputText , 
            suggestedNames: inputText ? name(inputText) : [],
        });
    };
   
    render(){
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded} 
                    headTitle={this.state.headerText} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

 
export default App;
