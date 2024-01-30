let show = document.getElementById("output");
//making my show-box display the value of input
let display = (input)=> {
    show.value += input;
}
//making my equal sign to calculate output
const answer = () => {
    show.value = eval(show.value);
}
//making the delete button clear only one item
let clearOne = () => {
    show.value = show.value.slice(0,-1);
}
//making the clear button clear all items
let clearAll = () => {
    show.value = '';
}