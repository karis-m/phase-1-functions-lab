// Code your solution in this file!

function distanceFromHqInBlocks(blockNo){
    if(blockNo > 42){
        return blockNo - 42;
    }
    else{
        return 42 - blockNo;
    }
}

function distanceFromHqInFeet(blockNo){
   let feet = distanceFromHqInBlocks(34);
    return feet * 264;
}

function distanceTravelledInFeet(start,destination){
    if(destination > start){
        return (destination - start) * 264;
    }
    else{
        return (start - destination) * 264;
    }
}
function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start,destination);
   if (distance <= 400){
    return 0;
   }
   else if(distance> 400 && distance <= 2000){
    return 0.02 * (distance - 400);
   }
   else if(distance > 2000 && distance < 2500){
    return 25;
   }
   else
   {
    return 'cannot travel that far';
   }
}