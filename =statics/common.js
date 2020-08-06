/** 
 * 此处的JavaScript会做用于全站
 */
/** 针对iframe优化 **/
!(function () {
  if (window.self !== window.top) {
    $('body').addClass('iframe');
    $('a').each(function () {
      var $this = $(this),
        href = $this.attr('href');
      if (href === undefined || href.substr(0, 11) === 'javascript:' || href.substr(0, 1) === '#') return;
      $this.attr('target', '_blabk');
    });
  }
}());

/**
 * Date format
 */
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 //月份
    'd+': this.getDate(),                      //日
    'h+': this.getHours(),                     //小时
    'm+': this.getMinutes(),                   //分
    's+': this.getSeconds(),                   //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds()               //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  return fmt;
}

/** 404页面的随机骚话 **/
!(function () {
  function random404() {
    var errorMsg = [
      '就像装在游戏机盒子里的作业本一样没有人喜欢！',
      // FF14骚话
      '就像闪耀登场释放天辉的白魔法师一样没有人喜欢！',
      '就像冰4火4一个慢动作的黑魔法师一样没有人喜欢！',
      '就像耗尽了了以太超流的学者一样没有人喜欢！',
      '就像忘记了每分钟背刺的忍者一样没有人喜欢！',
      '就像进本后跳999接受LB需求退本一气呵成的龙骑一样没有人喜欢！',
      '就像成天把拉拉菲尔族成为食材的人一样没有人喜欢！',
      '就像死而不僵状态下的暗黑骑士一样没有人喜欢！',
      '就像无论如何也触发不了诗心的诗人一样没有人喜欢！'
    ];
    return errorMsg[Math.floor(Math.random() * errorMsg.length)];
  }
  $('.404-random').text(random404()).click(function () { this.innerText = random404(); });
})();

/**
 * Page TOC
 */
!(function () {
  function showToc() {
    $('.page-toc-container').addClass('show');
    $('.page-toc-toggle-link').text('折叠');
    localStorage.setItem('TOC-toggle', 'show');
  }
  function hideToc() {
    $('.page-toc-container').removeClass('show');
    $('.page-toc-toggle-link').text('展开');
    localStorage.setItem('TOC-toggle', 'hide');
  }
  if (localStorage.getItem('TOC-toggle') === 'show') {
    showToc();
  }
  $('.page-toc-toggle-link').click(() => {
    if ($('.page-toc-container').hasClass('show')) {
      hideToc();
    } else {
      showToc();
    }
  });
})();

/** Tabber **/
!(function ($) {
  $.fn.tabber = function () {
    return this.each(function () {
      // create tabs
      var $this = $(this),
        tabContent = $this.children('.tabbertab'),
        nav = $('<ul>').addClass('tabbernav'),
        loc;

      tabContent.each(function () {
        var anchor = $('<a>').text(this.title).attr('title', this.title).attr('href', '#');
        $('<li>').append(anchor).appendTo(nav);

        // Append a manual word break point after each tab
        nav.append($('<wbr>'));
      });

      $this.prepend(nav);

			/**
			 * Internal helper function for showing content
			 * @param  {string} title to show, matching only 1 tab
			 * @return {bool} true if matching tab could be shown
			 */
      function showContent(title) {
        var content = tabContent.filter('[title="' + title + '"]');
        if (content.length !== 1) { return false; }
        tabContent.hide();
        content.show();
        nav.find('.tabberactive').removeClass('tabberactive');
        nav.find('a[title="' + title + '"]').parent().addClass('tabberactive');
        return true;
      }

      // setup initial state
      var tab = decodeURI(location.hash.replace('#', ''));
      if (tab === '' || !showContent(tab)) {
        showContent(tabContent.first().attr('title'));
      }

      // Respond to clicks on the nav tabs
      nav.on('click', 'a', function (e) {
        var title = $(this).attr('title');
        e.preventDefault();
        if (history.pushState) {
          history.pushState(null, null, '#' + encodeURIComponent(title));
          switchTab(title);
        } else {
          location.hash = '#' + encodeURIComponent(title);
        }
      });

      $(window).on('hashchange', function (event) {
        switchTab(event);
      });

      function switchTab(event) {
        var tab = decodeURIComponent(location.hash.replace('#', ''));
        if (!tab.length) {
          showContent(tabContent.first().attr('title'));
        }
        if (nav.find('a[title="' + tab + '"]').length) {
          showContent(tab);
        }
      }

      $this.addClass('tabberlive');
    });
  };
}(jQuery));
// 界面加载完毕后配置tabber
$(document).ready(function () {
  $('.tabber').tabber();
  $('.tabbernav li').addClass('waves-effect');
});

/** 日期格式化 **/
window.dateFormat = function (fmt) {
  var date = new Date();
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),
    "m+": (date.getMonth() + 1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "i+": date.getMinutes().toString(),
    "s+": date.getSeconds().toString()
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

/**
 * URL Param
 */
window.urlParam = function (variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}

/** 鼠标特效 **/
$('body').append(
  $('<script>', { src: '/=statics/fireworks.js' })
);

/**
 * 面包屑
 */
!(function () {
  // 是否为页面
  if ($('.page-article').length < 1) return;
  // 获取路径，去头去尾
  var path = location.pathname.split('/');
  var pathurl = {};
  path.splice(0, 1)
  path.splice(-1, 1);

  // 添加块级元素
  $('#main > .page-header').after(
    $('<div>', { class: 'bread-crumb-container container fade-scale', /* style: 'display: none' */ }).append(
      $('<ul>', { class: 'bread-crumb' }).append(
        $('<li>', { class: 'home' }).append(
          $('<i>', { class: 'icon icon-home' }),
          $('<a>', { href: '/', text: '首页' })
        )
      )
    )
  );
  // 格式化URL
  for (let i = 0; i < path.length; i++) {
    var thisPath = '';
    if (i > 0) {
      thisPath = pathurl[(i - 1)]['url'] + path[i] + '/';
    } else {
      thisPath = '/' + path[i] + '/';
    }
    pathurl[i] = {
      name: path[i],
      url: thisPath
    }
  }

  // 添加到面包屑
  $.each(pathurl, function (k, v) {
    $('.bread-crumb').append(
      $('<li>', { class: 'path' }).append(
        $('<a>', { href: v.url, text: v.name })
      )
    )
  });

  $('.bread-crumb li:last').addClass('thispage').html(function () {
    var $this = $(this);
    return $('<strong>').html($this.find('a').text());
  });

  // $('.bread-crumb-container').fadeIn(800);
  window.addEventListener('beforeunload', function () {
    $('.bread-crumb-container').removeClass('in');
  });
}());

/**
 * 表格移动优化
 */
!(function () {
  $('table.widetable').wrap('<div class="widetable-container"></div>');
})();

/**
 * 
 */
!(function () {
  $('.github-commit > span').text(function () {
    return $(this).text().substring(0, 7);
  });
})();

/**
 * 2020 红莲节
 */
!(function () {
  $.getScript('https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js').then(() => {
    $('.content-header')
      .attr({
        'data-parallax': 'scroll',
        'data-image-src': '/=statics/images/2020Moonfire.jpg'
      })
      .parallax({
        positionY: Boolean($(window).width() > 865) ? '-100px' : 'center',
        zIndex: 1
      });
    $('.footer .top').append(
      $('<p>').append(
        '关于背景图片 © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.',
        ' ',
        $('<a>', { href: 'https://static.web.sdo.com/jijiamobile/pic/ff14/200806moonfire/pc/9_-qUeqdkyyjHc08zThphJ-4dA.jpg', target: '_blank', text: 'Final Fantasy XIV Moonfire Faire' })
      )
    )
  });
})();