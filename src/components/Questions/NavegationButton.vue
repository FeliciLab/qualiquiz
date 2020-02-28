<template>
  <b-row>
    <b-col
      cols="12"
      xs="4"
    >
      <Button
        class="text-center py-3"
        color="danger"
        label="Anterior"
        icon="icon-arrow"
      />
      <Button
        class="text-center py-3"
        color="success"
        label="Proxima"
        icon="icon-arrow"
      />
    </b-col>
  </b-row>
</template>

<script>
import Button from '../Button'

export default {
  name: 'Navegation',
  components: {
    Button
  }
}
</script>

<style scoped>

</style>
