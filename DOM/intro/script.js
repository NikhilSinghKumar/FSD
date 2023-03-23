// console.log(document);
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[4]);

// document.title="Hello Nikhil !!"

// const body=document.body;
// body.append("hello Nikhil", ` GM`); // it can append text or html element
// body.appendChild("abcderf"); // it can only append or add child element

// body ='hi i am on.' // throws error bcz it tries to modify body, typeerror assgnment to const variable

// const div= document.createElement("div"); // creates new element
// const p= document.createElement('p');
// console.log(p);
// body.append(div);
// body.appendChild(div);
// body.appendChild(p);


// const body = document.body;
// const div= document.createElement("div");
// div.innerText="This is div"; // inserting text in div before append
// div.textContent="This is div"; // same as above using textcontent but is any difference, yes it is
// body.append(div)

// const div= document.querySelector("div"); // to target any element created in html document
// console.log(div);
// console.log(div.innerText); // only innertext
// console.log(div.textContent); // textContent gives all texts even it is hidden

// const body = document.body;
// const div= document.createElement("div");
// div.innerText="<strong>This is div</strong>"; // no effect of strong 
// div.innerHTML="<strong>This is div</strong>";
// const strong = document.createElement('Strong');
// strong.innerText= 'This is bold text';
// div.append(strong)
// body.append(div);

//------deleting elements---------
const body=document.body
const div= document.querySelector("div");
const p1= document.querySelector("#para1");
const p2= document.querySelector("#para2");

console.log(p1,p2);

// div.removeChild(p1);
// ----OR--
// p1.remove();

// ----get attribute------
console.log(p1.getAttribute('title')); // OR
console.log(p1.title);

p1.setAttribute('title', 'devdas'); // OR
p1.title='nagraj'
console.log(p1.title);

p2.classList.add('new-class');
p2.classList.remove('red')

//--- style----
p2.style.color= 'red';
p2.style.backgroundColor='aqua';
