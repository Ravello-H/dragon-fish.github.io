!(function () {
  // 查看更多 ﹀
  $('h2+.card:not(.page-toc-container)').addClass('version-card');
  $.each($('.version-card'), (k, v) => {
    if (k >= 5) {
      var $this = $(v);
      $this.addClass('old-version').attr('data-index', k);
      $this.children().css('display', 'none');
      $this.find('p:first').show();
      $this.prepend(
        $('<span>', { class: 'show-more' }).append(
          ' ',
          $('<a>', { href: 'javascript:;', text: '查看更多 ›', class: 'post-more waves-effect waves-button' }).click(() => {
            $this.children().show(200);
            $this.find('.show-more').fadeOut(200);
          })
        )
      )
    }
  });
})();