// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility state - false -> toggles between true and false
class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this); 
        this.state = {
            messageVisible: false
        } ; 
    }
    toggle() {
        this.setState((prevState) => {
            return {
                messageVisible: !prevState.messageVisible
            }; 
        }); 
    }
    render() {
        return (
            <div>
                <h1>Vsibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.messageVisible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.messageVisible && <p>I'm not your guy, buddy!</p>}
            </div>
        ); 
    }
}

ReactDOM.render(
    <Visibility />,
    document.getElementById('app')
); 




// UP above was a new challenge to redo the code below but transforming it into Component instead. 

/*
const app = document.getElementById('app'); 
let visibility = false;

const showDetails = () => {
    visibility = !visibility; 
    renderApp(); 
}

const renderApp = () => {
    const myApp = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={showDetails}>
            {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {
            visibility && <div><p>I'm not your guy, buddy!</p></div>
        }
        </div>
    ); 
    ReactDOM.render(myApp, 
        app); 
}; 
    renderApp(); 
*/
