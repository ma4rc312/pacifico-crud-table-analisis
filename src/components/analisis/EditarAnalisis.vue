<template>
  <form id="formulario2">
    <div class="fields">
      <div class="f1">
        <input type="number"
         for="user_id" 
         placeholder="user" v-model.trim="form.user_id"/>
      </div>

      <div class="f1">
        <input
          type="number"
          for="population_id"
          placeholder="population id" v-model.trim="form.population_id"/>
      </div>

      <div class="f1">
        <input
          type="number"
          for="sample_type_id"
          placeholder="sample type id" v-model.trim="form.sample_type_id"/>
      </div>

      <div class="f1">
        <input
          type="number"
          for="water_type_id"
          placeholder="water type id " v-model.trim="form.water_type_id"/>
      </div>

      <div class="f1">
        <input type="date" for="date" placeholder="date" v-model.trim="form.date"/>
      </div>

      <div class="f1">
        <input type="time" for="hour" placeholder="hour" v-model.trim="form.hour" />
      </div>

      <div class="f1">
        <input
          type="text"
          for="sample_type"
          placeholder="sample type" v-model.trim="form.sample_type"/>
      </div>

      <div class="f1">
        <input
          type="text"
          for="surface_sources"
          placeholder="surface source" v-model.trim="form.surface_sources"/>
      </div>

      <div class="f1">
        <input
          type="text"
          for="underground_sources"
          placeholder="underground sources" v-model.trim="form.underground_sources"/>
      </div>

      <div class="f1">
        <input
          type="text"
          for="catchment_type"
          placeholder="catchment type" v-model.trim="form.catchment_type"/>
      </div>
    </div>

    <button type="button" class="btn btn-primary" v-on:click="updateData()">
      Submit
    </button>
  </form>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      id_analysis: this.$route.params.id_analysis,
      form: {
        user_id: '',
        population_id: '',
        sample_type_id: '',
        water_type_id: '',
        date: '',
        hour: '',
        sample_type: '',
        surface_sources: '',
        underground_sources: '',
        catchment_type: '',
      }

      
    }
  },
  methods: {
 getAnalisis(){
  const path = `http://localhost/back_construyendo_pacifico/public/api/id_population/${this.id_population}/`

  axios.get(path).then(response => {

    this.form.user_id = response.data.user_id,
    this.form.population_id = response.data.population_id,
    this.form.sample_type_id = response.data.sample_type_id,
    this.form.water_type_id = response.data.water_type_id,
    this.form.date = response.data.date,
    this.form.hour = response.data.hour,
    this.form.sample_type = response.data.sample_type,
    this.form.surface_sources = response.data.surface_sources,
    this.form.underground_sources = response.data.underground_sources,
    this.form.catchment_type = response.data.catchment_type

  })

  .catch((response) => {
    console.log(error)
  })
 }
},

created() {
  this.getAnalisis()
}
}
</script>

<style scoped>
#formulario2 {
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
