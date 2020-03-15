<template>
      <b-card title="Listado de todos los vehiculos">
    <b-table striped hover :items="listUsers">
      <template v-slot:cell(acciones)="row">
        <b-button size="sm" @click="loadUser(row)" class="mr-2">Editar </b-button>
        <b-button size="sm" @click="deleteUser(row)" class="mr-2">Eliminar </b-button>
        <b-button size="sm" @click="state(row)" class="mr-2">Estado </b-button>
      </template>
    </b-table>

    <div id="formUpdate" style="display: none">
        

      <b-form  @submit="updateUser()" action="javascript:void(0)"  >
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

       

        <b-button type="submit"  variant="primary">Actualizar Usuario</b-button>
      </b-form>


    </div>
  </b-card>
</template>

<script src="assets/users.js"></script>
