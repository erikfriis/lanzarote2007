import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <form name="rsvp-form" method="POST" data-netlify="true" netlify>
  <input type="hidden" name="form-name" value="rsvp-form" />
  <label>
    Your Name:
    <input type="text" name="name" required />
  </label>
  <button type="submit">Send RSVP</button>
</form>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
