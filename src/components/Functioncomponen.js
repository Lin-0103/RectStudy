// CREATE A COMPONENT BASES ON COMPONENT
const app = (props)=>{ //--- NEED TO PUT YOUR COMPONENT ON A VERIBLE 
    return( //--- FUNTCTION RETURN, ALL THE THINGS HERE WILL RENDERED ON INDEX.JS
        <div>
            <h3>Hello {props.name}</h3>
        </div>
    )
}

export default app //--- EXPORT THE FUNCTION (IN THIS CASE APP) AS DEFAULT SO THIS FUCNTION CAN BE RENDERED
/* --- NOTES
1° TO USE PARAMETERS YOU NEED TO USE "props.(*parameter name*), AND DECLARATE THE PARAMETER WITH THE SAME NAME WHEN RENDER THE FUNCTION"
*/