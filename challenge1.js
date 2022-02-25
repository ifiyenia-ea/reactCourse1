// a react component is a function which renders react elements
// new challenge:

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img src="images/React.svg" className="nav-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>Why I'm excited to learn React (better)!</h1>
      <ol>
        <li>To understand it all better and in depth</li>
        <li>To help me get a job</li>
        <li>It's fun</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <small>© 2022 Hyde development. All rights reserved.</small>
      </footer>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("content"));

// header / footer also parents
