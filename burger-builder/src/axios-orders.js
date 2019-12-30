import axios from 'axios'

const instace = axios.create({
    baseURL: 'https://react-my-burger-5562f.firebaseio.com/'
})

export default instace