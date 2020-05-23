import axios from "axios";

export default {
    saveWorkout: function(workoutData) {
        return axios.post("/api/workouts", workoutData);
    },
    getWorkouts: function(user) {
        return axios.get(`/api/workouts/${user}`);
    },
    getCompleted: function(user) {
        return axios.get(`/api/workouts/completed/${user}`);
    },
    setCompleted: function(id) {
        return axios.put(`/api/workout/completed/${id}`);
    },
    incrementCompleted: function(id, timesCompleted) {
        return axios.put(`/api/workout/increment/${id}/${timesCompleted}`);
    },
    getWorkout: function(id){
        return axios.get(`/api/workout/${id}`);
    },
    postUser: function(userData) {
        return axios.post(`/register_login`, userData);
    },
    signOut: function(){
        return axios.get('/logout')
    },
    deleteWorkout: function(id){
        return axios.delete(`/api/workout/${id}`)
    },
    getUserData: function(user) {
        return axios.get(`/api/users/${user}/stats`)
    },
    writeToStats: function(user, workout) {
        return axios.put(`/api/users/${user}/stats`, {data: workout})
    }

}
