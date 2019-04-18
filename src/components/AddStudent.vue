<template>
  <section>
    <h5 class="text-center">Add Student</h5>
    <form class="form" method="POST" @submit.prevent="addStudent">
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
        <label class="offset-4 col-2">Hobbies</label>
        <div class="col-4">
          <input type="text" class="form-control" v-model="hobby">
        </div>
        <button type="button" class="btn btn-success" @click="addHobby">Add Hobby</button>
      </div>
      <div class="row mb-2">
        <div class="offset-6 col-4" v-for="(hobby, $index) in hobbies" :key="$index">
          <span v-text="hobby"></span>
          <button type="button" class="btn btn-outline-danger" @click="deleteHobby(hobby)">Delete</button>
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
          <button class="btn btn-outline-success" type="submit">Add Student</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import addStudent from "@/graphql/mutations/AddStudent.gql";
import moment from "moment";
export default {
  name: "AddStudent",
  data() {
    return {
      firstName: "",
      lastName: "",
      birthDate: "",
      hobby: "",
      hobbies: [],
      photo: ""
    };
  },
  methods: {
    addStudent() {
      console.log(this.hobbies);
      this.$apollo
        .mutate({
          // Mutation Query to Add Students
          mutation: addStudent,
          // Parameters to pass
          variables: {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            photo: this.photo,
            hobbies: this.hobbies
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push(`/`);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addHobby() {
      if (this.hobby) this.hobbies.push(this.hobby);
      this.hobby = "";
    },
    deleteHobby(hobby) {
      const updatedHobbies = this.hobbies.filter(hby => {
        return hby !== hobby;
      });
      this.hobbies = updatedHobbies;
    }
  }
};
</script>
