document.querySelectorAll('.navbar-center a').forEach(link => {
    link.addEventListener('click', function() {
      // Удаляем класс active у всех ссылок
      document.querySelectorAll('.navbar-center a').forEach(item => {
        item.classList.remove('active');
      });
      // Добавляем класс active к текущей ссылке
      this.classList.add('active');
    });
  });

document.querySelectorAll('.navbar-logo').forEach(link => {
    link.addEventListener('click', function() {
      // Удаляем класс active у всех ссылок
      document.querySelectorAll('.navbar-center a').forEach(item => {
        item.classList.remove('active');
      });
    });
  });
  