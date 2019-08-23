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
            visibility && <div><p>I'm not your guy buddy</p></div>
        }
        </div>
    ); 
    ReactDOM.render(myApp, 
        app); 
}; 
    renderApp(); 

    