import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkThemeToggle, BallTheme, Main, Gradient } from './DarkMode.styles'

DarkThemeToggle.defaultProps = {
  theme: {
    color: 'pink',
    bgc: 'purple',
  },
}

const theme = {
  bgc: 'white',
  color: 'black',
}

// This theme swaps 'color' and 'bgc'
const invertTheme = ({ color, bgc }) => ({
  color: bgc,
  bgc: color,
})

const getUserThemeChoice = () => {
  return localStorage.getItem('user-theme')
}

const getSystemScheme = () => {
  const mediaQuery = '(prefers-color-scheme: dark)'
  return window.matchMedia && window.matchMedia(mediaQuery).matches
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSystemTheme, setIsSystemTheme] = React.useState(
    () => !Boolean(getUserThemeChoice())
  )
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    console.log('isSystemTheme at isdarkmode:', isSystemTheme)
    if (isSystemTheme) return getSystemScheme()
    return localStorage.getItem('user-theme') === 'dark' ? true : false
  })
  const [mql, setMql] = React.useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)')
  )

  const buttonRef = React.useRef()
  React.useEffect(() => {
    console.log('enter setLocalStorage')
    localStorage.setItem('user-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  React.useEffect(() => {
    setIsLoading(() => true)
    if (isSystemTheme) setIsDarkMode(getSystemScheme())

    const toggleTheme = (e) => {
      // why isSystemTheme not the same as useState
      console.log('isSystemTheme at toggleTheme?', isSystemTheme)
      if (isSystemTheme) {
        console.log('system change?', isSystemTheme)
        setIsDarkMode(e.matches)
      }
    }
    mql.addEventListener('change', toggleTheme)
    console.log('run watch matchmedia')
    setIsLoading(() => false)

    return () => {
      return mql.removeEventListener('change', toggleTheme)
    }
  }, [isSystemTheme])

  const changeTHeme = () => {
    if (isSystemTheme) setIsSystemTheme(false)
    setIsDarkMode((prev) => !prev)
  }

  console.log('isSystemTheme', isSystemTheme)
  console.log('isDarkMode', isDarkMode)

  if (isLoading) return <p>Loading..</p>
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={isDarkMode ? invertTheme : theme}>
        <Main>
          <div className='sticky'>
            <ThemeProvider theme={invertTheme}>
              <DarkThemeToggle>
                <ThemeProvider theme={invertTheme}>
                  <BallTheme
                    isDarkMode={isDarkMode}
                    onClick={changeTHeme}
                  ></BallTheme>
                </ThemeProvider>
              </DarkThemeToggle>
            </ThemeProvider>
            <label htmlFor='theme-mode'>System Theme? </label>
            <input
              type='checkbox'
              name='theme-mode'
              id='theme-mode'
              checked={isSystemTheme}
              onChange={() => setIsSystemTheme((prev) => !prev)}
            />
            <ul>
              <a href='#about'>about</a>
              <a href='#contact'>contact</a>
              <a href='#info'>info</a>
            </ul>
          </div>
          <Gradient className='gradients'>hello</Gradient>
          <button
            className='btn'
            role={'button'}
            id='button'
            ref={buttonRef}
            onClick={() =>
              console.log(
                window
                  .getComputedStyle(buttonRef.current, null)
                  .getPropertyValue('font-size')
              )
            }
          >
            I'm A Button!
          </button>
          <form className='flow' onClick={() => 'reuturn;'}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <div className='error'></div>
            <button type='submit'>Submit</button>
          </form>
          <div className='error'>is error?</div>
          <div id='about'>
            ABOUT ipsum dolor sit amet consectetur adipisicing elit. Neque
            dignissimos modi error, minus harum corrupti ut facere expedita
            nulla voluptates non aliquam adipisci in sunt, ducimus quasi
            explicabo, dolorum dolor ipsum quaerat obcaecati veritatis unde.
            Dignissimos ea, incidunt nihil consequatur quos mollitia omnis quod
            aliquid maiores aliquam necessitatibus! Et, reiciendis explicabo
            odio aut nihil voluptas dolorum itaque sunt distinctio! Sapiente,
            sed recusandae cupiditate, molestiae mollitia, nihil consequuntur
            repudiandae blanditiis omnis iusto praesentium nisi sunt odio nulla.
            Ipsum quaerat atque, deleniti delectus inventore libero magnam
            facilis quidem deserunt dolorum, voluptas possimus eum. Enim, harum
            ipsam! Optio nulla facere cupiditate necessitatibus minus
            consectetur rerum a illum id ipsam. Libero ab at voluptatum beatae
            sint maiores illo qui ducimus corrupti! Assumenda animi ad quaerat
            ullam veritatis architecto deserunt eius adipisci unde obcaecati,
            ducimus nisi doloribus, deleniti consequuntur, reiciendis laboriosam
            incidunt fugiat laudantium libero? Quibusdam ratione corporis
            provident nihil inventore sit maiores totam assumenda nobis
            accusamus blanditiis, repellendus non nemo fugit recusandae quod nam
            nisi ducimus, dicta ab eos doloremque quas? Reprehenderit culpa
            blanditiis officiis velit vitae perferendis quisquam, alias eum,
            quae nulla est pariatur vero. Voluptate facilis, amet assumenda
            maxime consectetur molestiae quas animi tempora repudiandae soluta
            perferendis laudantium voluptates ipsa dolorum odio?
          </div>
          <div id='contact'>
            CONTACT ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            laudantium pariatur ipsum eius laboriosam illum, harum et fugiat
            architecto dolorem repellat aspernatur reprehenderit, dolores
            voluptates maiores hic amet commodi soluta neque nulla aliquid
            dolorum? Omnis nesciunt cupiditate ratione culpa officiis. Laborum
            corporis iure asperiores repellendus iste culpa, fuga quae illum
            architecto autem iusto voluptas atque laboriosam molestias porro
            praesentium saepe totam, delectus quis perspiciatis. Tenetur ratione
            voluptates illo aliquam debitis, a quisquam optio expedita enim unde
            deserunt veritatis ex atque accusamus. Vero maiores accusamus beatae
            illo praesentium mollitia eius cum, dicta quisquam placeat provident
            voluptatum atque ipsam pariatur officia deserunt hic aliquam animi!
            Mollitia quasi blanditiis ducimus, modi iure, voluptate quo sed unde
            consequuntur tenetur tempora, doloremque fugit voluptatum corrupti
            temporibus officia repellendus corporis quidem distinctio animi illo
            ipsam reprehenderit veniam ratione! Rem facere tempora odit, quos
            beatae amet aperiam adipisci consectetur commodi doloremque quis
            ipsum ratione ipsam minus accusamus aut quidem nihil, sequi
            praesentium reprehenderit quod nobis, numquam dignissimos! Cum
            aspernatur recusandae veritatis mollitia ab incidunt eos dicta!
            Velit ut unde nulla quo odio eveniet tempore quos quaerat. Molestiae
            ratione sint, corporis quae nulla esse incidunt nisi harum ab vero
            labore placeat, nesciunt magnam consequatur quasi repellat aliquid a
            sapiente? Ut voluptas repellendus accusamus eum deserunt placeat in
            numquam, deleniti temporibus obcaecati nisi blanditiis perspiciatis
            incidunt vitae optio error sint nulla nam eius, nobis, esse
            distinctio a minima architecto. Mollitia iste aperiam, qui
            voluptates repellat alias pariatur impedit ex excepturi corrupti
            quidem. Tempore maxime hic nihil, unde asperiores itaque mollitia
            culpa exercitationem nesciunt suscipit impedit dicta, quod numquam?
            Perspiciatis eveniet quam quia. Eaque, ipsa rerum ab tempore
            obcaecati temporibus rem consectetur reiciendis maiores.
            Consectetur, fuga. Sit est quis fugit amet, ratione ullam blanditiis
            suscipit fugiat officiis praesentium unde molestias, delectus nemo
            eos ipsam iusto laboriosam ducimus sunt eaque doloribus!
          </div>
          <div id='info'>
            INFO ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquid quis eos accusantium commodi debitis aspernatur eveniet
            consectetur distinctio cum ducimus cumque exercitationem sapiente
            magnam odit, eum fuga aliquam asperiores. Perferendis repudiandae
            eaque consequuntur dicta asperiores recusandae esse odio, deleniti
            nobis ex voluptatum obcaecati aliquid et. Debitis laudantium
            suscipit natus atque quasi perferendis, temporibus corrupti
            distinctio rerum sint, consequuntur inventore beatae ipsam, cumque
            eum repellendus officiis fuga. Dignissimos nesciunt, ab facilis
            velit, quam esse asperiores officia aperiam sint itaque, vero
            laboriosam fuga accusantium voluptates! Cum repellat voluptas harum
            obcaecati suscipit excepturi quisquam exercitationem! Et nisi iure
            dolorum ratione accusantium asperiores.
          </div>
        </Main>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App
