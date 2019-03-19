<template>
  <div>
    <div id="mapinit"></div>
    <component v-bind:is="componame" v-bind:ocorrenciaProp="ocorrenciaMain"></component>
  </div>
</template>

<script>
import { latlon } from "../utils/position.js";
import { reverseGeocoding } from "../utils/reverse-geo.js";
import { createMap } from "../utils/create-map.js";
import Ocorrencia from "../models/ocorrencia.js";
import Formulario from "./Formulario.vue";
import { getIcon } from "../utils/create-icon.js";

export default {
  data() {
    return {
      ocorrenciaMain: null,
      componame: "",
      isInit: true
    };
  },
  methods: {
    init() {
      latlon().then(coords => {
        createMap(coords, 17, "mapinit", getIcon(coords));
        reverseGeocoding(coords).then(endereco => {
          this.ocorrenciaMain = new Ocorrencia(endereco);
          this.componame = "Formulario";
        });
      });
    }
  },
  components: {
    Formulario
  },
  mounted() {
    this.init();
  }
};
</script>