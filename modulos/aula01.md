## Acessando os modulos pelo browser
<p>SystemJS é uma biblioteca que podemos utilizar para usar modulos no browser</p>

### Instalando modulo do node
```
$ yarn add systemjs@0.21.6
```

__ou__

```
$ npm i -s systemjs@0.21.6
```

### Importar o systemJs para o arquivo html
<p>Para importar o systemJs para um arquivo html podemos utilizar o diretorio pela pasta <code>node_modules</code> ou através de um CDN.</p>

<p>Referenciando a pasta <code>node_modules</code></p>

```
    ...
    <script src="node_modules/systemjs/dist/system.js"></script>
    ...
```

<p>Utilizando um CDN</p>

```
    ...
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.21.6/system.js"></script>
    ...
```

### Configurando o SystemJS e Importando modulo
<p>Acesse o seu arquivo HTML na area de scripts</p>

```
    ...
    <script>
        SystemJS.config({
            baseUrl: '/modulos',
            packages: {
                '/modulos': {
                    defaultJSExtension: true
                }
            }
        })

        SystemJS.import('./modulos/aula01.js')
    </script>
    ...
```

<p>No codigo acima criamos a configuração do SystemJS e importamos o modulo da aula01</p>