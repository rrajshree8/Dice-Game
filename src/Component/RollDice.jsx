    import styled from "styled-components"

    const RollDice = ({currDice,rollDice}) => {


      return (
        <DiceCont>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice/dice_${currDice}.png`} alt="Dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceCont>
      )
    }

    export default RollDice


    const DiceCont = styled.div `
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 48px;
    p{
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    }

    .dice{
        cursor: pointer;
    }

    `;