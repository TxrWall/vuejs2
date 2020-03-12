const Projeto = new Vue({
	el: '#projeto',
	data: {
		gameStarted: false,
		hp_heroi: 100,
		hp_monstro: 100,
		logs: []
	},
	methods: {
		//iniciar novo jogo
		gameState: function () {
			this.gameStarted = !this.gameStarted
			this.hp_heroi = 100
			this.hp_monstro = 100
			this.logs = []
		},
		//ataque
		attack: function () {

			let hero_dmgTaken = Math.round(Math.random() * 20)
			let monster_dmgTaken = Math.round(Math.random() * 10)

			this.hp_heroi = this.hp_heroi - hero_dmgTaken
			this.hp_monstro = this.hp_monstro - monster_dmgTaken

			this.logs.push({ msg: `O Herói foi atingido com um dano de ${hero_dmgTaken}`, cls: 'alert-danger' })
			this.logs.push({ msg: `O Monstro foi atingido com um dano de ${monster_dmgTaken}`, cls: 'alert-success' })

			if (this.hp_heroi <= 0)
				this.hp_heroi = 0;

			if (this.hp_monstro <= 0)
				this.hp_monstro = 0;

		},
		//ataque especial
		especialAttack: function () {

			let hero_dmgTaken = Math.round(Math.random() * 10)
			let monster_dmgTaken = Math.round(Math.random() * 35)

			this.hp_heroi = this.hp_heroi - hero_dmgTaken
			this.hp_monstro = this.hp_monstro - monster_dmgTaken

			this.logs.push({ msg: `O Herói foi atingido com um dano de ${hero_dmgTaken}`, cls: 'alert-danger' })
			this.logs.push({ msg: `O Monstro foi atingido com um dano especial de ${monster_dmgTaken}`, cls: 'alert-warning' })

			if (this.hp_heroi <= 0)
				this.hp_heroi = 0

			if (this.hp_monstro <= 0)
				this.hp_monstro = 0

		},
		//curar
		heal: function () {

			let hero_dmgTaken = Math.round(Math.random() * 10)
			let healingPoints = Math.round(Math.random() * 15)

			this.hp_heroi = (this.hp_heroi - hero_dmgTaken) + healingPoints;

			if (this.hp_heroi >= 100)
				this.hp_heroi = 100

			this.logs.push({ msg: `O Herói foi atingido com um dano de ${hero_dmgTaken} durante a cura`, cls: 'alert-danger' })
			this.logs.push({ msg: `O Herói recuperou ${healingPoints} pontos de vida`, cls: 'alert-success' })

			if (this.hp_heroi <= 0)
				this.hp_heroi = 0;

		}
	}
});
