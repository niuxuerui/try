 function rem(value) {
     //value  参数为要适应的屏幕宽 
     //设置适应任意尺寸的屏幕的rem单位
     document.documentElement.style.fontSize = window.screen.width / value + "px";
     window.onresize = function() {
         document.documentElement.style.fontSize = window.screen.width / value + "px";
     };
     // rem(3.2); //比如设置适应320的屏幕的rem单位
 }