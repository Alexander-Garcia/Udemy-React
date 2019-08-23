class Counter extends React.Component {
    constructor(props) {
        super(props); 
        this.handleAddOne = this.handleAddOne.bind(this); 
        this.handleMinusOne = this.handleMinusOne.bind(this); 
        this.handleReset = this.handleReset.bind(this); 
        this.state = {
            count: 0 
        }; 
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        }); 
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        }) ;
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(
    <Counter />,
    document.getElementById('app')
); 

// THE STEPS NECESSARY FOR COMPONENT STATE
// 1.) Setup default state object
// 2.) Component gets rendered with default state values
// 3.) Change state based on some event
// 4.) Component re-renders using new state values
// 5.) Repeat from step 3


// let count = 0; 
// const minusOne = () => {
//     count--; 
//     renderCounterApp();  
// }
// const reset = () => {
//     count = 0; 
//     renderCounterApp();  
// }
// const addOne = () => {
//     count++; 
//     renderCounterApp(); 
// };




// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     ); 
//     ReactDOM.render(templateTwo, appRoot); 
// };

// renderCounterApp(); 