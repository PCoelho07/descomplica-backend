# Instruções para execução

### Para Linux

1. Na raiz do projeto, executar o comando:
```bash
$ make
```
Ele irá clonar o projeto do frontend e subir todos os containers necessários, isso pode levar um tempinho.

Após o `make` finalizar, executar o comando:
```bash
$ docker-compose logs -f app
```
Caso apareça a mensagen:
```bash
    Error: connect ECONNREFUSED 192.168.112.2:3306
         at TCPConnectWrap.afterConnect [as oncomplete]     (node:net:1142:16) {
    errno: -111,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '192.168.112.2',
    port: 3306,
    fatal: true
 }
```
Isso acontece em alguns casos onde o docker inicializa o container do app antes do container do banco de dados estar 100% pronto, para resolver isso, basta executar:

```bash
$ make restart-app
```
E então vc deverá ver a mensagem:
```bash
 Server running at: http://localhost:3000
 Database connected with success!
```
Após isso, vamos executar as `migrations`, e para isso vc deve executar o comando:

```bash
$ make migrate
```
E pronto, basta acessar a url `http://descomplica.test` e GG.

=D