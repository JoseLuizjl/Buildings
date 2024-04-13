$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/predios', 
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            $('#predios-list').empty();
            
            data.forEach(function(predio) {
                $('#predios-list').append('<li>' + predio.nomePredio + ' - ' + predio.cidade + '</li>');
            });
        },
        error: function(xhr, status, error) {
            console.error('Erro ao buscar prédios:', error);
        }
    });
});