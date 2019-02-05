function President(){
	this.name = null;
	this.remarks = null;
	this.photo = null;
}

President.prototype.setName = function(name) {
	this.name = name;
}

President.prototype.setRemarks = function(remarks){
	this.remarks = remarks;
}

President.prototype.setPhoto = function(photo){
	this.photo = photo;
}

President.prototype.getName = function() {
	return this.name;
}

President.prototype.getRemarks = function(){
	return this.remarks;
}

President.prototype.getPhoto = function(){
	return this.photo;
}


function PresidentData(){}
PresidentData.data = [
	  ["Soekarno", "Presiden Pertama RI", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/418px-Presiden_Sukarno.jpg"],
	  ["Soeharto", "Presiden Kedua RI", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/President_Suharto%2C_1993.jpg/468px-President_Suharto%2C_1993.jpg"],
	  ["Bacharuddin Jusuf Habibie", "Presiden Ketiga RI", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bacharuddin_Jusuf_Habibie_official_portrait.jpg/520px-Bacharuddin_Jusuf_Habibie_official_portrait.jpg"],
	  ["Abdurrahman Wahid", "Presiden Keempat RI", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/President_Abdurrahman_Wahid_-_Indonesia.jpg/486px-President_Abdurrahman_Wahid_-_Indonesia.jpg"],
	  ["Megawati Soekarnoputri", "Presiden Kelima RI", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/President_Megawati_Sukarnoputri_-_Indonesia.jpg/540px-President_Megawati_Sukarnoputri_-_Indonesia.jpg"],
	  ["Susilo Bambang Yudhoyono", "Presiden Keenam RI", "https://upload.wikimedia.org/wikipedia/commons/5/58/Presiden_Susilo_Bambang_Yudhoyono.png"],
	  ["Joko Widodo", "Presiden Ketujuh RI", "https://upload.wikimedia.org/wikipedia/commons/1/1c/Joko_Widodo_2014_official_portrait.jpg"]
	]

PresidentData.getListData = function(){
		var list = new Array();
		for (var i = 0; i < PresidentData.data.length; i++) {
			var president = new President();
			president.setName(PresidentData.data[i][0]);
			president.setRemarks(PresidentData.data[i][1]);
			president.setPhoto(PresidentData.data[i][2]);

			list.push(president);
		}

		return list;
	}

var list = PresidentData.getListData();

for (var i = 0; i < list.length; i++) {
	addListItem(list[i]);
}

function addListItem(listItem){
	var body = document.querySelector("body");

	var divCol = document.createElement("div");
	divCol.setAttribute("class","col");

	var divCard = document.createElement("div");
	divCard.setAttribute("class","card");

	var imgPhoto   = document.createElement("img");
	var txtName    = document.createElement('h3');
	var txtRemarks = document.createElement('p');

	var president = listItem;

	imgPhoto.setAttribute("src", president.getPhoto());
	txtName.textContent = president.getName();
	txtRemarks.textContent = president.getRemarks();

	body.appendChild(divCol);
	divCol.appendChild(divCard);
	divCard.appendChild(imgPhoto);
	divCard.appendChild(txtName);
	divCard.appendChild(txtRemarks);
}

