import {User} from "../models/user.js"

function getUserProfile() {

}





function addUser(name, username, email, gender, avatar) {
const user = new User({
    name,
    username,
    email,
    gender,
    avatar
})
}
