import React from 'react'
import Navegation from './Navegation'
import Flutter from './Flutter'


const AppLayout = ({ children, auth }) => {
  return (
    <>
    <Navegation user={auth.user} />
        <main>{children}</main>
    <Flutter />
    </>
  )
}

export default AppLayout