/*Получение canvas*/
let canvas = document.querySelector("#paint");
/*Получение контекста canvas*/
let ctx = canvas.getContext('2d');

/*ИНСТРУМЕНТЫ*/
/*Какой инструмент выбран*/
let tool = document.querySelector(".tool");
/*Выбор цвета*/
let color = document.querySelector(".color");
/*Карандаш*/
let pencil = document.querySelector(".pencil");
/*Линия*/
let line = document.querySelector(".line");
/*Ластик*/
let eraser = document.querySelector(".eraser");
/*Очиска холстка*/
let clear = document.querySelector(".clear");
/*Толщина*/
let range = document.querySelector(".range");

/*ФУНКЦИИ ИНСТРУМЕНТОВ*/
/*Функция карандаша*/
pencil.onclick = function() {

	canvas.style.cursor = 'url(image/pencil.png), auto';
	tool.innerText = "Карандаш:";

	canvas.onmousedown = function() {

		this.onmousemove = function(event) {
			let x = event.offsetX;
			let y = event.offsetY;
			ctx.fillRect(x, y+30, range.value, range.value);
			ctx.fillStyle = color.value;
			ctx.fill();
		}

	}

}
/*Функция ластика*/
eraser.onclick = function() {

	canvas.style.cursor = 'url(image/eraser.png), auto';
	tool.innerText = "Ластик:";

	canvas.onmousedown = function() {

		this.onmousemove = function(event) {
			let x = event.offsetX;
			let y = event.offsetY;
			ctx.fillRect(x, y+30, range.value, range.value);
			ctx.fillStyle = "white";
			ctx.fill();
		}

	}

}
/*Функция, нужная для того чтобы после отжима мыши ничего не рисовалось*/
canvas.onmouseup = function() {
	this.onmousemove = null;
}
/*Функция, показывающая размер кисти*/
range.onchange = function() {
	let rangeValue = document.querySelector(".range-value");
	rangeValue.innerText = range.value;
}

/*Функция очистки всего холста*/
clear.onclick = function() {
	ctx.clearRect(0, 0, 1200, 700);
	tool.innerText = "Холст очищен:";
}