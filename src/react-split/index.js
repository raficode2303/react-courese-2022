import Split from 'react-split-it'
// style
import './example-split.css'

const Componenet = ({ name, shape }) => (
  <div className={`content ${shape}`}>pane {name}</div>
)

export default function index() {
  return (
    <div className='simple'>
      <Split>
        <Componenet name={'one'} shape={'r'} />
        <Componenet name={'two'} shape={'y'} />
        <Componenet name={'three'} shape={'o'} />
      </Split>
    </div>
  )
}
