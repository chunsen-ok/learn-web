function formatFooter() {
    try {
        var req = new XMLHttpRequest();
        req.open('GET', '/api/v1/miscs/now');
        req.responseType = 'json';
        req.onload = function () {
            var footerEle = document.querySelector('footer');
            var nowEle = document.createElement('p');
            nowEle.textContent = "当前时间：" + req.response.data;
            footerEle.appendChild(nowEle);
        }
        req.send();
    } catch(e) {
        console.log(JSON.stringify(e));
    }

}

export {formatFooter};