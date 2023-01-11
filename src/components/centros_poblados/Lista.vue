<template>
     
    <main>
        <h1>Listado de centros poblados</h1>
       
            <table class="table responsive-tab ">
      <thead>
        <tr>
          <!-- <th scope="col">id populated center</th>
          <th scope="col">municipality id</th> -->
          <th scope="col">populated center name</th>
          <th scope="col">populated center type</th>
    
        </tr>
      </thead>
      <tbody>
        <tr v-for="populated in results" v-bind:key="populated.id_populated_center">
          <th scope="row">{{ populated.populated_center_name}}</th>
          <!-- <td>{{ populated.municipality_id }}</td>  -->
           <!-- <td>{{ populated.populated_center_name }}</td> -->
          <td>{{ populated.populated_center_type }}</td>
          <td>
            <div class="menu-toggle">
            <button type="button" class="btn btn-warning" @click="edit(populated)">
            <span class="material-icons">drive_file_rename_outline</span>
            </button>
       
            <button type="button" class="btn btn-danger" @click="destroy(populated)">
                <span class="material-icons">delete_sweep</span>
            </button>
        </div>
    
          </td>
          </tr>
    </tbody>
    </table>
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
                    axios.get("http://localhost/back_construyendo_pacifico/public/api/listar_centros_poblados")
                    .then(
                        ({data})=> {    
                            console.log(this.results);
                            this.results = data;
                        }
                    );
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
    
    .btn {
        margin-left: 7px;
        margin-right: 10px;
        width: 2.3em;
        height: 2.3em;
        border-radius: 10%;
    }

    .container {
        background: #0a6882;
      
    }
    
    </style>