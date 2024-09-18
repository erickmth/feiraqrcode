document.addEventListener("DOMContentLoaded", function() {
    // Definir a data da feira
    const feiraDate = new Date("Nov 13, 2024 09:00:00").getTime();

    // Função de contagem regressiva
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = feiraDate - now;

        // Cálculos de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibir a contagem
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // Quando a contagem terminar
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "Evento começou!";
        }
    }, 1000);
});
