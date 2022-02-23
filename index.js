ReactDOM.render(<h2>Let's do this!</h2>, document.getElementById("root"));

ReactDOM.render(
  <ul>
    <li> one</li>
    <li> one</li>
    <li> one</li>
    <li> one</li>
    <li> one</li>
  </ul>,
  document.getElementById("list")
);

function MainContent() {
  return <h1>I'm learning react again!</h1>;
}

function AnotherOne() {
  return <h3>...which apparently is well needed...</h3>;
}

ReactDOM.render(
  <div>
    <MainContent />
    <AnotherOne />
  </div>,
  document.getElementById("content")
);
