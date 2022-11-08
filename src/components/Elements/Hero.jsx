import React,{useState, useEffect} from "react";
const Hero = () => {
  // const [state, setstate] = useState(0);
  const [state, setstate] = useState(0);
  const [mult, setMul] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setMul(mult => mult + 1)
    }, 1000);
  } , [state])
  return (
    <>
        {/* <div className="container d-flex justify-content-center align-items-center " style={{height: '100vh'}}>
              <div className="">
                  <h1 className="text-center">{state}</h1>
                  <button className="btn bg-danger text-white mx-2" onClick={() => setstate(state - 1) }>Decrement</button>
                  <button className="btn bg-primary text-white mx-2" onClick={() => setstate(state + 1) }>Increment</button>
                  <button className="btn bg-warning text-white mx-2" onClick={() => setstate(0) }>Reset</button>
              </div>
        </div> */}

{/* <div className="container d-flex justify-content-center align-items-center " style={{height: '100vh'}}>
              <div className="">
                  <h1 className="text-center">{state}</h1>
                  <h1 className="text-center">{mult}</h1>
                  <button className="btn bg-danger text-white mx-2" onClick={() => setstate(state + 1) }>Increment</button>
              </div>
        </div> */}
    </>
  );
};

export default Hero;
