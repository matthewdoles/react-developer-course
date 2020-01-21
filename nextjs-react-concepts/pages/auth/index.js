import React from 'react'
import User from '../../components/User'

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Page - {props.appName}</h1>
        <User name="Matthew" age={24} />
    </div>
)

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super Auth'})
        }, 1000)
    })
    return promise
}

export default authIndexPage