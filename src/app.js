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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum]; 
    alert(option); 
}

const renderApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={clearArray}>Remove All Options</button>
        <ol>
        {
             app.options.map((option, index) => {
            return <li key={index}>Item: {option} </li> ;  
        })
        }
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
