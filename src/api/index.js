export default {
  login ({ username, password }) {
    return new Promise((resolve, reject) => {
      if (username === 'kuda' && password === 'para') {
        resolve()
      } else {
        reject({ message: 'Invalid password' })
      }
    })
  }
}