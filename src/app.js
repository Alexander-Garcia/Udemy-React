console.log('App.js is running'); 

 
const app = {
    title: 'Indecision App',
    subtitle: 'Hand of computer',
    options: ['One', 'Two']
}; 
const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
    </div>
)





const user = {
    name: 'Alexander',
    age: 28,
    location: 'Moms basement'
}; 
const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    } 
}
const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
)



const appRoot = document.getElementById('app'); 
ReactDOM.render(templateTwo, appRoot); 