// .filter('pages', function() {
//   return function(input, currentPage, pageSize) {
//     //check if there is an array to work with so you don't get an error on the first digest
//     if(angular.isArray(input)) {
//       //arrays are 0-base, so subtract 1 from the currentPage value to calculate the slice start
//       var start = (currentPage-1)*pageSize;
//       //slice extracts up to, but not including, the element indexed at the end parameter,
//       //so just multiply the currentPage by the pageSize to get the end parameter
//       var end = currentPage*pageSize;
//       return input.slice(start, end);
//     }
//   };
// })