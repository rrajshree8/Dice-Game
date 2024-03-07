  import styled from "styled-components"
  import SelectNum from "./SelectNum"
  import TotalScore from "./TotalScore"
  import RollDice from "./RollDice"
  import { useState } from "react"
  import { Button } from "../Btn/Button"
  import { OutlineButton } from "../Btn/Button"
  import Rules from "./Rules"

  const GamePlay = () => {

    const [score,setScore]=useState(0);

    const[currDice,setcurrDice]=useState(1);

    const[selNum,setSelNum]=useState();
    const[error,setError]=useState("")
    const[rules,setRules]=useState(false)

    const genRan =(min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice=()=>{
        if(!selNum) {
          setError("Please Select Any Number First")
          return
        }
        const randomNum = genRan(1,7);
        setcurrDice((prev) => randomNum );

        if (selNum === randomNum) {
          setScore((prev) => prev + randomNum);
        } else {
          setScore((prev) => prev - 2);
        }
        setSelNum(undefined);
    };
    const resetScore=()=>{
      setScore(0);
    }



    return (
      <MainSec>
          <div className="navi">
          <TotalScore score={score}/>
          <SelectNum selNum={selNum} error={error}
            setSelNum={setSelNum}
            setError={setError}
          />
          </div>
          <RollDice currDice={currDice}
          rollDice={rollDice}
          />
          <div className="btn">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={()=> setRules((prev)=>!prev)}>
            {rules ? "Hide":"Show"}  Rules</Button>
          </div>
          {rules&&<Rules/>}
      </MainSec>
    )
  }

  export default GamePlay


  const MainSec = styled.main`
  padding-top: 70px;
    .navi{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 20px;
  }
  `;