const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    if (err) {throw err}
    con.createChannel((err, ch) => {
        if (err) { throw err}
        const queue = 'hello'
        ch.assertQueue(queue, { //suscribir 
            durable: false
        })
        console.log("[*[ Waiting for messages in %s", queue)
        ch.consume(queue, (msg) => {
            console.log(msg.content.toString())
        })
    })
})