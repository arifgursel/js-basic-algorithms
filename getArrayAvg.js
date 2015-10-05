function getArrayAvg(iArray)
{
	var sum = 0;
	for (i = 0; i < iArray.length; i++)
	{
    	sum += iArray[i];
    }
    console.log('Sum of array: '+sum)	
	console.log('Avg of array is: '+sum/iArray.length)
}

var test = [1,3,6,98,4,89,0,3,8,34,9,4,6,342,23,7,0,24,357,8,2463,95,23,6,3];
getArrayAvg(test);