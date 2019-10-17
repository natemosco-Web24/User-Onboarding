import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"



function Signup({ values, errors, touched }) {
    return (
        <div>
            <Form>
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="text" name="username" placeholder="username"></Field>
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="email"></Field>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="password"></Field>
                </div>
                <Field component="select" name="title">Position:
                    <Option value="frontend">Front End Only</Option>
                    <Option value="backend">Back End Only</Option>
                    <Option value="fullstack">Fullstack</Option>
                </Field>
                <label>I have read and agree to terms of service:
                    <Field type="checkbox" name="tos" ></Field>
                </label>
                <button type="submit">Click To Submit</button>
            </Form>
        </div>
    )
}

export const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password, tos, meal }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
            title: frontend || "",
            title: backend || "",
            title: fullstack || "",
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .username("username not valid")
            .required("username is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required")
    }),

    handleSubmit(values) {
        console.log(values);
        axios
            .post("https://reqres.in/api/users")
            .then(res => {
                console.log(res);
                setUsersList([...usersList, res])
            })
    }
})(Signup);