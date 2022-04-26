import React from 'react'

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    console.log('run useEffect of WindowTracker')
    console.log('%caddEventListener of resize..', 'color: green;')
    const resizeWindow = () => {
      console.log('resizing window width')
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', resizeWindow)

    return function () {
      console.log('%ccleaning up addEventListener...', 'color: red;')
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])
  return (
    <div className='window-tracker'>
      <h1>
        Window Width:{' '}
        <span style={{ color: 'yellow', backgroundColor: 'blue' }}>
          {windowWidth}px
        </span>
      </h1>
    </div>
  )
}

export default WindowTracker

/*
react_devtools_backend.js:3973 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at WindowTracker

@@ to solve this problem we use cleanning return in the useEffect@@

*/
