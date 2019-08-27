import React from 'react'; 
import AddOption from './AddOption.js'; 
import Header from './Header.js'; 
import Action from './Action.js'; 
import Options from './Options.js';
import OptionModal from './OptionModal'; 

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }; 

    handleDeleteOptions =() => {
        this.setState(() => ({
            options: []
     }));
     };

     handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
           options: prevState.options.filter((option) => optionToRemove !== option)
        }));  
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length); 
        const choice = this.state.options[randomNum]; 
        this.setState(() => ({
            selectedOption: choice
        })); 
     };

     handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'; 
        } 
         this.setState((prevState) => ({options: prevState.options.concat(option)})); 
     };

     handleModalClick = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
     }; 
    
    componentDidMount() {
        try {
           const json = localStorage.getItem('options'); 
           const options = JSON.parse(json); 
  
          if(options) {
              this.setState(() => ({options})); 
          }
        }catch (e) {
               //Do nothing at all
        }
        
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); 
        }
    };
    componentWillUnmount() {
        console.log('component will unmoutn'); 
    };

   render() { 
       const subtitle = 'Im not your buddy, guy!'; 

       return (
           <div>
           <Header subtitle={subtitle}/>
           <div className="container">
           <Action 
           hasOptions={this.state.options.length > 0} 
               handlePick={this.handlePick}
           />
           <div className="widget">
           <Options 
           options={this.state.options} 
               handleDeleteOptions={this.handleDeleteOptions}
               handleDeleteOption={this.handleDeleteOption}
           />
           <AddOption 
               handleAddOption={this.handleAddOption}
           />
           </div>
           </div>
           <OptionModal
           selectedOption={this.state.selectedOption} 
           handleModalClick={this.handleModalClick}
           />
           </div>
       ); 
   }
}