/*
CREATE THE MENU ELEMENTS FOR BORDER - BOX
**************************************
*/

menu = document.createElement('menu');
menu.innerHTML = "<strong style='color:#295DEC;'> DUDE TOOLS </strong><label for='colorWell'>Color </label><input type='color' style='padding:0;' id='colorWell'><label for='colorWidth'>Width </label><input type='number' min='0' step='1' value='3' style='padding:0;width:50px;' id='colorWidth'>";
document.body.appendChild(menu);
menu.style.position = "fixed";
menu.style.top = "0";
menu.style.zIndex = "999";
menu.style.width = '150px';
menu.style.padding = '16px';
menu.style.marginLeft = '16px';
resetMenuStyle();
/*
***************************************
*/

//Color and Width variables
let colorWell;
let colorWidth;

//setting values

//Color
colorWell = document.querySelector("#colorWell");
colorWell.addEventListener("change", updateColor, false);
colorWell.select();
//Width
colorWidth = document.querySelector("#colorWidth");
colorWidth.addEventListener("change", updateWidth, false);
colorWidth.select();

//Change color function border
function updateColor(event) {
  var el = document.querySelectorAll(':not(menu > *)');
  for(var i=0; i < el.length;i++){
        el[i].style.boxSizing = 'border-box';
        el[i].style.outline = colorWidth.value + 'px solid ' + event.target.value;
    }
  
  resetMenuStyle();
}

//Change width function border
function updateWidth(e) {
  console.log(e.target.value)
  var el = document.querySelectorAll(':not(menu > *)');
  for(var i=0; i < el.length;i++){
        el[i].style.boxSizing = 'border-box';
        el[i].style.outline = e.target.value + 'px' + ' solid' + colorWell.value;
    }
  resetMenuStyle();
}

//Set null to the menu border box style
function resetMenuStyle(){
  menu.style.outline = '1px solid #295DEC';
}