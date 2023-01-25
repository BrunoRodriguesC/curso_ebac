$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#inputTarefa').val();
        const adicionarTarefa = $('<div class="bloco-tarefa"></div>');
        $(`
                <li>
                    ${novaTarefa}
                </li>
           `
        ).appendTo(adicionarTarefa);
        $(adicionarTarefa).appendTo('ul')
        $('#inputTarefa').val('')
        $("li").click(function() {
            $("li").css("text-decoration","line-through");
        });
       
    })
})
