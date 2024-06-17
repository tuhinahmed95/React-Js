

const Ternary = () => {
    let marks = 70;
    return (
        <div>
            { 
                marks>=80?
                <h1>Briliant Result</h1>
                :
                <h1>Average Result</h1>
            }
        </div>
    );
};

export default Ternary;