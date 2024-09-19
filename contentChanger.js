document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const blocks = document.querySelectorAll('.content-block');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем действие по умолчанию ссылки

            // Скрываем все блоки
            blocks.forEach(block => {
                block.style.display = 'none';
            });

            // Получаем id блока, который нужно показать
            const targetId = link.getAttribute('data-target');
            const targetBlock = document.getElementById(targetId);

            // Отображаем целевой блок
            if (targetBlock) {
                targetBlock.style.display = 'block';
            }
        });
    });
});
