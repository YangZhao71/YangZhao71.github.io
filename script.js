var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

function addList() {
	if( input.value.length > 0) {
		var div = document.createElement("div");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		li.addEventListener("click", function() {
			this.classList.toggle("done");
		});
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("delete"));
		deleteButton.addEventListener("click", function() {
			this.parentElement.innerHTML = "";
		});
		div.appendChild(li);
		div.appendChild(deleteButton);
		ul.appendChild(div);
		input.value = "";
	}
}

function addListAfterKeypress(event) {
	if (event.keyCode == 13) {
		addList();
	}
}

button.addEventListener("click", addList);
input.addEventListener("keypress", addListAfterKeypress);

for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}

for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", function() {
		this.parentElement.innerHTML = "";
	});
}


