var deleteLog = false;

$(document).ready(function () {
  $('#pagepiling').pagepiling({
    menu: '#myMenu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
    sectionsColor: ['#479ea4', '#479ea4', '#479ea4', '#479ea4'],

    afterLoad: function (achortlink, index) {
      if (index > 1) {
        $('header').addClass('border');
      } else {
        $('header').removeClass('border');
      }
    }
  });
});

