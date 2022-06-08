class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .nav-bar a {
        margin: 0px 16px;
      }
      .nav-bar {
        display: flex;
        align-items: center;
        box-shadow: 0px 5px 5px rgb(194, 194, 194);
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
        margin-bottom: 18px;
        font-size: 18px;
      }
      </style>
      <header>
      <div class="nav-bar">
        <a href="/index.html">Home</a>
        <a href="/projects.html">Projetos</a>
       
      </div>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
