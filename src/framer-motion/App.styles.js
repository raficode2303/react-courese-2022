import styled from 'styled-components'

const WrapperHeight = '100'

export const Wrapper = styled.main`
  width: 450px;
  height: ${WrapperHeight};
`

export const Content = styled.div`
  position: absolute;
  overflow: clip;
  background-color: #fff;
  border-radius: 2rem;
  width: ${(props) => (props.isExpend ? '400px' : '150px')};
  height: ${(props) => (props.isExpend ? '220px' : '70px')};
  padding: 15px 20px;
  top: ${(props) => (props.isExpend ? '220px' : '120px')};
  left: ${(props) => (props.isExpend ? '240px' : '120px')};

  transition: 1s linear;

  h4 {
    text-align: center;
  }
  p {
    transform: ${(props) => (props.isExpend ? 'scale(1)' : 'scale(0)')};

    transition: ${(props) => (props.isExpend ? '1s' : '1.5s')};
    line-height: ${(props) => (props.isExpend ? '20px' : '0px')};
  }
`
