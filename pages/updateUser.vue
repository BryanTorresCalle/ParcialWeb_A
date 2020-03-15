<template>
  <div>
    <b-card bg-variant="light" >
      <div class="title">Crear nuevo usuario</div>

        <b-form-group  label="Tipo de Identificación:" label-for="idType">
           <b-form-select id="idType"> </b-form-select>
        </b-form-group>
      
      <b-form-group>
        <b-form-input id="ID" placeholder="Ingrese su Identificación"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input id="name" placeholder="Ingrese su Nombre"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input id="lastName" placeholder="Ingrese su Apellido"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input id="email" placeholder="Ingrese su Correo electrónico"></b-form-input>
      </b-form-group>

       <b-form-group>
        <b-form-input id="weight" placeholder="Ingrese su peso"></b-form-input>
      </b-form-group>

       <b-form-group>
        <b-form-input id="height" placeholder="Ingrese su altura"></b-form-input>
      </b-form-group>

      <b-button  block variant="primary" >Crear Usuario</b-button>


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
