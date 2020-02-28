<template>
  <b-row>
    <b-col
      cols="6"
    >
      <Button
        class="text-center py-3"
        color="danger"
        label="Anterior"
        icon-class="icon-arrow-left"
      />
    </b-col>
    <b-col cols="6">
      <Button
        class="text-center py-3"
        color="success"
        label="Proxima"
        icon-class="icon-arrow-right"
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
