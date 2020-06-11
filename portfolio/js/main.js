'use strict';

{

// スムーススクロール
const paginations = document.querySelectorAll(".pagination a");
paginations.forEach(pagination => {
  pagination.addEventListener("click", e => {
    e.preventDefault();
    const targetId = e.target.hash;
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Intersection Observer
const sections = document.querySelectorAll(".section");
const observerRoot = document.querySelector(".fullPageScroll");
const options = {
  root: observerRoot,
  rootMargin: "-50% 0px",
  threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach(section => {
  observer.observe(section);
});

/**
 * 交差したときに呼び出す関数
 * @param entries - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
 */
function doWhenIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activatePagination(entry.target);
    }
  });
}

/**
 * ページネーションの大きさを変える関数
 * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
 */
function activatePagination(element) {
  const currentActiveIndex = document.querySelector("#pagination .active");
  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }
  const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
  newActiveIndex.classList.add("active");
}

let images = [
	'images/1.jpg',
	'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
	];

let currentIndex = 0;

let flg = 0;

let timeoutId;

function slideshow() {
	timeoutId = setTimeout(() => {
		currentIndex += 1;
		if (currentIndex === images.length) {
			currentIndex = 0;
			clearTimeout(timeoutId);
		}
		if (flg == 0) {
			flg = 1;
		} else {
			flg = 0;
		}
		if (flg == 0){
			document.getElementById("id1").src = images[currentIndex];
			document.getElementById("id1").className = "fadein";
			document.getElementById("id2").className = "fadeout";
		} else {
			document.getElementById("id2").src = images[currentIndex];
			document.getElementById("id1").className = "fadeout";
			document.getElementById("id2").className = "fadein";
		}
		slideshow();
	}, 5000);
}
slideshow();

function popupImage1() {
  var popup = document.getElementById('js-popup1');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg1');

  var blackBg = document.getElementById('js-black-bg1');
  var closeBtn = document.getElementById('js-close-btn1');
  var showBtn = document.getElementById('js-show-popup1');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
function popupImage2() {
  var popup = document.getElementById('js-popup2');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg2');

  var blackBg = document.getElementById('js-black-bg2');
  var closeBtn = document.getElementById('js-close-btn2');
  var showBtn = document.getElementById('js-show-popup2');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
function popupImage3() {
  var popup = document.getElementById('js-popup3');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg3');

  var blackBg = document.getElementById('js-black-bg3');
  var closeBtn = document.getElementById('js-close-btn3');
  var showBtn = document.getElementById('js-show-popup3');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage1();
popupImage2();
popupImage3();

/* ----- option ----- */
var id = ['type1','type2','type3','type4']; //指定するidを全て配列で渡す
/* ----- option ----- */
var count = 0;
var tx = [];
var txCount = [];
 
window.onload = function(){
  hihyoji();
  mijisu();
  hyouji();
}
 
function mijisu(){ // 文字数カウントの初期設定
  for(let n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}

function hihyoji(){ // 要素をtx[i]に保持させ、非表示にする
  for(let i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = "";
  }
}
 
function hyouji(){ //　一文字ずつ表示させる
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] )+"_"; // テキストの指定した数の間の要素を表示
    if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
        setTimeout(() => {
        hyouji();
    }, 100);// 次の文字へ進む
    } else {
        id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
        count++; // 次の段落に進む為のカウントアップ
        if(count != id.length){ // id数が最後なら終了
            setTimeout(() => {
            hyouji();
        },1000); // 次の段落へ進む
        }
    }
}

// ハンバーガー

function hambarger() {
  let nav = document.getElementById('navArea');
  let btn = document.querySelector(".toggle_btn");
  let mask = document.getElementById('mask');
  let open = 'open';

  btn.addEventListener('click', function() {
    if (nav.className != 'open') {
      nav.classList.add(open);
    } else {
      nav.classList.remove(open);
    }
  });

  mask.addEventListener('click', function() {
    nav.classList.remove(open);
  });
}

hambarger();

}
