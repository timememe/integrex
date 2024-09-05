// script.js
$(document).ready(function() {
    $('.burger').click(function() {
        $('.nav-links').toggleClass('nav-active');
        $('.burger').toggleClass('toggle');

        $('.nav-links li').each(function(index) {
            if ($(this).css("animation")) {
                $(this).css("animation", "");
            } else {
                $(this).css("animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            }
        });
    });

    // Плавные переходы по якорным ссылкам
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000); // Скорость перехода
        }
        $('.nav-links').removeClass('nav-active'); // Закрытие меню после клика
        $('.burger').removeClass('toggle'); // Возвращение бургера в исходное состояние
    });
});

$(document).ready(function() {
    // Анимация при загрузке страницы
    setTimeout(function() {
        $('.hero, .claim, .mask-group-icon').addClass('visible'); // Сразу делаем видимыми
    }, 100); // Небольшая задержка

    // Анимация при скролле для остальных элементов
    function checkVisibility() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 50) { // Добавляем небольшой оффсет для плавности
                $(this).addClass('visible');
            }
        });
    }

    // Запуск проверки при скролле
    $(window).on('scroll', checkVisibility);
    checkVisibility(); // Первичная проверка при загрузке
});


