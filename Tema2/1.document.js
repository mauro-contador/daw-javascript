"use strict"
{
    console.log(window);
    console.log(window.document);
    console.log(window.document.documentElement);
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);
    console.log(document.doctype);
    console.log(document.characterSet);
    console.log(window.document.documentElement.lang);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);

    console.log(document.links);

    let myHTMLCo = document.links;

    // myHTMLCo.forEach(elem => console.log(elem));
    for (let elem of myHTMLCo) {
        console.log("-");
    }
}