import { User } from "../models/user.js"

function getUserProfile() {

}





async function addUser(name, username, email, gender, avatar) {
    const user = new User({
        name,
        username,
        email,
        gender,
        avatar
    })

    await user.save()


}



export {
    addUser
}
