//Lab7 - Working with the Document Object Model
//task 1:
document.getElementById("mainTitle").innerHTML = "Learning about the Document Object Model!";
//task 2:
document.getElementById("mainTitle").style.textAlign = "center";
//task 3:
document.getElementById("image1").title = "JavaScript 1";
//task4:
document.getElementById("image1").setAttribute('align', 'right');

//task 5:
var newLi = document.createElement("li");
var newLiInfo = document.createTextNode("August 1996");
newLi.appendChild(newLiInfo);
document.getElementsByTagName("li")[0].appendChild(newLi);


//task6:
var newLi = document.createElement("li");
var newLiInfo = document.createTextNode("1.8.2 June 22, 2009");
newLi.appendChild(newLiInfo);
var listLength = document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[listLength - 1].appendChild(newLi);


//task7:
var yearList = document.getElementsByTagName("li");
for (var i = 1; i <= yearList.length - 1; i++) {
    yearList[i].innerHTML = yearList[i].innerHTML.replace('9999', '2005');
}


//task8:
document.write(document.getElementsByTagName("li").length);
