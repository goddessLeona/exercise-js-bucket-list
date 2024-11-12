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
 console.log(newlist);
 
newlist.appendChild(ptag)
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

ptag4.insertAdjacentElement("afterbegin",p) // Now the new item on list came 1 over the last item on list
ptag4.insertAdjacentElement("afterend", p2) // Now the new item on list came under the last item on list
ptag4.insertAdjacentElement("beforebegin", p3)// Now the new item on the list come 2 items up
ptag4.insertAdjacentElement("beforeend", p4) //Now the new item on the list comes 1 under the last item on list

// Uppgift 3

/* innerHTML is an interesting property that exists on HTML elements. With that property we can 
get and set the inner HTML of a HTML element very easy. Try to get (or do you already have it?) 
the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.*/


