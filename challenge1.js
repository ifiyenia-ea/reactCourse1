/* const page = (
  <div>
    <img src="images/React.svg" width="40px" />
    <h1> Fun facts about React </h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("challenge1"));
*/

// console.log(page);

// composable = small pieces we can put together to make something
// larger/greater than the individual pieces (kind of like the const page here?)

// to do a function instead of a const, which returns react components, and is reusable ...
// almost like a custom

function temporaryName() {
  return (
    <div>
      <img src="images/React.svg" width="40px" />
      <h1> Fun facts about React </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

// ReactDOM.render(temporaryName(), document.getElementById("challenge1"));

// But this isn't all good; in order to do it more correctly I need to use pascal?-case instead of
// camelCase and then call it differently

function TemporaryName() {
  return (
    <div>
      <img src="images/React.svg" width="40px" />
      <h1> Fun facts about React </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

// ReactDOM.render(<TemporaryName />, document.getElementById("challenge1"));

// New challenge

/*
function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="images/React.svg" width="40px" />
        </nav>
      </header>
      <h1>Why I'm excited to learn react (better)!</h1>
      <ol>
        <li>To understand it all better and in depth</li>
        <li>To help me get a job</li>
        <li>It's fun</li>
      </ol>

      <footer>
        <small>© 2022 Hyde development. All rights reserved.</small>
      </footer>
    </div>
  );
}

*/

// ReactDOM.render(<Page />, document.getElementById("challenge1"));

// a react component is a function which renders react elements

// new challenge:

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img src="images/React.svg" width="40px" />
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
      <h1>Why I'm excited to learn react (better)!</h1>
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

ReactDOM.render(<Page />, document.getElementById("challenge"));

// header / footer also parents
