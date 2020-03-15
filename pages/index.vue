<template>
  <div class="body">
    <b-container>
      <div class="title">Control de IMC</div>

      <div class="buttons">
        <b-button href="/createUser" variant="primary" size="lg">Crear usuario</b-button>
        <br>
        <b-button href="/users" variant="primary" size="lg">Ver Usuarios</b-button>
      </div>

      
    </b-container>
  </div>
</template>


<style>
.buttons {
  margin: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: unset;
  align-content: center;
  margin-bottom: 30px;
}

.title {
  font-family: "BookMan Old Style";
  font-style: oblique;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #990919;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
}

.button {
  margin-bottom: 30px;
}
</style>
