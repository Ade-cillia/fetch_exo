const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchTest() {
  // Get All
  await fetch(BASE_URL + '/todos')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then(json => console.log("fetch, all todos:", json))
    .catch(error => console.log('Error:', error));

  // Get id 10
  await fetch(BASE_URL + '/todos/10')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then(json => console.log("fetch, todo id 10:", json))
    .catch(error => console.log('Error:', error));

  // Post
  await fetch(BASE_URL + '/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Titre',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then((json) => console.log("fetch, create a todo", json))
    .catch(error => console.log('Error:', error));

  // Put id 10
  await fetch(BASE_URL + '/todos/10', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'babibou',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then((json) => console.log("fetch, Update todo with id 10", json))
    .catch(error => console.log('Error:', error));

  // PATCH id 10
  await fetch(BASE_URL + '/todos/10', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'yoyoyoy',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then((json) => console.log("fetch, Update title for id 10", json))
    .catch(error => console.log('Error:', error));

  // Delete id 10
  await fetch(BASE_URL + '/todos/10', {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then((json) => console.log("fetch, Delete 10", json))
    .catch(error => console.log('Error:', error));
}

async function axiosTest() {
  axios.defaults.baseURL = BASE_URL;

  // Get All
  await axios.get('/todos')
    .then(json => console.log("axios, all todos:", json.data))
    .catch(error => console.log('Error: ', error));

  // Get id 10
  await axios.get('/todos/10')
    .then(json => console.log("axios, todo id 10:", json.data))
    .catch(error => console.log('Error: ', error));

  // Post
  await axios.post('/todos', {
    title: 'Titre',
    userId: 1,
  })
    .then((json) => console.log("axios,create a todo", json.data))
    .catch(error => console.log('Error: ', error));

  // Put id 10
  await axios.put('/todos/10', {
    title: 'babibou',
    userId: 1,
  })
    .then((json) => console.log("axios, Update todo with id 10", json.data))
    .catch(error => console.log('Error: ', error));

  // PATCH id 10
  await axios.patch('/todos/10', {
    title: 'yoyoyoy'
  })
    .then((json) => console.log("axios, Update title for id 10", json.data))
    .catch(error => console.log('Error: ', error));

  // Delete id 10
  await axios.delete('/todos/10')
    .then((json) => console.log("axios, Delete 10, status :", json.status))
    .catch(error => console.log('Error: ', error));
}

async function main() {
  await fetchTest();
  console.log('--------------------')
  await axiosTest();
}
main(); 
