import styled from "styled-components"


export const Button = styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
border-radius: 5px;
background: #000;
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: 1px solid transparent;
transition: 0.5s background ease-in;
cursor: pointer;
&:hover{
      background-color: white;
      border: 1px solid black;
      color:black;
      transition: 0.4s background ease-in;
  }

`
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
      background-color: black;
      border: 1px solid transparent;
      color:white;
  }
`