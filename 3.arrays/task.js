function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; 
  }
  
  return arr1.every((value, index) => {
    return value === arr2[index];
  });
}


function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender); 
  const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.age, 0); 
  const avgAge = sumOfAges / (filteredUsers.length); 
  return avgAge;
}
