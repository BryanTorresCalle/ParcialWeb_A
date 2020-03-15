<template>
      <b-card title="Listado de todos los vehiculos">
    <b-table striped hover :items="listUsers">
      <template v-slot:cell(acciones)="row">
        <b-button size="sm" @click="editar(row)" class="mr-2">Dar salida</b-button>
      </template>
    </b-table>
  </b-card>
</template>

<script src="assets/users.js"></script>