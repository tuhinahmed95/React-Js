

const Result = () => {
    let marks = 80;
    return (
        <div>
            {(()=>{ 

                if(marks>=80 && marks<100){ 
                    return <h1>A+</h1>
                }
                else if(marks>=70 && marks<80){ 
                    return <h1>A</h1>
                }
                else if(marks>=60 && marks<70){ 
                    return <h1>A-</h1>
                }
                else if(marks>=50 && marks<60){ 
                    return <h1>B</h1>
                }
                else if(marks>=40 && marks<50){ 
                    return <h>C</h>
                }
                else if(marks>=33 & marks<40){ 
                    return <h>D</h>
                }
                else{ 
                    return <h1>Fail</h1>
                }

            })()}
        </div>
    );
};

export default Result;