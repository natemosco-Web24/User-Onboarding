import React from 'react'

export default function UserCard({ props }) {
    return (
        <div>
            <h1>{username}</h1>
            <p>`Contact: ${email}`</p>
            <p>`tos checked:${tos}`</p>
            <h2>`I work as a ${title} developer`</h2>
        </div>
    )
}
