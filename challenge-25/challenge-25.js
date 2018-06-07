(function(win, doc) {
    'use strict';
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D

    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories

    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */
    function anyEvent(element, event, callback) {
        doc.querySelector(element).addEventListener(event, callback, false);
    }
    
    anyEvent('[data-js="oneclick"]', 'click', function(event) {
        alert('Fui clicado com apenas um clique usando o evento "click"!');
    });
    
    anyEvent('[data-js="doubleclick"]', 'dblclick', function(event) {
        alert('Fui clicado com clique duplo usando o evento "dblclick"!');
    });
    
    anyEvent('[data-js="input"]', 'select', function(event) {
        alert('Fui selecionado usando o evento "select"!');
    });
    
    anyEvent('[data-js="copy"]', 'copy', function(event) {
        alert('Fui copiado usando o evento "copy"!');
    });
    
    anyEvent('[data-js="paste"]', 'paste', function(event) {
        alert('Fui colado usando o evento "paste"!');
    });
})(window, document);