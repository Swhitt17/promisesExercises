let baseURL = "http://numbersapi.com";
let favNumber = 17;


$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
})

let favNumbers = [6,9,96];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
})


Promise.all(
Array.from({length: 4}, () => {
   return $.getJSON(`${baseURL}/${favNumber}?json`)
})).then (facts  => {
    facts.forEach(data => $("ul").append(`<li>${data.text}</li>`))
});


