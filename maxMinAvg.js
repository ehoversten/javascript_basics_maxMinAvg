function returnMinMaxAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;

  for(var i = 0; i < arr.length ; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }  // end for loop
  var avg = sum / arr.length;

  console.log('Min is: ' + min);
  console.log('Max is: ' + max);
  console.log('Sum of array is: ' + sum);
  console.log('Avg is: ' + avg);
   return ('Min is: ' + min + ', ' + 'Max is: ' + max + ', ' + 'Avg is: ' + avg);
} // end of function
