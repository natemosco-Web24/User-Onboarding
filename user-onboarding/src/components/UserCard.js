import React from 'react'

export default function UserCard({ username = "username", email = "email", tos = "false", title = "fullstack" }) {
    return (
        <div>
            <h1>{username}</h1>
            <p>`Contact: ${email}`</p>
            <p>`tos checked:${tos}`</p>
            <h2>`I work as a ${title} developer`</h2>
        </div>
    )
}
