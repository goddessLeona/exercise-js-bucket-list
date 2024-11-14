//Uppgift 1

/*Create a <p> using the createElement method. When you have a reference to your new element,
 change its innerText to something that you would like to have on your bucket list, and then 
 append it to the DOM with the appendChild method. Where does this element go? How can you 
 get it do be added directly after the already existing <p>.*/

 const ptag  = document.createElement("p");
 const ptag2 = document.createElement("p");
 const ptag3 = document.createElement("p");
 const ptag4 = document.createElement("p");

 ptag.innerText = "Plant many trees";
 ptag2.innerText = "Have a garden";
 ptag3.innerText = "Get a small jacuzy or bathtube";
 ptag4.innerText = "Adopt a cat";

 const newlist = document.querySelector(".list");
 
newlist.appendChild(ptag);
newlist.appendChild(ptag2);
newlist.appendChild(ptag3);
newlist.appendChild(ptag4);

// Uppgift 2

/*Create another <p> with an item you would like to have on you bucket list. 
This time add it to the DOM, right after your existing <p>-tags with the help of the 
insertAdjecentElement method. This method accepts a position argument. 
Which value should that argument have?

afterbegin
afterend
beforebegin
beforeend

Try them out!
*/

const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

p.innerText = "more dreams";
p2.innerText = "Life energie";
p3.innerText = "Lots of pinguins";
p4.innerText = "flowers";

newlist.insertAdjacentElement("afterbegin",p) // Now the new item on list came 1 over the last item on list
//newlist.insertAdjacentElement("afterend", p2) // end outside the list
//newlist.insertAdjacentElement("beforebegin", p3)// end outside the list
newlist.insertAdjacentElement("beforeend", p4) //Now the new item on the list comes 1 under the last item on list

newlist.insertAdjacentElement("beforeend",p3);
newlist.insertAdjacentElement("beforeend",p2);

// Uppgift 3

/* innerHTML is an interesting property that exists on HTML elements. With that property we can 
get and set the inner HTML of a HTML element very easy. Try to get (or do you already have it?) 
the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.*/

// const newlist = document.querySelector(".list");
console.log(newlist);

// newlist.innerHTML = ("I do not know what to do");
// console.log(newlist); 

// it replaced all my items on my bucket list with one new, "I do not know what to do"

// Uppgift 4

/* In order to set the innerHTML of an element we need to create a string that contains the HTML code 
that we want to add to the DOM. It can look something like this:

"<div>This is a div element as a string</div>";

Now create that string that contains a new item that you want to add to your bucket list.*/

let contentList = newlist.innerHTML;
console.log(contentList);

newPtagAsAString = "<p>Swim in a clean ocean</p>"
console.log(newPtagAsAString);
 
//newlist.innerHTML += newPtagAsAString;


 // Uppgift 5

 /* Set the innerHTML of the list with the new item you just created. What happens when you do that?*/

 //const newContentlist = newlist.innerHTML;
 //console.log(newContentlist); 

 // Uppgift 6
 
 /* Comment out that previous line(s) of code and the three items that you had before you should exist again. 
 How can you add that last item and still keep the three other ones? There is a method that is very similar 
 to the insertAdjecentElement that will take your HTML string and add it to the list. Try to add your new item 
 to the beginning of the list.*/

 newlist.insertAdjacentHTML("beforeend", newPtagAsAString);

 // Uppgift 7

 /*Add three more items to the end of list, but try and do it with a loop instead. Less repetitive code.*/

string1 = "<p>Go to conserts of my favorite bands</p>"
string2 = "<p>Drink coconut water on the beach</p>"
string3 = "<p>See the northern light</p>"

const addToLists = [string1, string2, string3];

for(addToList of addToLists){
    newlist.insertAdjacentHTML("beforeend", addToList);
}

console.log(newlist);

// uppgift 8

//How many items do you have in your bucket list now? Log it to the console. Use the children property.

const counteList = newlist.children.length;
console.log(counteList);

// Uppgift 9

//Change the content of the h2 at the to top of the HTML document do have your name instead of "Bucky's";

const newName = document.querySelector(".owner");

newName.innerText = "Petra´s"

// Uppgift 10

/*Replace the first item in your list with a new item. There are several ways to do this, 
but try the replaceChild method out.*/

const oldPlist = document.querySelector("p");
const newPlist = document.createElement("p");
newPlist.innerText = "Get a job after school";


newlist.replaceChild(newPlist, oldPlist);

// Uppgift 11

/*Now try replace an element in the middle of the list to a new one. 
Use the same method as before or get creative.*/

console.log(p2);

const newp2Tag = p2.setAttribute("class","newp2");
const old = document.querySelector(".newp2");

const replaceNew = document.createElement("p");
replaceNew.innerText = "Feel good all the time";

newlist.replaceChild(replaceNew,old)


// Uppgift 12

// Remove the last element in the list. lastChildElement combine with the removeChild method might work. 

newlist.removeChild(newlist.lastElementChild);