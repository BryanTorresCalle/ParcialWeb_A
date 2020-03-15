<template>
  <div>
    <b-card bg-variant="light">
      <div class="title">Crear nuevo usuario</div>

     

      <b-form @submit="onSubmit" action="javascript:void(0)" >
        <b-form-group label="Tipo de Identificación:" label-for="idType">
          <b-form-select id="idType"  ></b-form-select>
        </b-form-group>

        <b-form-group>
          <b-form-input id="ID"  required type="number"  placeholder="Ingrese su Identificación" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="name" required placeholder="Ingrese su Nombre" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="lastName" required placeholder="Ingrese su Apellido" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="email" type="email" required placeholder="Ingrese su Correo electrónico" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="weight" type="number" step="any" required placeholder="Ingrese su peso" ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="height" type="number" step="any" required placeholder="Ingrese su altura" ></b-form-input>
        </b-form-group>

       

        <b-button type="submit" variant="primary">Crear Usuario</b-button>
      </b-form>
      <div>{{IMC}}</div>
    </b-card>
  </div>
</template>

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

