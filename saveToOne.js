function roundDown(inum)
{
	if(inum > 0)
	{
		inum = Math.floor(inum);
		console.log('Num was postive, returning:'+inum);
		return inum;
	}
	else
	{
		inum = Math.ceil(inum);
		console.log('Num was negative, returning:'+inum);
		return inum;
	}
}

function saveToOne(iNum) 
{
    var sum = 0;
    console.log('The input is: '+iNum);
    while(iNum/10 >= 1 || iNum/10 < 0)
    {
    	console.log('Remainder is: '+iNum%10);
    	sum += iNum % 10;
    	console.log('Sum is now: '+sum);
    	iNum /= 10;
    	//iNum = Math.floor(iNum);
    	iNum = roundDown(iNum);
    	console.log('iNum is now: '+iNum); 
    	console.log('=======')
    }
    if (sum > 9 || sum <= -10)
    {
    	console.log('Opps...The funtion completed but the result was: '+sum+' and needs to be crunched more!')
    	sum = saveToOne(sum)
    }
    else
    {
    	console.log('The final sum is: '+sum);

    }
    return sum;
}

function saveToOneFast(iNum) 
{
    if (iNum%9 == 0)
    {
    	return 9;
    }
    return iNum%9;
}

//saveToOne(-9635);
//saveToOne(9635);
console.log('The final sum is: '+saveToOneFast(9635));
