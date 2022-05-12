import styled from 'styled-components'

const WriteStyled = styled.div`
  background-color: #ffffffcc;
`
const defaultNote = '# Type your markdown note"s here'

export const WriteMarkDowon = ({ currentNote, handleNewNote }) => {
  return (
    <WriteStyled className='item item2'>
      <div className='text-decoration'>
        <button>H</button>
        <button>B</button>
        <button>I</button>
        <button style={{ textDecoration: 'line-through' }}>S</button>
        <button>&#x1F517;</button>
        <button>&#10080;</button>
        <button>{'</>'}</button>
        <span>&#128442;</span>
        <button>
          <img
            src='https://cdn-icons.flaticon.com/png/512/2356/premium/2356709.png?token=exp=1652292353~hmac=131e1f8582915e5da52f0dc48cb7adb6'
            alt='unorderd list icon'
            width={30}
          />
        </button>
        <button>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2356/2356549.png'
            alt='orderd list icon'
            width={30}
          />
        </button>
        <button>
          <img
            src='https://cdn-icons.flaticon.com/png/512/354/premium/354001.png?token=exp=1652292510~hmac=aff27d9c12908fb130119d27ec38f8bc'
            alt='to do list'
            width={30}
          />
        </button>
      </div>
      <textarea
        name=''
        id=''
        cols='70'
        rows='20'
        onChange={handleNewNote}
        placeholder={defaultNote}
        value={currentNote}
      />
    </WriteStyled>
  )
}
