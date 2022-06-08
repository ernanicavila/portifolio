class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .socialFooterDiv {
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
    footer {
      height: 60px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
      position: relative;
      width: 100%;
      bottom: 0px;
    }

    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }

    .social-row {
      font-size: 20px;
    }
  </style>
  <footer>
    <div class="socialFooterDiv">
      <a href="https://www.linkedin.com/in/ernaniavila/"
      target='_blank'
        ><img src="images/linkedin.png"
      /></a>
      <a href="https://github.com/ernanicavila" target='_blank'
        ><img src="images/git.png" width="30px" alt=""
      /></a>
    </div>
  </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
