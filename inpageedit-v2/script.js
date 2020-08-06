/**
 * 服务状态
 */
!(function () {
  $('.ipe-status').html(`
  <div class="card banner-card">
  <a href="/inpageedit-v2/status/" class="post-more waves-effect waves-button">查看详情</a>
  <div class="big"><span class="IPE-logo font-ps"><span class="IPE-logo-1">In</span><span class="IPE-logo-2">Pag<span>e</span></span><span class="IPE-logo-3">Edit</span><span class="IPE-logo-4">v2</span></span> 服务状态</div>
  <hr style="margin: 12px 0">
  <div>稳定版 <span class="status-tag" id="latest-version-stable">获取中……</span></div>
  <div>开发版 <span class="status-tag" id="latest-version-dev">获取中……</span></div>
  <div>CDN 缓存版本 <span class="status-tag" id="cdn-cache">获取中……</span></div>
  <div>Analysis 服务状态 <span class="status-tag" id="analysis-status">获取中……</span></div>
  </div>
  `);
  var compareCount = 0;
  $.getScript('https://cdn.jsdelivr.net/gh/dragon-fish/inpageedit-v2@master/script.min.js').done(function () {
    // $('#cdn-cache').text('test').addClass('ok');
    $('#cdn-cache').text(InPageEdit.version).addClass('ok');
    compare();
  }).fail(function () {
    $('#cdn-cache').text('服务中断').addClass('error');
    // $('#cdn-cache').text();
  });
  $.get('https://doc.wjghj.cn/inpageedit-v2/analysis/api/index.php').done(function (data) {
    $('#analysis-status').text('服务正常').addClass('ok');
  }).fail(function () {
    $('#analysis-status').text('服务中断').addClass('error');
  });
  $.getScript({
    // url: 'https://dragon-fish.github.io/inpageedit-v2/update-logs/latest.js',
    url: '/inpageedit-v2/update-logs/latest.js',
  }).done(function () {
    var stable = InPageEdit.getLatestVersion('stable'),
      dev = InPageEdit.getLatestVersion('dev');
    $('#latest-version-stable').text(stable).addClass('ok');
    $('#latest-version-dev').text(dev);
    if (stable !== dev) {
      $('#latest-version-dev').addClass('dev');
    } else {
      $('#latest-version-dev').addClass('ok');
    }
    compare();
  }).fail(function () {
    $('#latest-version-stable, #latest-version-dev').text('状态未知').addClass('warning');
  });
  function compare() {
    compareCount++;
    if (compareCount >= 2) {
      if ($('#cdn-cache').text() !== $('#latest-version-stable').text()) {
        $('#cdn-cache').removeClass('ok').addClass('warning');
      }
    }
  }
})();