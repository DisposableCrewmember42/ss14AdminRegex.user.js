// ==UserScript==
// @name        CC Logs Regex
// @namespace   Violentmonkey Scripts
// @version     1.0.0
//
// @match       https://centcom.deltav.gay/Logs*
// @grant       GM_getValue
// @grant       GM_setValue
//
// @downloadURL https://raw.githubusercontent.com/DisposableCrewmember42/ss14AdminRegex.user.js/refs/heads/main/ss14AdminRegex.user.js
// @author      DisposableCrewmember42
// @description Adds basic regex filtering functionality to SS14.Admin log search results
// ==/UserScript==

function applyFilter(regex) {
  const regexp = new RegExp(regex, "i");
  const logMessages = document.querySelectorAll("tbody > tr.on-click.data-log > td:nth-child(6)");

  for (const msg of logMessages) {
    msg.parentElement.style.display = regexp.test(msg.textContent) ? "" : "none";
  }
}

const filterDiv = document.createElement("div");
filterDiv.style.marginLeft = "15px";

const filterField = document.createElement("input");
filterField.id = "custom_regexField"
filterField.addEventListener("input", (e) => {
  const value = e.target.value;

  GM_setValue("lastFilter", value);
  applyFilter(value);
})

const filterLabel = document.createElement("label");
filterLabel.for = filterField.id;
filterLabel.textContent = "Result RegEx"

filterDiv.appendChild(filterLabel);
filterDiv.appendChild(filterField);

document.querySelector("main data-grid data-grid-filter").insertAdjacentElement("afterend", filterDiv);

const lastFilter = GM_getValue("lastFilter");
if (lastFilter) {
  filterField.value = lastFilter;
  applyFilter(lastFilter);
}
