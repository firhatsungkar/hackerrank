import axios from 'axios'

export function getPersons() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}