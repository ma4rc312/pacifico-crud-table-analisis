<template>
		    <h1>Formulario dinámico</h1>
    <form action="formulario.php" method="post">
      <fieldset>
        <label>Nombre:</label>
        <input type="text" name="nombre" />
      </fieldset>
      <fieldset>
        <label>Apellido:</label>
        <input type="text" name="apellido" />
      </fieldset>
      <fieldset>
        <label>Correo electrónico:</label>
        <input type="email" name="email" />
      </fieldset>
      <fieldset>
        <label>Teléfono:</label>
        <input type="tel" name="telefono" />
      </fieldset>
      <fieldset>
        <input type="submit" value="Enviar" class="boton" />
      </fieldset>
    </form>
	
</template>

<script lang="scss" scoped>

h1 {
        font-size: 3.0rem;
      }
      fieldset {
        border: 1px solid #ccc;
        padding: 0.5rem;
        margin: 0.5rem;
      }
      label {
        display: block;
        margin-bottom: 0.2rem;
      }
      input {
        padding: 0.4rem;
        font-size: 1.2rem;
        border: 1px solid #ccc;
      }
      .boton {
        padding: 0.6rem;
        font-size: 1.2rem;
        background-color: #ccc;
        color: #3d3d3d;
        border: 1px solid #ccc;
        cursor: pointer;
      }
</script>