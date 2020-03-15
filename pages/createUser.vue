<template>
  <div>
    <b-card bg-variant="light">
      <div class="title">Crear nuevo usuario</div>

     

      <b-form  @submit="create()" action="javascript:void(0)"  >
        <b-form-group label="Tipo de Identificación:" label-for="idType">
          <b-form-select v-model="user.typeID" id="idType"  :options="types" required  ></b-form-select>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="user.ID"   required type="number"  placeholder="Ingrese su Identificación" id="Id" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="user.name" id="name" required placeholder="Ingrese su Nombre" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="user.lastName" id="lastName" required placeholder="Ingrese su Apellido" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="user.email" id="email" type="email" required placeholder="Ingrese su Correo electrónico" ></b-form-input>
        </b-form-group>

        <b-form-group label="Peso en Kilogramos" label-for="weight">
          <b-form-input v-model="user.weight" id="weight" type="number" step="any" required  ></b-form-input>
        </b-form-group>

        <b-form-group label="Altura en metros" label-for="height">
          <b-form-input v-model="user.height" id="height" type="number" step="any" required  ></b-form-input>
        </b-form-group>

       

        <b-button type="submit"  variant="primary">Crear Usuario</b-button>
      </b-form>
      
    </b-card>
  </div>
</template>

<script src="assets/createUser.js/"> </script>

<style>
.title {
  font-family: "BookMan Old Style";
  font-style: oblique;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #990919;
  letter-spacing: 1px;
  display: flex;
  justify-content: left;
  margin-bottom: 30px;
}
</style>

