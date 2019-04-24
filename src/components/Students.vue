<template>
  <div>
    <ApolloQuery :query="require('../graphql/queries/Students.gql')">
      <div slot-scope="{ result: { data, loading }, isLoading }">
        <template v-if="isLoading">Loading...</template>
        <template v-else>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Birth date</th>
                  <th>Hobbies</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in data.students" :key="student.id">
                  <td>
                    <img :src="student.photo" :alt="student.photo">
                  </td>
                  <td>
                    <router-link
                      v-bind:to="{name: 'student', params: {id: student.id}}"
                    >{{ student.firstName }}</router-link>
                  </td>
                  <td v-text="student.lastName"></td>
                  <td>{{student.birthDate | formatDate}}</td>
                  <td v-if="student.hobbies">
                    <span v-for="(hobby, $index) in student.hobbies" :key="$index">
                      {{hobby}}
                    </span>
                  </td>
                  <td>
                    <router-link
                      class="btn btn-outline-primary"
                      v-bind:to="{name: 'editStudent', params: {id: student.id, student: student}}"
                    >Edit</router-link>
                    <button
                      class="btn btn-outline-danger ml-2"
                      @click="deleteStudent(student.id)"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <router-link
                class="btn btn-outline-success"
                v-bind:to="{name: 'addStudent'}"
              >Add Student</router-link>
            </div>
          </section>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>
import Student from "@/views/Student";
import deleteStudent from "@/graphql/mutations/DeleteStudent.gql";
export default {
  name: "Students",
  data() {
    return {
      students: []
    };
  },
  components: {
    Student
  },
  methods: {
    deleteStudent(studentId) {
      console.log("Student id", studentId);
      this.$apollo
        .mutate({
          mutation: deleteStudent,
          variables: {
            id: studentId
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push("/");
        })
        .catch(error => {
          console.log("Error while deleting student", error);
        });
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  margin: 2rem 0 3rem 0;
  border-spacing: 0;
}
td,
th {
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
}
th {
  padding: 1.25rem 1rem;
  text-align: left;
}
td {
  padding: 1rem 1rem;
  transition: all 0.3s ease;
}
td .btn {
  display: inline;
}
tr:hover td {
  background: rgba(0, 0, 0, 0.03);
}
</style>
