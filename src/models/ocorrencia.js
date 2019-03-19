export default class Ocorrencia {
	constructor(endereco) {
		this.PATT = /['`~!@#$%^&*()_|+=?;'",<>{}[\]\\/]/gi
		this.id = 0
		this.data = new Date().toJSON().slice(0,10).split('-').reverse().join('/') 
		this.lat = endereco.lat
		this.lon = endereco.lon
		this._rua = endereco.rua
		this._bairro = endereco.bairro
		this._cidade = endereco.cidade
		this._estado = endereco.estado
		this._cep = endereco.cep
		this._infracao = ''
		this.data_infracao = new Date().toJSON().slice(0,10).split('-').reverse().join('/') 
		this.hora_infracao = new Date().toLocaleTimeString('pt-br', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		})
		this.autor = ''
		this.autor_sexo = ''
		this.autor_idade = ''
		this.autor_cor = ''
		this.outros_autores = ''
		this.quantidade_autores = 0
		this.vitima = ''
		this.vitima_sexo = ''
		this.vitima_idade = ''
		this.vitima_cor = ''
		this.outras_vitimas = ''
		this.quantidade_vitimas = 0
		this.historico = ''
		this.autoridade = ''
		this.autoridade_identificacao = ''
		this.outras_autoridades = ''
	}

	set rua(rua) {
		this._rua = rua.replace(this.PATT, '')
	}
	get rua() {
		return this._rua
	}

	set bairro(bairro) {
		this._bairro = bairro.replace(this.PATT, '')
	}
	get bairro() {
		return this._bairro
	}

	set cidade(cidade) {
		this._cidade = cidade.replace(this.PATT, '')
	}
	get cidade() {
		return this._cidade
	}

	set estado(estado) {
		this._estado = estado.replace(this.PATT, '')
	}
	get estado() {
		return this._estado
	}

	set cep(cep) {
		this._cep = cep.replace(this.PATT, '')
	}
	get cep() {
		return this._cep
	}

	set infracao(infracao) {
		this._infracao = infracao.replace(this.PATT, '')
	}
	get infracao() {
		return this._infracao
	}

	/* set ç(ç) {
		this._ç = ç.replace(this.PATT, '')
	}
	get ç() {
		return this._ç
	} */


	static table() {
		let table = `CREATE TABLE OCORRENCIAS (
			id INTEGER IDENTITY PRIMARY KEY,
			data DATE,
			lat DOUBLE,
			lon DOUBLE,
			rua VARCHAR(55),
			bairro VARCHAR(35),
			cidade VARCHAR(35),
			estado VARCHAR(35),
			cep VARCHAR(25),
			infracao VARCHAR(255),
			data_infracao DATE,
			hora_infracao TIME,
			autor VARCHAR(55),
			autor_sexo VARCHAR(25),
			autor_idade INTEGER,
			autor_cor VARCHAR(25),
			outros_autores VARCHAR(255),
			quantidade_autores INTEGER,
			vitima VARCHAR(55),
			vitima_sexo VARCHAR(55),
			vitima_idade INTEGER,
			vitima_cor VARCHAR(25),
			outras_vitimas VARCHAR(255),
			quantidade_vitimas INTEGER,
			historico VARCHAR(255),
			autoridade VARCHAR(55),
			autoridade_identificacao VARCHAR(55),
			outras_autoridades VARCHAR(255)
		);`
		return table
	}
}
