import axios from 'axios'
export const getUserMessages=(id)=>{

   return axios.get(`https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?id=${id+1}`)
}

export const postMessage2=(inputPoruka, idUsera, idPoslao, redZaUpis)=>{

    axios.post(`https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec`)
 }

 export const postMessage=(inputPoruka, idUsera, idPoslao, redZaUpis)=>{

   axios.post(`https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?poruka=${inputPoruka}&id=${idUsera}&idPoslao=${idPoslao}&redZaUpis=${redZaUpis}`)
}
 

 export const getRedZaUpis=(id)=>{

   return axios.get(`https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=${id}`)
 }

 export const postRedZaUpis=(id, broj)=>{

  return axios.post(`https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=${id}&broj=${broj}`)
}
