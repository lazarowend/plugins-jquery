// plugin de compartilhamento em social midias
$('.share').jsSocials({
    //shareIn: "popup", --> para compartilhar em uma outra janela
    showCount: false,
    showLabel: true,
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});


// plugin mask onde adiciona mascaras de maneira rápida ao formulário
$('input[name=telefone]').mask('(99)99999-9999');
$('input[name=data]').mask('99/99/9999')