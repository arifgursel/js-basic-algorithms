function printSum(iNum) 
{
    var sum = 0;
    for (i = 1; i <= iNum; i++)
    {
    	sum += i;
    	console.log('New number: '+i+' Sum: '+sum)
    }
}

printSum(255);