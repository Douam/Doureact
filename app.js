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
  ReactDOM.render(title, document.querySelector("#app2"));
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
function Home() {
  return (
    <div>
      <Welcome name="PICA" />
      <Welcome name="ZORO" />
      <Clock />
    </div>
  );
}
/**
 * ReactDOM.render(
  <WelcomeFunc name="douam">greating everybody</WelcomeFunc>,
  document.querySelector("#app")
);*/

ReactDOM.render(<Home name="douam" />, document.querySelector("#app"));

//ReactDOM.render(<Clock />, document.querySelector("#app2"));
