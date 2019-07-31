new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado: function () {
            return this.valor != 37 ? 'Valor diferente' : 'Valor igual a 37'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 6000);
        }
    }
});