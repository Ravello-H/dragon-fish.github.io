$(function () {
  /**
   * 技能悬浮窗
   * API from 最终幻想XIV中文维基
   */
  $('.ff14-action').each(function () {
    var $this = $(this),
      action = $this.attr('data-action') || $this.text();
    if (action === '') return;
    /** 从灰机wiki获取数据 */
    $.ajax({
      url: 'https://ff14.huijiwiki.com/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'parse',
        preview: true,
        title: 'API',
        prop: 'text',
        text: '{{技能|' + action + '|logos}}',
        disablelimitreport: true,
        format: 'json'
      }
    }).done((data) => {
      /** 格式化结果并替换html */
      var text = data.parse.text['*'],
        actionId = $(text).find('.item-link').attr('data-name'),
        icon = $(text).find('a').attr({ href: 'javascript:void(0);', title: '', class: 'ff14-action-icon', 'data-name': actionId });
      $this.html(icon);
      /** 添加tooltip */
      $this.find('.ff14-action-icon')
        // 鼠标移入
        .mouseenter(function (e) {
          var toolTip = $(this).data('tooltip');
          if (toolTip === undefined) {
            // 获取详细信息并缓存
            $.ajax({
              url: 'https://ff14.huijiwiki.com/w/api.php',
              dataType: 'jsonp',
              data: {
                action: 'parse',
                preview: true,
                title: 'API',
                prop: 'text',
                text: '{{ActionTooltip/Show|' + actionId + '}}',
                disablelimitreport: true,
                format: 'json'
              }
            }).done((data) => {
              var text = data.parse.text['*'];
              $(this).data('tooltip', text);
              $('#action-tooltip-' + actionId).html(text);
            });
          }
          // 显示tooltip
          var left = $(this).offset().left + $(this).width();
          var top = $(this).offset().top + (e.pageY - $(this).offset().top);
          $('body').append(
            $('<div>', { class: 'ff14-tooltip', id: 'action-tooltip-' + actionId })
              .css({
                top: function () {
                  //当前窗口的高度+当前窗口滚动条的高度-top=鼠标当前位置离底部的距离也就是底部的高度
                  var bottom = $(window).height() + $(document).scrollTop() - top;
                  //如果底部的高度小于或等于当前要显示窗口的高度，用要显示窗口的高度-bottom=正常显示将会溢的高度
                  if (bottom <= $(this).height()) {
                    //用top - 显示窗口的高度 - 要溢的高度 = 最终要显示的top值
                    top -= $(this).height() - bottom; //鼠标在最底或最顶部时，显示窗口不被溢出
                  }
                  return top;
                },
                left: left
              })
              .html(toolTip || '[技能ID' + actionId + '] 加载中……')
              .mouseout(function () {
                $(this).remove();
              })
          );
        })
        // 鼠标移出，隐藏tooltip
        .mouseout(function () {
          $('#action-tooltip-' + actionId).remove();
        })
    });
  });

  /**
   * 物品悬浮窗
   * By FFCafe
   */
  $.getScript('https://cdn.jsdelivr.net/npm/@thewakingsands/kit-tooltip/dist/bundle.js').then(() => {
    CafeKitTooltip.initTooltip({
      context: {
        apiBaseUrl: 'https://cafemaker.wakingsands.com',  // xivapi 或 cafemaker 的 url；最后不要有斜线
        iconBaseUrl: 'https://cafemaker.wakingsands.com/i', // 图标 cdn 的 url；最后不要有斜线
        defaultHq: true,  // 是否默认显示 HQ 数据
        hideSeCopyright: true, // 是否隐藏 SE 版权信息
      },
      links: {
        detectWikiLinks: true,  // 是否自动识别 wiki 物品链接
        itemNameAttribute: 'ff14-item', // 自定义悬浮窗时，声明物品名字的属性
        itemIdAttribute: 'ff14-item-id', // 自定义悬浮窗时，声明物品 ID 的属性
        rootContainer: document.body, // 监控的根元素
      },
    });
  });

  /**
   * 样式表
   */
  $('head').append(
    $('<link>', { rel: 'stylesheet', href: '/=statics/ff14-tools.css' })
  );

  console.info('FFXIV Tools 已加载。');
});