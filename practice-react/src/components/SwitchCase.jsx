

const SwitchCase = () => {

    let status = true; 
    
    switch (status){ 
        case true:
           return <button>Logout</button>
        case false:
           return <button>Login</button> 
        default:
            return null       
    }
 
};

export default SwitchCase;