<template>
<main>
    <h1>Listado de analisis</h1>
     <div> 
    <button type="button" class="btn btn-primary" v-on:click="Crear()">Nuevo Analisis</button>
    </div> 
    <div class="container ">
        <table class="table responsive-tab ">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Hora</th>
      <th scope="col">Tipo de muestra</th>
      <th scope="col">Fuentes superficiales</th>
      <th scope="col">Fuentes subterraneas</th>
      <th scope="col">Tipo de deposito</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="task in results" v-bind:key="task.id">
      <td>{{ task.date }}</td>
      <td>{{ task.hour }}</td>
      <td>{{ task.sample_type }}</td>
      <td>{{ task.surface_sources }}</td>
      <td>{{ task.underground_sources }}</td>
      <td>{{ task.catchment_type }}</td>
    
      <td>
        <div class="menu-toggle">
        <button type="button" class="btn btn-warning" v-on:click="Editar()">
        <span class="material-icons">drive_file_rename_outline</span>
        </button>
   
        <button type="button" class="btn btn-danger" @click="destroy(analysis)">
            <span class="material-icons">delete_sweep</span>
        </button>
    </div>

      </td>
      </tr>
</tbody>
</table>
</div>
</main>
</template>

<script>
   
    import axios from 'axios';
   

    export default{
        data() {
            return {
                results: {},       
            }
        },
        created() {
            this.item();
        },

        methods: {
            item()
            {
                axios.get("http://localhost/back_construyendo_pacifico/public/api/listar_analysis")
                .then(
                    ({data})=> {    
                        console.log(this.results);
                        this.results = data;
                    }
                );
            },

            Crear(){
                this.$router.push('crear');
            },
        
            Editar(){
                this.$router.push('editAnalisis')
            },

        }
    }
</script>   

<style lang="scss" scoped>

.menu-toggle {
    display: flex; 
    margin-bottom: 20px;
    margin-top: 2em;
}

.material-icons {
    font-size: 20px;
    color: #ffffff;
    

}




</style>