function login() {
  const username = document.querySelector('#usernameInput').value
  localStorage.setItem('username', username)
}