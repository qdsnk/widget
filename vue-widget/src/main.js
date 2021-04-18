import '@/styles/reset.css';
import '@/styles/main.css';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// let tab1 = document.getElementById('tab-1'),
//     yesBtn1 = document.getElementById('yes-btn1'),
//     noBtn1 = document.getElementById('no-btn1'),
//     tab11 = document.getElementById('tab-1-1'),
//     // input11 = document.getElementById('input1-1'),
//     confirm11 = document.getElementById('confirm1-1'),
//
//     tab2 = document.getElementById('tab-2'),
//     yesBtn2 = document.getElementById('yes-btn2'),
//     noBtn2 = document.getElementById('no-btn2'),
//     tab21 = document.getElementById('tab-2-1'),
//     // input21 = document.getElementById('input1-1'),
//     confirm21 = document.getElementById('confirm2-1'),
//
//     tabResult = document.getElementById('tab-result');
//
// tab1.style.display = "block";
//
// yesBtn1.onclick = function () {
//   tab1.style.display = "none";
//   tab2.style.display = "block";
// };
//
// noBtn1.onclick = function () {
//   tab1.style.display = "none";
//   tab11.style.display = "block";
// };
//
// confirm11.onclick = function () {
//   tab1.style.display = "none";
//   tab11.style.display = "none";
//   tab2.style.display = "block";
// };
//
// yesBtn2.onclick = function () {
//   tab1.style.display = "none";
//   tab2.style.display = "none";
//   tab11.style.display = "none";
//   tabResult.style.display = "block";
// };
//
// noBtn2.onclick = function () {
//   tab1.style.display = "none";
//   tab11.style.display = "none";
//   tab2.style.display = "none";
//   tab21.style.display = "block";
// };
//
// confirm21.onclick = function () {
//   tab1.style.display = "none";
//   tab11.style.display = "none";
//   tab2.style.display = "none";
//   tab21.style.display = "none";
//   tabResult.style.display = "block";
// };




//2-й вариант вывода
// var currentTab = 0,
//     // btn = document.getElementsByClassName('btn'),
//     yesBtn = document.getElementById('yes-btn'),
//     noBtn = document.getElementById('no-btn'),
//     yesBtn2 = document.getElementById('yes-btn2'),
//     noBtn2 = document.getElementById('no-btn2'),
//     x = document.getElementsByClassName("tab");
//
// showTab(currentTab);

// function showTab(n) {
//   x[n].style.display = "block";
// }
//
// yesBtn.onclick = function () {
//   x[currentTab].style.display = "none";
//   currentTab = currentTab + 2;
//   showTab(currentTab);
// };
//
// noBtn.onclick = function () {
//   x[currentTab].style.display = "none";
//   currentTab = currentTab + 1;
//   showTab(currentTab);
// };
//
// yesBtn2.onclick = function () {
//   x[currentTab].style.display = "none";
//   currentTab = currentTab + 1;
//   showTab(currentTab);
// };
//
// noBtn2.onclick = function () {
//   x[currentTab].style.display = "none";
//   currentTab = currentTab + 1;
//   showTab(currentTab);
// };