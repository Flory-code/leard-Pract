document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из полей ввода
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Сбрасываем предыдущие стили границ
    document.getElementById('login').style.border = '2px solid white';
    document.getElementById('password').style.border = '2px solid white';
    document.getElementById('dob').style.border = '2px solid white';

    // Переменная для хранения ошибок
    let hasError = false;

    // Проверяем, заполнены ли все поля
    if (!login) {
        document.getElementById('login').style.border = '2px solid red'; // Красная граница
        hasError = true; // Устанавливаем флаг ошибки
    }

    if (!password) {
        document.getElementById('password').style.border = '2px solid red'; // Красная граница
        hasError = true; // Устанавливаем флаг ошибки
    }

    if (!dob) {
        document.getElementById('dob').style.border = '2px solid red'; // Красная граница
        hasError = true; // Устанавливаем флаг ошибки
    }

    // Если есть ошибки, прекращаем выполнение
    if (hasError) {
        return; // Прекращаем выполнение, если есть ошибки
    }

    // Определяем правильные учетные данные
    const correctLogin = 'Руслан';
    const correctPassword = '123';
    const correctDob = '2006-12-12'; // Формат даты YYYY-MM-DD

    // Проверяем, правильные ли учетные данные
    let isValid = true; // Переменная для проверки валидности

    if (login !== correctLogin) {
        document.getElementById('login').style.border = '2px solid red'; // Красная граница
        isValid = false; // Устанавливаем флаг ошибки
    } else {
        document.getElementById('login').style.border = '2px solid green'; // Зеленая граница
    }

    if (password !== correctPassword) {
        document.getElementById('password').style.border = '2px solid red'; // Красная граница
        isValid = false; // Устанавливаем флаг ошибки
    } else {
        document.getElementById('password').style.border = '2px solid green'; // Зеленая граница
    }

    if (dob !== correctDob) {
        document.getElementById('dob').style.border = '2px solid red'; // Красная граница
        isValid = false; // Устанавливаем флаг ошибки
    } else {
        document.getElementById('dob').style.border = '2px solid green'; // Зеленая граница
    }

    // Если все поля валидны, показываем успешное сообщение
    if (isValid) {
        alert('Авторизация успешна!');
        
        // Убираем класс disabled у ссылок
        const links = document.querySelectorAll('#header-links a');
        links.forEach(link => {
            link.classList.remove('disabled'); // Удаляем класс disabled
            link.style.pointerEvents = 'auto'; // Включаем клики
            link.style.color = 'white'; // Возвращаем цвет текста
        });
    } else {
        alert('Неверные учетные данные. Пожалуйста, попробуйте снова.');
    }
});

// Изначально устанавливаем белую границу
document.querySelectorAll('input').forEach(input => {
    input.style.border = '2px solid white'; // Устанавливаем белую границу
});
