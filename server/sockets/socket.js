const { io } = require( '../server' );

io.on( 'connection', ( client ) => {

    console.log( 'Cliente conectado' );

    client.emit( 'enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Buenas amigo :)'
    } );

    client.on( 'disconnect', () => {

        console.log( 'Cliente desconectado' );

    } );

    client.on( 'enviarMensaje', ( data, callback ) => {

        console.log( data );
        client.broadcast.emit( 'enviarMensaje', data );
        /*if ( mensaje.usuario ){
            callback({ resp: 'done' });
        }else{
            callback({ resp: 'error' });
        }*/

    } );

} );