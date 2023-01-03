var korzina=JSON.parse(localStorage.getItem("korz"))||[]
var karts=""
for(var t of korzina){
	karts=karts+korzeelement(t)
}
document.getElementById("kart0").innerHTML=karts

function korzeelement(item){
	return`<section class="f1">
	<div class="img">
		<img src="${item.img}" width="215px" >
	</div>
	<div class="harak">
		<div >
			Цвет______________
		</div>
		<div class="k1">
			Принт____________
		</div >
		<div class="k1">
			Тип________________
		</div>
		<div class="k2" >
			Коллекция________
		</div>
		<div class="k1">
			Цена______________
		</div>
		<div class="k1">
			Размер____________
		</div>
	</div>
	<div class="harak">
		<div >
				<img src="img/bel.png" width="20px" height="20px">
		</div>
		<div class="k1">
			${item.title}
		</div >
		<div class="k1">
			Футболки
		</div>
		<div class="k2" >
			Лето
		</div>
		<div class="k1">
			${item.newprice}
		</div>
		<div class="k1">
			М
		</div>
		
	</div>
</section>`
}