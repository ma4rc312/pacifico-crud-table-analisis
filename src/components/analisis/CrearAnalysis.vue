<template>
  <form  id="formulario">
    <div class="fields">
      <div class="f1">
      <input type="number" v-model="analysis.user_id" placeholder="userId" />
      </div>

    <div class="f1">
      <input type="number" v-model="analysis.population_id" placeholder="population id"/>
    </div>

    <div class="f1">
      <input type="number" v-model="analysis.sample_type_id" placeholder="sample type id"/>
    </div>

    <div class="f1">
      <input type="number" v-model="analysis.water_type_id" placeholder="water type id "/>
    </div>

    <div class="f1">
      <input type="date" v-model="analysis.date" placeholder="date"/>
    </div>

    <div class="f1">
      <input type="time" v-model="analysis.hour" placeholder="hour"/>
    </div>

    <div class="f1">
      <input type="text" v-model="analysis.sample_type" placeholder="sample type"/>
    </div>

    <div class="f1">
      <input type="text" v-model="analysis.surface_sources" placeholder="surface source"/>
    </div>

    <div class="f1">
      <input type="text" v-model="analysis.underground_sources" placeholder="underground sources"/>
    </div>

    <div class="f1">
      <input type="text" v-model="analysis.catchment_type" placeholder="catchment type"/>
    </div>
  </div>
  
      <button type="button" class="btn btn-primary" v-on:click="guardar()">Submit</button>
  </form>
</template>
    
<script>
import axios from "axios";
export default {
  data() {
    return {
      analysis: {
        user_id: "",
        population_id: "",
        sample_type_id: "",
        water_type_id: "",
        date: "",
        hour: "",
        sample_type: "",
        surface_sources: "",
        underground_sources: "",
        catchment_type: "",
      }
    }
  },
  methods: {
    guardar() {
     axios
      .post(
        "http://localhost/back_construyendo_pacifico/public/api/almacenar_analisis",this.analysis)
      .then(({ data }) => {
        alert("Guardado exisotosamente");
        console.log(data);
      });
 },
  }
}
</script>
    
<style scoped>

#formulario { 
    width: 300px;
    margin: 0 auto;
}
.f1 {
    margin-bottom: 25px;
    border-radius: 25px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
    height: 3em;
}

.fields {
    width: 100%;
    padding: 75px 5px 5px 5px;
}

.fields input {
    border: none;
    outline: none;
    background: none;
    font-size: 18px;
    color: #555;
    margin-left: 3em;
    padding: 20px 10px 20px 5px;
}


</style>