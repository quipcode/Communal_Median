const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true
    else return false
}

const isEmpty = (str) => {
    return((str.trim().length == '0') ?  true :  false)
}

exports.validateSignUpData = (data) => {
    let errors = {}
    if(isEmpty(data.email)){
        errors.email = 'Must not be empty'
    }else if(!isEmail(data.email)){
        errors.email = 'Must be valid email'
    }

    if(isEmpty(data.password)) errors.password = ' Must not be empty'
    if(data.password != data.confirmPassword) errors.confirmPassword = 'Must match password'
    return{
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = (data) => {
    let errors = {}
    if(isEmpty(data.email)) errors.email = "Please provide an email"
    if(!isEmail(data.email)) errors.email = "Please provide a valid email"
    if(isEmpty(data.password)) errors.password = "Please provide a password"
    return {
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {}
    if(!isEmpty(data.blurb.trim())) userDetails.blurb = data.blurb
    return userDetails
}