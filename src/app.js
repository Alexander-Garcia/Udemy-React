console.log('App.js is running'); 
const appRoot = document.getElementById('app'); 
 
const app = {
    title: 'Indecision App',
    subtitle: 'Hand of computer',
    options: []
}; 

const onFormSubmit = (e) => {
    //prevents page refresh and adding value to url
    e.preventDefault(); 

    const option = e.target.elements.option.value; 

    if(option) {
        app.options.push(option); 
        e.target.elements.option.value = ''; 
        renderApp(); 
    }
}; 
const clearArray = () => {
    if(app.options.length>0) {
        app.options = []; 
        renderApp(); 
    }
}; 

const renderApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button onClick={clearArray}>Remove All Options</button>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
    ); 

    ReactDOM.render(template, appRoot); 
}; 
renderApp(); 




// Create a render function that renders the new JSX 
// call it right away for initial render then call it after options array is added to
// create a removeALl button. Clears list 