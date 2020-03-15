<template>
     <b-table striped hover :items="list_modules">
          <template v-slot:cell(acciones)="row">
            <b-button size="sm" @click="loadModule(row)" class="mr-2">Modificar</b-button>
            <b-button size="sm" @click="deleteModule(row)" class="mr-2">Eliminar</b-button>
          </template>
        </b-table>
</template>