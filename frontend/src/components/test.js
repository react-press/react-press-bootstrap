// 1st component type: function component
function Header() {
 return <h1>Hello React</h1>;
}
// function components with arrow functions
const Header = () => <h1>Hello React</h1>;
// 2nd component type: class component
// Only needs to be used if there is state
class Header extends React.Component {
 render() {
   return <h1>Hello React</h1>;
 }
}
PROPS
// Parent to child prop passing :Class
class Parent extends React.Component {
render () {
 return(
  <Child eyeColor={'blue'} />
 )
}
}
class Child extends React.Component {
render () {
 return(
  <div style={{backgroundColor: this.props.eyeColor} />
 )
}
}
// Parent to child prop passing :Class to functional
// Class component
class Parent extends React.Component {
render () {
 return(
  <Child eyeColor={'blue'} />
 )
}
}
// Functional component
const Child = (props) => {
 return (
   <div style={{backgroundColor: props.eyeColor}} />
 )
}
// To Class
class Child extends Component {
 render() {
   return <h1>{this.props.eyeColor}</h1>;
 }
}
export default App;
STATE
//Class
class Car extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     brand: "Ford",
     model: "Mustang",
     color: "red",
     year: 1964
   };
 }
 render() {
   return (
     <div>
       <h1>My {this.state.brand}</h1>
       <p>
         It is a {this.state.color}
         {this.state.model}
         from {this.state.year}.
       </p>
     </div>
   );
 }
}
// Changing State
class Car extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     brand: "Ford",
     model: "Mustang",
     color: "red",
     year: 1964
   };
 }
 changeColor = () => {
   this.setState({color: "blue"});
 }
 render() {
   return (
     <div>
       <h1>My {this.state.brand}</h1>
       <p>
         It is a {this.state.color}
         {this.state.model}
         from {this.state.year}.
       </p>
       <button
         type="button"
         onClick={this.changeColor}
       >Change color</button>
     </div>
   );
 }
}
//Functional
function Example() {
 const [count, setCount] = useState(0);
 return (
   <div>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + 1)}>
       Click me
     </button>
   </div>
 );
}