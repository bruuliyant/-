// https://jsonplaceholder.typicode.com/photos

fetch('http://numbersapi.com/random/year')
    .then(res => res.text())
    .then(res => create_photo(res))
fetch('http://numbersapi.com/random/year')
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(error => {
        console.error('Ошибка:', error);
    })

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(res => create_photo(res))

let img = document.querySelector('img')

fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(response => img.src = response.url)

let container = document.querySelector('.container')

let create_photo = (arr) =>{
    for (let item of arr){
        let img = document.createElement('img') 
        img.src = item.url
        container.append(img)
    }
}
