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
    <div className="main">
      <h1>Why I'm excited to learn React (better)!</h1>
      <ul>
        <li>To understand it all better and in depth</li>
        <li>To help me for when I start working in August</li>
        <li>It's fun</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
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
