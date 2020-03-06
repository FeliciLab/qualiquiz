# QualiQuiz 

#### Solução Digital para Avaliação de Competências da Força de Trabalho

### Demanda
Identificar as fragilidades e lacunas nas competências da força de trabalho dos serviços de saúde no estado do Ceará, apresentando dados de desempenho que podem apoiar a tomada de decisão de Gestores do Sistema Único de Saúde.

### Solução
Qualificar a força de trabalho em saúde, através da aplicação de testes individuais online, onde os profissionais responderão questões que ajudarão a mensurar o grau de domínio das competências em suas áreas específicas. 


## Link para acesso do Projeto:
[https://escoladesaudepublica.github.io/qualiz-saude/](https://escoladesaudepublica.github.io/qualiz-saude/)
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Project Structure

* **Assets**: Onde ficará todas as imagens, icones e backgrounds.
* **Components**: Ficará as partes de elementos corriqueiros nas páginas.
* **Plugins**: Responsável pelas instalações de plugins que serão utilizados pelo vue.
* **styles**: Todos os estilos globais ficam nessa pastas, incluindo mixis, variáveis, functions e importações de estilos externos.
* **views**: Cada tela do sistema está nessa pasta, ela é única dentro de todo o sistema.

### Observações:
* Qualiz Saúde é utiliza .scss para a estilização tanto global, como nos escopos de cada component.

* Todos os estilos devem ser colocados com a diretiva scoped para evitar a reescrita de estilos em outros componentes.
