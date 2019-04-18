<template>
  <section>
    <form class="form" method="POST" @submit.prevent="editStudent">
      <div class="form-group row">
        <label class="offset-4 col-2">First name</label>
        <div class="col-4">
          <input type="text" class="form-control" v-model="firstName">
        </div>
      </div>
      <div class="form-group row">
        <label class="offset-4 col-2">Last name</label>
        <div class="col-4">
          <input type="text" class="form-control" v-model="lastName">
        </div>
      </div>
      <div class="form-group row">
        <label class="offset-4 col-2">Birth Date</label>
        <div class="col-4">
          <input type="date" class="form-control" v-model="birthDate">
        </div>
      </div>
      <div class="form-group row">
        <label class="offset-4 col-2" for="image">Photo</label>
        <div class="col-4">
          <input type="text" class="form-control" v-model="photo">
        </div>
      </div>
      <div class="form-group row mt-3">
        <div class="offset-4 col-4 text-center">
          <button class="btn btn-outline-success" type="submit">Edit Student</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import UpdateStudent from "@/graphql/mutations/UpdateStudent.gql";

export default {
  name: "EditStudent",
  data() {
    return {
      id: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      hobbies: [],
      photo: ""
    };
  },
  mounted() {
    // Fetch student details from Router params and destructure it
    const {
      firstName,
      lastName,
      birthDate,
      hobbies,
      photo,
      id
    } = this.$route.params.student;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.hobbies = hobbies;
    this.photo = photo;
  },
  methods: {
    editStudent() {
      console.log(this.id);
      this.$apollo
        .mutate({
          // Query
          mutation: UpdateStudent,
          // Parameters
          variables: {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            photo: this.photo
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push(`/`);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
