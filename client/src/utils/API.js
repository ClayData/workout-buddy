import axios from "axios";

export default {
    saveWorkout: function(workoutData) {
        return axios.post("/api/workouts", workoutData);
    },
    getWorkouts: function(user) {
        return axios.get("/api/workouts");
    },
    getCompleted: function(user) {
        return axios.get("/api/workouts/completed");
    },
    getWorkout: function(id){
        return axios.get(`/api/workouts/${id}`);
    },
    postUser: function(userData) {
        return axios.post(`/register_login`, userData);
    }
}
