$(document).ready(function(){
    $('ul').on('click','li',function(){
        $(this).css('text-decoration', 'line-through');
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>.${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })
})
