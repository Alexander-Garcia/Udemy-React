'use strict';

console.log('App.js is running');
var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Hand of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    //prevents page refresh and adding value to url
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
var clearArray = function clearArray() {
    if (app.options.length > 0) {
        app.options = [];
        renderApp();
    }
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: clearArray },
            'Remove All Options'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();

// Create a render function that renders the new JSX 
// call it right away for initial render then call it after options array is added to
// create a removeALl button. Clears list
