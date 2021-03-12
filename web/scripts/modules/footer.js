"use strict";

function formatFooter() {
    try {
        let req = new XMLHttpRequest();
        req.open('GET', '/api/v1/miscs/now');
        req.responseType = 'json';
        req.onload = function () {
            const nowStr = `<p class="footer">` + req.response.data + "</p>";
            let footerEle = document.querySelector('footer');
            footerEle.innerHTML = `<p class="footer"><i class="far fa-bell"></i> 欢迎访问：<a href="https://github.com/chunsen-ok" target="_blank">Github</a>.</p>` + nowStr;
        }
        req.send();
    } catch(e) {
        console.log(JSON.stringify(e));
    }
}

export {formatFooter};