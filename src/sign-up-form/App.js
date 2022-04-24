import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    newsletter: '',
  })
  const handleChange = (e) => {
    const { name, value, checked } = e.target
    console.log(name, value, checked)
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === 'newsletter' ? checked : value,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password || !formData.passwordConfirm) {
      for (const [key, value] of Object.entries(formData)) {
        !value && console.log(`${key}: Is Empty`)
      }
      return
    }
    console.log('formData: ', formData)
    if (formData.password === formData.passwordConfirm) {
      console.log('Successfully signed up')
      formData.newsletter &&
        console.log('Thanks for signing up for our newsletter')
    } else {
      console.log('passwords to not match')
    }
    alert('sub done!')
  }
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type='password'
          id='password-confirm'
          name='passwordConfirm'
          placeholder='confirm password'
          className='confirm'
          value={formData.passwordConfirm}
          onChange={handleChange}
        />

        <label htmlFor='newsletter'>
          <input
            type='checkbox'
            id='newsletter'
            name='newsletter'
            checked={formData.newsletter}
            onChange={handleChange}
          />
          I want to join the newsletter
        </label>
        <button>sign up!</button>
      </form>
    </div>
  )
}

export default App
