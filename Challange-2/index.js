function speedcheck(speed) {
    speed = parseInt(speed);
    if (isNaN(speed) || speed === "") 
    return "Enter a value.";
const speedLimited = 70;
    if (speed <= speedLimited) return "Ok";
const points = Math.floor((speed - speedLimited) / 5);
return points > 12 ? "License suspended" : `Points: ${points}`;
}
console.log(speedcheck(speed)); //input the speed obtained to get points
