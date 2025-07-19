function copyIP() {
    navigator.clipboard.writeText('playskyrealm.aternos.me').then(() => {
        document.getElementById("clickSound").play();
        alert("IP copiée !");
    });
}

function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Serveur Minecraft Skyrealm',
            text: 'Rejoins le serveur Skyrealm !',
            url: window.location.href
        });
    } else {
        alert("Partage non supporté par ce navigateur.");
    }
}

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function () {
        const color = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--main-color', color);
        localStorage.setItem('skyrealmColor', color);
    });
});

window.onload = () => {
    const savedColor = localStorage.getItem('skyrealmColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--main-color', savedColor);
    }
}