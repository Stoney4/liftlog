import { bodyStyles } from "./styles";

export default function Body(){
  return (
    <div style={bodyStyles.body}>
        <div style={bodyStyles.boxContainer}>
            <div style={bodyStyles.box}>
                <div style={bodyStyles.boxText}>
                    Test Box
                </div>
            </div>
            <div style={bodyStyles.box}>
            <div style={bodyStyles.boxText}>
                Next Box
            </div>
            </div>
        </div>
    </div>
  )
}