console.log("test");

function print_contact (){
	var sk="skype : helper"
	var tg="telegram : @halper"
	var	tel="tel: 8995345235"
	var name="кАтя"
	alert("контактные данные пользователя " + name + "\n" + sk +'\n' + tg +'\n' + tel);
	alert ( ' привет  ');
	
}

function calc () {
	var a=  parseInt ( prompt ("Введите первое число") ) ;
	var b=  parseInt ( prompt ("Введите второе число") ) ;
	var c = a + b ;
	var d = a - b ;
	var t = a * b ;
	var r = a /	b ;
	
	
	alert ( ' Сложение : ' + c + '\n' + ' Вычитание : ' + d + '\n'+' Умножение : ' + t + '\n' + ' Деление : ' + r ) ;
	
	var text =prompt ('Введите текст :');
	alert( text.indexOf( 'текст'));
	
	var str= "zoom treg";
	str=str.replace('zoom','skype');
	str=str.toLowerCase ();
	alert(str);
}
function changecolor(){
	
	a=document.getElementById ("bt1");
	a.style.color="black";
	a.style.fontfamily="Roboto";
	a.style.borderRadius ="0px";
	
	b=document.getElementById("g1");
	b.style.color="green";
	b.style.boarderRadius ="0px";
	B.style.padding="20px";
	
}


function change_style(){
	alert("ghbdtn");
	b=document.getElementbyId('button5');
	if (window.getComputedStyle(b).backgroundColor=="rgb(255,0,0)")
	{
		b.style.backgroundColor="green";
	}
	else
		b.backgroundColor="red";
	
	
	if(window.getComputedStyle(b).borderRadius != "0px")
	{
		b.style.borderRadius ="0px" ;
	}
    else	
		b.style.borderRadius ="10px" ;
	
	
	if (window.getComputedStyle(b).padding !="20px")
	{
		b.style.padding="20px";
	}
	else
		b.style.padding="5px";
	
    }
	
	function test_us(){
		var a= 10;
		var b =20;
		
		if (a>b && b==20)
		{
			alert('Условие верно');
		}
		else{
			alert('УСЛОВИЕ НЕ ВЕРНО');
		}
			
		if (a==b || a !=15)
		{
			alert('Условие верно 2')
		}
	}
	
var tsh=[
	{img:"img/color-9.jpg",title:"2020 давай",oldprice:4300,newprice:"499", id:0},
	{img:"img/color-7.jpg",title:"2020 давай",oldprice:4300,newprice:"499", id:1},
	{img:"img/color-8.jpg",title:"2020 давай",oldprice:4300,newprice:"499", id:2}

]
function kart(t){
	return `<div class="kart">
	<img src="${t.img}" width="215px" >
		<diV class="n">${t.title} </div>
		<div  class="c3">
			<div class="m">M</div>
			<div class="zena">
					<div class="zena1">
						<s>${t.oldprice}</s>
					</div>
					<div class="zena2">
					${t.newprice}
					</div>
			</div>
		</div>
			
				<center><button class="bt" onclick="add(${t.id})"> ДОБАВИТЬ В ЗАКАЗ</button></center>
    </div>`
}

var karts=""
for(var t of tsh){
	karts=karts+kart(t)
}
document.getElementById("id").innerHTML=karts

function add(id){
	var t=tsh.find(el=>id==el.id)
	var korzina=JSON.parse(localStorage.getItem("korz"))||[]
	var elem=korzina.findIndex(el=>t.id==el.id)
	if(elem>=0){
		korzina[elem].count=korzina[elem].count+1
		
	}
	else{t.count=1 
		korzina.push(t)}
		localStorage.setItem("korz",JSON.stringify(korzina))
}


function star (index) {
	var stars=document.querySelectorAll(".stars img")
	for (var i=0; i<stars.length; i++){
		stars[i].src="./img/star_2.png"
	}
	for (var i=0; i<index; i++){
		stars[i].src="./img/star_1.png"
	}

	
}

function showalert (){
	document.querySelector(".fok").style.display="block"

}

function offalert (){
	document.querySelector(".fok").style.display="none"
}
 
var gf=document.querySelector('form')
console.log(gf)

gf.addEventListener('submit',function(event){
event.preventDefault()
var name=event.target.elements.name.value  
var surname=event.target.elements.surname.value
var fam=event.target.elements.fam.value
var mail=event.target.elements.mail.value
var phone=event.target.elements.phone.value
var sity=event.target.elements.sity.value
alert(name+"\n"+surname+"\n"+fam+"\n"+mail+"\n"+phone+"\n"+sity)
})
 

