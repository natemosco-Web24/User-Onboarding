import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function Signup(props, { setShowForm, values, errors, touched }) {
    return (
        <div>
            <Form>
                <div>
                    {/* {touched.username && errors.username && (<p>{errors.username}</p>)} */}
                    <Field type="text" name="username" placeholder="username"></Field>
                </div>
                <div>
                    {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
                    <Field type="email" name="email" placeholder="email"></Field>
                </div>
                <div>
                    {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
                    <Field type="password" name="password" placeholder="password"></Field>
                </div>
                <Field component="select" name="title">Position:
                    <option value="frontend">Front End Only</option>
                    <option value="backend">Back End Only</option>
                    <option value="fullstack">Fullstack</option>
                </Field>
                <label>
                    <Field type="checkbox" name="tos" /> {/*checked={values.tos}*/}
                    Accept TOS
                </label>
                <button type="submit" onClick={() => { props.setShowForm(false) }}>Click To Submit</button>
            </Form>
        </div>
    )
}

const FormikSignup = withFormik({
    mapPropsToValues({ username, email, password, tos, title }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
            title: title || "fullstack"

        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required")
    }),

    handleSubmit(values, props) {
        console.log(values);
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log(res);
                props.setUsersList([...props.usersList, res])
            })
            .catch(err => {
                console.log("axios error", err)
            });
    }
})(Signup);

export default FormikSignup;