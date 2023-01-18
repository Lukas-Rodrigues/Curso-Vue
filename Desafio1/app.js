

new Vue({
    //el sempre aponta para o seletor do elemento html que você quer controlar    
    el: '#desafio',
    data: {
        nome: 'Lucas Rodrigues',
        idade: 20,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        CalcularIdade: function(){
            return this.idade*3
        }
    }




})