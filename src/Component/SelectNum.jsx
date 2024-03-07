    import styled from "styled-components"

    const SelectNum = ({setError,error,selNum, setSelNum}) => {
        const arrNum=[1,2,3,4,5,6];

        const SelNumHan=(value)=>{
          setSelNum(value);
          setError("");
        }


      return (
        <NumSelCon>
        <p className="err">{error}</p>
        <div className="flex">
        {arrNum.map((value,i)=>(
            <Box issel = {value ===selNum}
            key={i} onClick={()=> SelNumHan(value)}
            >{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
        </NumSelCon>
      )
    }

    export default SelectNum

    const NumSelCon=styled.div`
    .err{
      color: red;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
      display: flex;
      gap: 24px;

    }
    p{
      font-size: 24px;
      font-weight: 700px;
    }
    `;


    const Box = styled.div`
    display: grid;
    width: 72px;
    height: 72px;
    border: 1px solid #000;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>(props.issel ? "black": "white")};
    color: ${(props)=>(props.issel ? "white": "black")};
    `;