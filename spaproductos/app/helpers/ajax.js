

export const ajax =(url, callback) => {
    fetch(url)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}

