$(document).ready(function() {
    function adicionarTarefa() {
        var tarefa = $('#nome-tarefa').val();
        if (tarefa !== '') {
            $('#listaTarefas').append('<li>' + tarefa + '</li>');
            $('#nome-tarefa').val('');
        }
    }
    $('#formTarefa').submit(function(e) {
        e.preventDefault();
        adicionarTarefa();
    });
    $(document).on('click', '#listaTarefas li', function() {
        $(this).toggleClass('completed');
    });
});