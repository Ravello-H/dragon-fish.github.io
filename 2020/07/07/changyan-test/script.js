$(function () {
  var sid = b64_md5(location.pathname.replace(/(\/|\.|\!|\@|\$)/g, '-'));
  var appid = 'cyuVoX7TR';
  var conf = 'prod_46989582ae155c82a6d14c0e38feda6e';
  var width = window.innerWidth || document.documentElement.clientWidth;

  $('#CHANGYAN').append(() => {
    return $('<div>', { id: 'SOHUCS', sid: sid });
  });

  if (width < 960) { // '<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://cy-cdn.kuaizhan.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"></script>'
    $.getScript('http://cy-cdn.kuaizhan.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf).done(() => {
      $('#CHANGYAN-LOADING').hide();
    });
  } else {
    $.getScript('https://cy-cdn.kuaizhan.com/upload/changyan.js').done(() => {
      $('#CHANGYAN-LOADING').hide();
      window.changyan.api.config({ appid: appid, conf: conf });
    });
  }
});