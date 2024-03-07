        import styled from "styled-components"

        const TotalScore = ({score}) => {
        return (
            <Score>
                    <h1>{score}</h1>
                <p>Total Score</p>
                </Score>
        )
        }

        export default TotalScore;

        const Score=styled.div `
        max-width: 200px;
        text-align: center;
            h1{
                color: #000;
        font-family: Poppins;
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

            }

            p{
            color: #000;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
            }
        `
