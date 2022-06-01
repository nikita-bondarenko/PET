import API_URL from '../config.js'
// import axios from 'axios'
console.log(`${API_URL}/api/token/`)

export default function () {
  const login = async (formData) => {
    console.log(formData)
    // const response = await axios.post(`${API_URL}/api/token/`,
    //   formData,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )
    // const data = await response.json()
    //  console.log(data)
    // axios.post(`${API_URL}/api/token/`,
    //   formData,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // ).then(res => console.log(res))
    const response = await fetch(`${API_URL}/api/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    console.log(data)
  }
  return {
    login
  }
}
