import WithStyle from "../../../hocs/withStyle";


const Button = () => <button>+</button>

export const StyledComponent = WithStyle(<Button/>,{backgroundColor:'red', padding:'3rem', borderRadius:5})