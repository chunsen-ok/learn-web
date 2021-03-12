"use strict";

import { formatFooter } from "./modules/footer.js";
formatFooter();

const text = "这是关于本网站及其作者的简介。";

let content = document.querySelector("#about-content");
content.textContent = text;