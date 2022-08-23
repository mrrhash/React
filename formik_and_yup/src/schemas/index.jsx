import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please enter your name..."),
    email : Yup.string().email().required("Please enter your email..."),
    pass : Yup.string().min(6).required("Please enter your password..."),
    conf_pass : Yup.string().required().oneOf([Yup.ref("pass"),null],"Password must match...") 
})