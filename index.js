const navbar = (
  <div>
    <nav>
      <h1>athenas uggla</h1>
      <ul>
        <li>om</li>
        <li>tjänster</li>
        <li>kontakt</li>
      </ul>
    </nav>
  </div>
);

const content = (
  <div>
    <h2>din digitala assistent</h2>
    <p>Vad behöver du hjälp med?</p>
  </div>
);

ReactDOM.render(navbar, document.getElementById("nav"));
ReactDOM.render(content, document.getElementById("content"));

