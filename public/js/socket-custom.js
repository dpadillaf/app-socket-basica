var socket = io();

socket.on( 'connect', function(){

    console.log( 'Conectdo al servidor' );

} );

//escuchar 
socket.on( 'disconnect', function(){

    console.log( 'Perdimos conexión con el servidor' );

} );

//enviar información
socket.emit( 'enviarMensaje', {
    usuario: 'David Padilla',
    mensaje: 'Hello World'
}, function( resp ){
    console.log( 'resp: ', resp );
} );

//recibir información
socket.on( 'enviarMensaje', function(mensaje) {

    console.log( 'Server:', mensaje );

} );