const INCREMENT = "increment";
const DECREMENT = "decrement";
const increment = () => {
    console.log("increment action");
    return {
      type: INCREMENT
    };
  };
  
  const decrement = () => {
    console.log("decrement action");
    return {
      type: DECREMENT
    };
  };
  
  export { increment, decrement };