"use strict";

function formatFooter() {
    try {
        let req = new XMLHttpRequest();
        req.open('GET', '/api/v1/miscs/now');
        req.responseType = 'json';
        req.onload = function () {
            const nowStr = "现在是：" + req.response.data + " .";
            let footerEle = document.querySelector('footer');
            footerEle.innerHTML = '<p><i class="far fa-bell"></i> 欢迎访问：<a href="https://github.com/chunsen-ok" target="_blank">Github</a>. <span>{0}</span></p>'.replace('{0}', nowStr);
        }
        req.send();
    } catch(e) {
        console.log(JSON.stringify(e));
    }

}

export {formatFooter};