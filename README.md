## Base RabbitMQ nest microservice

- Example of NestJS application
- Sender messages

<h3>Starting</h3>

<h4>Move sender/ to any folder outside nest/</h4>

```
$ cd nest/
npm install
npm run start:dev
```
<h4>In new terminal type:</h4>

```
cd sender/
npm install
node ./send.js type_your_message_here
```

You see that message will become available in nest terminal