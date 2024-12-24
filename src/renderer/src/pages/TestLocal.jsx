import React, { useEffect } from 'react'

const TestLocal = () => {
    useEffect(() => {
        localStorage.setItem('newToken', '123456')
    }, [])
  return (
    <div>TestLocal</div>
  )
}

export default TestLocal