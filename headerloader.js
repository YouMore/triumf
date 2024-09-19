// Функция для загрузки header
fetch('./header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error('Ошибка при загрузке header:', error));