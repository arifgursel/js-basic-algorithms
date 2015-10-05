function findMax(iArray)
{
	var max = 0;
	for (i = 0; i < iArray.length; i++)
	{
		if (max < iArray[i])
		{
			max = iArray[i];
		}
	}
	console.log('Max value in array is: '+max)
}

var test = [1,3,6,98,4,89,0,3,8,34,9,4,6,342,23,7,0,24,357,8,2463,95,23,6,3];
findMax(test);