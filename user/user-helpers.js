module.exports = {
    validateUser
}

function validateUser(user){
    let errors = []

    if(!user.username || user.username.length < 2){
        errors.push('please include more than 2 characters in username')
    }
    if(!user.username || user.password.length < 4){
        errors.push('please include a password with atleast 4 characters')
    }
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}