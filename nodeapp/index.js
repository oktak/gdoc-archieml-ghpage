const fs = require('fs');
const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const archieml = require('archieml');

const DOCURL = "https://docs.google.com/document/d/e/2PACX-1vSuFf7M1PeJ6zXb_zguD6PS8DjKNhS5bJ557lTQJ0P_T1QLSp9mB-9mYSoC5vYNd52sk7tXU1FMqWAm/pub"

/**
 * Get innerHTML, which is not in the W3C HTML5 standard
 * Ref: https://github.com/jsdom/jsdom/issues/1245
 * @param {*} el 
 */
function innerText (el) {
  el = el.cloneNode(true);
  el.querySelectorAll('script,style').forEach(s => s.remove());
  return el.textContent;
}

/**
 * HTML to ArchieML to JSON
 * @param {*} body 
 */
function handleBody (body) {
  //// Print the HTML
  // console.log(body);

  const dom = new JSDOM(body);
  let el = dom.window.document.querySelectorAll("#contents p");

  //// Make ArchieML
  let aml = "";
  el.forEach(o => {
    let text = innerText(o);
    aml = aml + text + "\n";

    // console.log(text);
  });

  //// Convert to JSON
  let parsed = archieml.load(aml);

  //// Output
  // console.log((parsed));
  console.log(JSON.stringify(parsed));
  const data = new Uint8Array(Buffer.from(`const aml = ${JSON.stringify(parsed)};
  module.exports = aml;`));
  fs.writeFile('../myapp/src/routes/district/aml.js', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function main() {
  fetch(DOCURL)
    .then(res => res.text())
    .then(body => handleBody(body))
    .catch(err => console.error(err));
}

main();
