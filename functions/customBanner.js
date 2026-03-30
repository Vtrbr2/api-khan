const phrases = [ 
    "[🌿] Non Skeetless dude.",
    "[🌿] Khanware on top.",
    "[🌿] Nix said hello!",
    "[🌿] God I wish I had Khanware.",
    "[🌿] Get good get Khanware!",
    "[🌿] Khanware goes brrrrr" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
