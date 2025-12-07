$(document).ready(function(){
  $('.tab-nav li a').click(function(e){
    e.preventDefault(); // 링크의 기본 동작 방지

    // 모든 탭 메뉴의 active 클래스 제거
    $('.tab-nav li a, .tab-content div').removeClass('active');

    // 현재 클릭된 탭 메뉴에 active 클래스 추가
    $(this).addClass('active');

    // 해당 탭 내용에 active 클래스 추가
    var target = $(this).attr('href');
    $(target).addClass('active');
  });
});