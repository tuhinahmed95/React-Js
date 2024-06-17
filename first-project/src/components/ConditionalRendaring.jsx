let LoginStatusBtn = (status)=>{ 
    if(status){ 
        return <button>Logout</button>
    }
    else{ 
        return <button>Login</button>
    }
}

const ConditionalRendaring = () => {
    return (
        <div>
            <h1>Login Staus</h1>
            {LoginStatusBtn(false)}
        </div>
    );
};

export default ConditionalRendaring;