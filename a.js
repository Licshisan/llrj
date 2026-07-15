(function () {
  window.__errorHandler = (n, l, m, s) => {
    var st = s ? s.split('\n').slice(0, 2).join('\n') : '';
    var d = { uid: '123456', id: 1, level: 'error', log: { n, l, m, s: st } };
    var x = new XMLHttpRequest();
    x.open('POST', 'http://124.221.159.129:8080/log', !0);
    x.setRequestHeader('Content-Type', 'application/json');
    x.timeout = 4000;
    x.onload = x.onerror = x.ontimeout = () => {};
    x.send(JSON.stringify(d));
  };
})();