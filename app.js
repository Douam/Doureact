let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}
function render() {
  const title = (
    <h1>
      Hello test function <span>{n % 2 ? numberFormat(n) : null}</span>
    </h1>
  );
  //ReactDOM.render(title, document.querySelector("#app2"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);

function WelcomeFunc({ name, children }) {
  return (
    <div>
      {" "}
      <h2>Hello {name}</h2>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Welcome2 {this.props.name}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = null;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    //another classic way to do it !
    //this.timer = setInterval(this.tick, 1000);

    ComponentWillUnMount() {
      clearInterval(
        () => this.timerID(),
        1000
      );
    }
  tick() {
    this.setState({ date: new Date() });
  }
  //const date = new Date();
  render() {
    return (
      <div>
        It's {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, timerID: null };
    //this.timeID= null;
  }
  componentDidMount() {
     this.play()
  }

  ComponentWillUnMount() { 
      this.pause()
  }
  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }));
  }
  pause() {
    clearInterval(this.state.timerID)
    this.setState({
      timerID: null
    })
   }
  
  play() {
   this.setState({
    timerID : setInterval(this.increment.bind(this), 1000)
   })
  }
  toggle(){
    return this.state.timerID ? this.pause() : this.play()
  }
  label(){
    return this.state.timerID ? 'Pause' : 'Play'
  }
  reset(){
    this.pause()
    this.play()
    this.setState((state, props) => ({ n: props.start }))
  }
  render() {
    return <div>
      Valeur : {this.state.n}
      <button onClick={this.toggle.bind(this)}>{this.label()}</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
    </div>
  }
}
//method 1
      //this.state.timerID ? <button onClick={this.pause.bind(this)} >Pause</button> :
      //<button onClick={this.play.bind(this)}> Play</button>
Incrementer.defaultProps = {
  start: 0,
  step: 1
};

/**class ManualIncrementor extends React.Component {
 constructor(props) {
   super(props)
   this.state = {n : 0}  
 }
 increment (e){
  e.preventDefault()
   this.setState((state, props) => ({n: state.n + 1}) );
 }
 

 render () {
   return <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Increment</button></div>

 }
}*/
function Home() {
  return (
    <div>
      <Welcome name="PICA" />
      <Welcome name="ZORO" />
      <Clock />
      
      <Incrementer />
    </div>
  );
}
/**
 * ReactDOM.render(
  <WelcomeFunc name="douam">greating everybody</WelcomeFunc>,
  document.querySelector("#app")
);*/
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Home name="douam" />);
//ReactDOM.render(<Clock />, document.querySelector("#app2"));

class app extends React.Component{
  render(){
    return <div>
      <label HtmlFor="name">Your Name</label>
    </div>
  }
}
const root2 = ReactDOM.createRoot(document.querySelector("#app2"));