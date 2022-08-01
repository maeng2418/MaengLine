const template = `
  <template id="highlightTemplate">
    <span class="highlight"></span>
  </template>
  <button id="maeng-line">M</button>
`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #maeng-line {
    align-items: center;
    border: none;
    cursor: pointer;
    display: ${display};
    justify-content: center;
    left: ${left}px;
    padding: 5px 10px;
    position: absolute;
    top: ${top}px;
    width: 30px;
    height: 30px;
    z-index: 9999;
    opacity: 1;
    -webkit-box-shadow: 0px 2px 7px 0px rgb(39 43 49 / 20%);
    -moz-box-shadow: 0px 2px 7px 0px rgba(39, 43, 49, 0.2);
    box-shadow: 0px 2px 7px 0px rgb(39 43 49 / 20%);
    background-color: transparent;
    border-radius: 40px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,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);
  }
`;

class MaengLine extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get markerPosition() {
    return JSON.parse(this.getAttribute("markerPosition") || "{}");
  }

  get styleElement() {
    return this.shadowRoot.querySelector("style");
  }

  get highlightTemplate() {
    return this.shadowRoot.getElementById("highlightTemplate");
  }

  static get observedAttributes() {
    return ["markerPosition"];
  }

  render() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.innerHTML += template;
    this.shadowRoot
      .getElementById("maeng-line")
      .addEventListener("click", () => this.highlightSelection());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "markerPosition") {
      this.styleElement.textContent = styled(this.markerPosition);
    }
  }

  highlightSelection() {
    var userSelection = window.getSelection();
    for (let i = 0; i < userSelection.rangeCount; i++) {
      this.highlightRange(userSelection.getRangeAt(i));
    }
    window.getSelection().empty();
  }

  highlightRange(range) {
    const clone =
      this.highlightTemplate.cloneNode(true).content.firstElementChild;
    clone.appendChild(range.extractContents());
    range.insertNode(clone);
  }
}

window.customElements.define("maeng-line", MaengLine);
