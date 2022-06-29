import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkThemeToggle, BallTheme, Main } from './DarkMode.styles'

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugit voluptas similique doloremque facilis, quas sint, repudiandae
            deserunt, soluta vel quae. In sequi totam ullam atque minima neque,
            sunt cupiditate? Eligendi inventore odit laboriosam minus minima
            rerum enim vel molestias expedita ad, suscipit omnis nemo neque?
            Sequi dolore accusantium aliquam! Laborum eum fugit nihil corrupti
            in dolore odit adipisci repudiandae! Iure officiis alias unde a.
            Perferendis earum maiores corporis quia est. Odio ducimus nulla est
            unde, excepturi ex necessitatibus asperiores deleniti impedit quidem
            accusamus explicabo dolor sed delectus dolorem commodi! Optio
            laboriosam cumque aspernatur omnis voluptates doloremque vitae unde
            nemo id voluptate quis exercitationem maiores magnam veniam, alias
            esse reiciendis? Beatae nesciunt nostrum cupiditate? Cum odio ullam
            iste saepe eligendi. Optio, voluptatibus. Adipisci, molestiae!
            Blanditiis deserunt rem sapiente aliquam provident minus quae?
            Dignissimos magnam at aspernatur beatae dolorum id laboriosam natus
            ad velit quae? Quos consectetur officiis ratione adipisci non.
            Provident temporibus ipsa obcaecati possimus molestias quam natus
            quo non deserunt sit omnis, praesentium exercitationem aspernatur
            accusantium a nobis odit asperiores impedit, corrupti ea optio et
            molestiae tempore earum. Dicta? Ad quia consequuntur modi placeat,
            quidem reprehenderit nihil aliquam odit et libero possimus tenetur
            soluta architecto deleniti? Dolores, dicta molestias! Explicabo modi
            corporis earum suscipit deleniti veniam dolor sapiente quaerat?
            Neque quod repellendus, reprehenderit labore, quasi eligendi fugit
            sint iusto aspernatur placeat harum magnam minus perferendis. Quidem
            at nisi molestias eveniet tempora totam ipsum ut, cum sequi,
            repellat ullam necessitatibus! Suscipit exercitationem saepe iste ex
            quidem, necessitatibus earum nostrum similique assumenda
            perspiciatis, neque voluptate reiciendis debitis rem veritatis id
            beatae, veniam inventore ratione nisi officia in? Dolor incidunt
            blanditiis distinctio. Hic natus veritatis illum tempora ab
            assumenda laboriosam deserunt ducimus corrupti libero. Id laborum
            cum voluptas eligendi eum nesciunt nostrum, odit soluta, fugiat
            reiciendis facere accusantium consequatur ducimus hic provident.
            Natus numquam officiis at mollitia temporibus consequuntur
            cupiditate libero. Quam saepe id amet obcaecati, recusandae neque
            quibusdam molestiae omnis itaque minima, ea provident repellendus
            totam! Dolorem sed sunt accusamus ex. Soluta deleniti esse saepe et
            velit, aspernatur nihil tempore repellat odit. Atque, deserunt
            dolores. Quis, non natus consequuntur amet at eos nulla, dolor error
            quidem aliquid dicta corporis vero debitis? Saepe veritatis nesciunt
            aut atque nulla cumque, cum harum deserunt quis, aperiam quas
            perspiciatis aliquam nemo accusantium ullam velit ex quidem ipsa
            veniam consequatur provident quod libero. Veritatis, aliquam quam.
            Porro quos dolorum voluptatum dolore quisquam, enim aliquid ullam
            tenetur accusamus mollitia, amet repudiandae. Soluta voluptatum
            praesentium adipisci doloribus accusamus ab, ratione corporis
            veritatis similique non molestiae illo placeat totam. Architecto, ab
            alias earum iure corrupti cumque suscipit, veritatis vitae corporis
            nesciunt veniam necessitatibus temporibus aspernatur vero, atque est
            laborum nam perferendis saepe! Soluta non labore culpa, animi modi
            praesentium? Id iste earum ratione rem tempore asperiores fugiat,
            saepe delectus fugit ipsam aut molestiae et necessitatibus ex ullam.
            Numquam mollitia quos at nemo quis incidunt ipsam, voluptatum vitae
            fugit quibusdam. Ipsum maxime nulla blanditiis, sunt corporis
            voluptatem maiores delectus recusandae fuga incidunt, impedit labore
            explicabo neque voluptate illo dicta, veniam id exercitationem
            nesciunt tempore perferendis? Nemo dolorem consequuntur cum
            voluptas. Ut pariatur at repellendus fugit voluptatum cupiditate
            distinctio nesciunt assumenda. Saepe facilis iusto, optio
            reiciendis, nemo ratione excepturi doloribus commodi assumenda,
            minima exercitationem mollitia ut asperiores. Ipsam praesentium quod
            deserunt. Cupiditate eligendi exercitationem nihil ex. Ipsum placeat
            maxime ut? Non tenetur accusantium magnam eveniet id tempora. Ad
            consequuntur commodi neque cumque molestiae odit, repellendus,
            nostrum iusto sequi similique quos veritatis. Dolorem atque
            dignissimos culpa odit quo sed, quis pariatur rerum minus architecto
            id incidunt ab. Porro nobis iste recusandae pariatur deserunt aut
            culpa debitis veniam vitae, sunt ratione illum? Non. Incidunt nulla
            ipsum perspiciatis veniam impedit, numquam cupiditate aliquid
            laboriosam tempora accusamus in nam sapiente iure laudantium ipsam
            doloribus! Eveniet dolor ut consequatur ea error aperiam veniam
            iusto possimus quibusdam! Commodi incidunt dolores minima. Qui id
            consequatur eveniet excepturi vel laudantium corrupti nihil in esse
            dignissimos alias recusandae sequi voluptates fugiat explicabo
            sapiente, magnam quae veniam beatae, placeat quos at. Mollitia
            quaerat molestiae ipsa voluptatem illum sequi in neque maxime id
            soluta facere, ipsam corrupti eveniet adipisci ut, aperiam velit!
            Ipsa hic totam quo eaque numquam recusandae quasi sed enim.
          </p>
        </Main>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App
