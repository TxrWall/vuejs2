new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		perigo: true,
		classeCSS: "quadrado",
		classeCSS2: "cyan",
		'borda-azul': false,
		cor5: '',
		estilo5: {
			width:'100px',
			height:'100px'
		},
		progresso: {
			width:'0px'
		},
		width:'0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque"
			},1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			},500)
		},
		setPerigo(event) {
			if(event.target.value == 'true') {
				this.perigo = true;
			} else if(event.target.value == 'false') {
				this.perigo = false;
			}
		}
	}
})
