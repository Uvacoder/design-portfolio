<template>
  <b-pagination
    v-model="currentPage"
    pills
    :total-rows="40"
    :per-page="6"
    align="center"
  >
    <template v-slot:first-text>
      <unicon :height="18" name="arrow-left" fill="currentColor" />
      <!-- <span>First</span> -->
    </template>
    <template v-slot:prev-text>Prev</template>
    <template v-slot:next-text>Next </template>
    <template v-slot:last-text>
      <!-- <span>Last</span> -->
      <unicon :height="18" name="arrow-right" fill="currentColor" />
    </template>

    <template v-slot:ellipsis-text>
      <unicon :height="18" name="ellipsis-h" fill="currentColor" />
    </template>
  </b-pagination>
</template>
<script>
export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
