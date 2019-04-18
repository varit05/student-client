<template>
  <section class="row">
    <h4 class="col-3" v-text="student.firstName"></h4>
    <h4 class="col-3" v-text="student.lastName"></h4>
    <h4 class="col-3" v-text="student.birthDate"></h4>
    <div class="col-3">
      <h4 class="col-6" v-for="(hobby, index) in student.hobbies" :key="index">
        <span>{{hobby}}</span>
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "Student",
  props: {
    student: Object,
    default: () => {
      return [];
    }
  }
};
</script>
