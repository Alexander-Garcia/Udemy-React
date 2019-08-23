'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility state - false -> toggles between true and false
var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            messageVisible: false
        };
        return _this;
    }

    _createClass(Visibility, [{
        key: 'toggle',
        value: function toggle() {
            this.setState(function (prevState) {
                return {
                    messageVisible: !prevState.messageVisible
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Vsibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggle },
                    this.state.messageVisible ? 'Hide Details' : 'Show Details'
                ),
                this.state.messageVisible && React.createElement(
                    'p',
                    null,
                    'I\'m not your guy, buddy!'
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

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
