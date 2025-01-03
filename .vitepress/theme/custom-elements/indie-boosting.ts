const allAttributes = [
  "id",
  "max-products",
  "max-columns",
  "title",
  "theme",
  "direction",
  "no-title",
  "no-border",
  "no-shadow",
  "open-self",
  "permanent",
  "permanent-url",
  "owned",
  "debug",
] as const;

type Attribute = (typeof allAttributes)[number];

/**
 * https://www.npmjs.com/package/@indieboosting/react#props
 */
const attributeToProp = (name: string) => {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

class IndieBoosting extends HTMLElement {
  constructor() {
    super();
  }

  _load() {
    const style = document.createElement("link");
    const script = document.createElement("script");
    const searchParams = new URLSearchParams();

    Array.from(this.attributes).forEach((attribute) => {
      const { name, value } = attribute;
      if (allAttributes.includes(name as Attribute)) {
        searchParams.append(attributeToProp(name), value || "true");
      } else {
        console.warn(`IndieBoosting: '${name}' is not a supported attribute.`);
      }
    });

    style.rel = "stylesheet";
    style.href = "https://cdn.indieboosting.com/latest/style.css";
    script.src = `https://cdn.indieboosting.com/latest/script.js?${searchParams}`;

    this.parentElement.appendChild(style);
    this.parentElement.appendChild(script);
  }

  /**
   * Observe the parent element to emit a 'load' event when the indieboosting products are loaded.
   */
  _observe() {
    const observer = new MutationObserver((mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type !== "childList") return;
        Array.from(mutation.addedNodes).forEach((node: HTMLElement) => {
          if (node.matches("#indieboosting-container")) {
            observer.disconnect();
            this.dispatchEvent(new Event("load"));
          }
        });
      }
    });
    observer.observe(this.parentElement, { childList: true });
  }

  connectedCallback() {
    this._load();
    this._observe();
  }
}

const defineElement = () => {
  let customElementsRegistry: CustomElementRegistry;

  // SSR check
  try {
    customElementsRegistry = customElements;
  } catch (e) {
    return;
  }

  // Make sure customElements is available and no duplicate is defined
  if (!customElementsRegistry || customElementsRegistry.get("indie-boosting")) {
    return;
  }

  customElementsRegistry.define("indie-boosting", IndieBoosting);
};

export default defineElement();
