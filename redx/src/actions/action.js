export const CountUp=()=>{
    return {type:"INCREMENT"}
}
export const CountDown=()=> {
    return {type:"DECREMENT"}
}
export const InCount=(a)=> {
    return {type:"count",payload:a}
} 