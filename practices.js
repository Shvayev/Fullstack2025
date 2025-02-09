function change_title () { h1.innerHTML = "goodbye world!"; } 
function change_title(){ document.getElementsByTagName('h1')[0].textContent = 'you clicked!'; }
function dissapear(){ document.getElementById('lorem').style.display = 'none'; }
function darkmode(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'papayawhip';
    document.getElementsByTagName('h1')[0].style.color = 'papayawhip';
    document.getElementsByTagName('img')[0].style.display = 'none';
    document.getElementsByTagName('img')[1].style.display = 'block';           }
function lightmode(){
    document.body.style.backgroundColor = 'papayawhip';
    document.body.style.color = 'black';
    document.getElementsByTagName('h1')[0].style.color = 'black';
    document.getElementsByTagName('img')[1].style.display = 'none'; 
    document.getElementsByTagName('img')[0].style.display = 'block';           }