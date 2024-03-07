    import styled from 'styled-components'
    import { Button } from '../Btn/Button'

    export const Startpage = ({toggle}) => {
      return (
        <Container>
        <div><img src="/images/dices 1.png" alt="" /></div>
        <div className='Content'>
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
        </Container>
      )
    }
    export default Startpage

    const Container = styled.div`
    max-width: 1180px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    height: 100vh;
    .Content h1{
    color: #000;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
    }
    `