
const getDataFromServer = (data) => {
    return new Promise((resolve, reject) => {
      if(data) {
        setTimeout(() => {
          resolve(data)
        }, 500)
      } else {
        reject("Error")
      }
    })
  }

  export default getDataFromServer;