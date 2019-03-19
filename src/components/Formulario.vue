<template>
  <div>
    <section class="is-primary is-fullheight">
      <div>
        <div class="container">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div class="column">
              <form class="box">
                <!-- v-on:submit.prevent -->
                
                <div class="field">
                  <label class="label">Rua</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="rua" v-model="ocorrenciaProp.rua">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Bairro</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="bairro"
                      v-model="ocorrenciaProp.bairro"
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label">CEP</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="cep" v-model="ocorrenciaProp.cep">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Infração Penal</label>
                  <div class="control">
                    <div class="select">
                      <select name="infracao" v-model="ocorrenciaProp.infracao">
                        <option value disabled selected>Selecione o tipo de infração</option>
                        <option
                          value="Contravenção referente à pessoa"
                        >Contravenção referente à pessoa</option>
                        <option
                          value="Contravenção referente ao patrimônio"
                        >Contravenção referente ao patrimônio</option>
                        <option
                          value="Contravenção referente à incolumidade"
                        >Contravenção referente à incolumidade</option>
                        <option
                          value="Contravenção referente à paz pública"
                        >Contravenção referente à paz pública</option>
                        <option
                          value="Contravenção referente à fé pública"
                        >Contravenção referente à fé pública</option>
                        <option
                          value="Contravenção relativa à organização do trabalho"
                        >Contravenção relativa à organização do trabalho</option>
                        <option
                          value="Contravenção relativa à polícia de costumes"
                        >Contravenção relativa à polícia de costumes</option>
                        <option
                          value="Contravenção referente à Administração Pública"
                        >Contravenção referente à Administração Pública</option>
                        <option value="Crime contra a pessoa">Crime contra a pessoa</option>
                        <option value="Crime contra a honra">Crime contra a honra</option>
                        <option value="Crime contra o patrimônio">Crime contra o patrimônio</option>
                        <option
                          value="Crime contra a administração pública"
                        >Crime contra a administração pública</option>
                        <option
                          value="Crime contra a dignidade sexual"
                        >Crime contra a dignidade sexual</option>
                        <option
                          value="Crime contra a incolumidade pública"
                        >Crime contra a incolumidade pública</option>
                        <option
                          value="Crime contra o patrimônio histórico"
                        >Crime contra o patrimônio histórico</option>
                        <option
                          value="Crime contra a administração da justiça"
                        >Crime contra a administração da justiça</option>
                        <option value="Crime econômico">Crime econômico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Data da infração</label>
                  <div class="control">
                    <input class="input" type="text" v-model="ocorrenciaProp.data_infracao">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Hora da infração</label>
                  <div class="control">
                    <input class="input" type="text" v-model="ocorrenciaProp.hora_infracao">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Autor</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Autor"
                      v-model="ocorrenciaProp.autor"
                    >
                    <label class="label">Sexo</label>
                    <div class="control">
                      <label class="radio">
                        <input
                          type="radio"
                          name="sexo"
                          value="masculino"
                          v-model="ocorrenciaProp.autor_sexo"
                        >
                        Masculino
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="sexo"
                          value="feminino"
                          v-model="ocorrenciaProp.autor_sexo"
                        >
                        Feminino
                      </label>
                    </div>
                    <label class="label">Idade</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Idade"
                        v-model="ocorrenciaProp.autor_idade"
                      >
                    </div>
                    <label class="label">Cor</label>
                    <div class="control">
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="branco"
                          v-model="ocorrenciaProp.autor_cor"
                        >
                        Branco
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="pardo"
                          v-model="ocorrenciaProp.autor_cor"
                        >
                        Pardo
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="preto"
                          v-model="ocorrenciaProp.autor_cor"
                        >
                        Preto
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="amarelo"
                          v-model="ocorrenciaProp.autor_cor"
                        >
                        Amarelo
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="indígena"
                          v-model="ocorrenciaProp.autor_cor"
                        >
                        Indígena
                      </label>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outros Autores</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Outros autores envolvidos"
                      v-model="ocorrenciaProp.outros_autores"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Quantidade de autores</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Quantidade de autores"
                      v-model="ocorrenciaProp.quantidade_autores"
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label">Vítima</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Vítima"
                      v-model="ocorrenciaProp.vitima"
                    >
                    <label class="label">Sexo</label>
                    <div class="control">
                      <label class="radio">
                        <input
                          type="radio"
                          name="sexo"
                          value="masculino"
                          v-model="ocorrenciaProp.vitima_sexo"
                        >
                        Masculino
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="sexo"
                          value="feminino"
                          v-model="ocorrenciaProp.vitima_sexo"
                        >
                        Feminino
                      </label>
                    </div>
                    <label class="label">Idade</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Idade"
                        v-model="ocorrenciaProp.vitima_idade"
                      >
                    </div>
                    <label class="label">Cor</label>
                    <div class="control">
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="branco"
                          v-model="ocorrenciaProp.vitima_cor"
                        >
                        Branco
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="pardo"
                          v-model="ocorrenciaProp.vitima_cor"
                        >
                        Pardo
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="preto"
                          v-model="ocorrenciaProp.vitima_cor"
                        >
                        Preto
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="amarelo"
                          v-model="ocorrenciaProp.vitima_cor"
                        >
                        Amarelo
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          name="cor"
                          value="indígena"
                          v-model="ocorrenciaProp.vitima_cor"
                        >
                        Indígena
                      </label>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outras Vítimas</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Outras vítimas envolvidas"
                      v-model="ocorrenciaProp.outras_vitimas"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Quantidade de vítimas</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Quantidade de vítmias"
                      v-model="ocorrenciaProp.quantidade_vitimas"
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label">Histórico</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Histórico, descrição da ocorrenciaProprrência"
                      v-model="ocorrenciaProp.historico"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Autoridade policial</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Autoridade policial"
                      v-model="ocorrenciaProp.autoridade"
                    >
                    
                    <label class="label">Identificação</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Identificação funcional"
                        v-model="ocorrenciaProp.autoridade_identificacao"
                      >
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outras Autoridades</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      type="textarea"
                      placeholder="Outras autoridades policiais"
                      v-model="ocorrenciaProp.outras_autoridades"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label"></label>
                  <div class="control">
                    <button class="button" @click="push">Salvar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ocs: [],
      isActive: false
    }
  },
  props: ['ocorrenciaProp'],
  methods: {
    push,
    fechar() {
      this.isActive = false
    }
  }
}

function push() {
  this.$ref.push(this.ocorrenciaProp).then(() => {
    this.ocorrenciaProp.autor = ''
    this.ocorrenciaProp.autor_sexo = ''
    this.ocorrenciaProp.autor_idade = ''
    this.ocorrenciaProp.autor_cor = ''
    this.ocorrenciaProp.outros_autores = ''
    this.ocorrenciaProp.quantidade_autores = 0;
    this.ocorrenciaProp.vitima = ''
    this.ocorrenciaProp.vitima_sexo = ''
    this.ocorrenciaProp.vitima_idade = ''
    this.ocorrenciaProp.vitima_cor = ''
    this.ocorrenciaProp.outras_vitimas = ''
    this.ocorrenciaProp.quantidade_vitimas = 0;
    this.ocorrenciaProp.historico = ''
    this.ocorrenciaProp.autoridade = ''
    this.ocorrenciaProp.autoridade_identificacao = ''
    this.ocorrenciaProp.outras_autoridades = ''
    alert('Salvo com sucesso!')
  })
}

</script>


