// ==========================================
// ОТКРЫТИЕ ПОЖЕЛАНИЙ
// ==========================================
function openWishes() {
    const secret =
        document.getElementById("secret");
    const gift =
        document.getElementById("gift");
    // Показываем пожелания
    secret.classList.add("show");
    // Через 1.2 секунды
    // появляется подарок
    setTimeout(() => {
        gift.classList.add("show");
    }, 1200);
    // Запускаем больше сердечек
    createHearts(35);
}
// ==========================================
// СОЗДАНИЕ ЛЕТЯЩЕГО СЕРДЕЧКА
// ==========================================
function createHeart() {
    const heart =
        document.createElement("div");
    heart.className = "heart";
    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "✨"
    ];
    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];
    // Случайная позиция
    heart.style.left =
        Math.random() * 100 + "vw";
    // Случайное движение в сторону
    heart.style.setProperty(
        "--x",
        (Math.random() * 200 - 100) + "px"
    );
    // Случайная скорость
    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";
    // Случайный размер
    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";
    document.body.appendChild(heart);
    // Удаляем после анимации
    setTimeout(() => {
        heart.remove();
    }, 9000);
}
// ==========================================
// СЕРДЕЧКИ ПОСТОЯННО
// ==========================================
setInterval(
    createHeart,
    700
);
// ==========================================
// СОЗДАТЬ МНОГО СЕРДЕЧЕК
// ==========================================
function createHearts(amount) {
    for (
        let i = 0;
        i < amount;
        i++
    ) {
        setTimeout(() => {
            createHeart();
        }, i * 80);
    }
}
// ==========================================
// САЛЮТ ПРИ НАЖАТИИ НА ПОДАРОК
// ==========================================
function giftClick() {
    const icons = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💝",
        "✨",
        "💘"
    ];
    for (
        let i = 0;
        i < 40;
        i++
    ) {
        const heart =
            document.createElement("div");
        heart.className =
            "burst";
        heart.innerHTML =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];
        // Случайный угол
        const angle =
            Math.random() *
            Math.PI * 2;
        // Расстояние
        const distance =
            150 +
            Math.random() * 350;
        heart.style.setProperty(
            "--bx",
            Math.cos(angle) *
            distance + "px"
        );
        heart.style.setProperty(
            "--by",
            Math.sin(angle) *
            distance + "px"
        );
        document.body.appendChild(
            heart
        );
        // Удаляем после анимации
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}