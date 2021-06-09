// Code your solution here

const findMatching = (arrofDrivers, driver) => {
  return arrofDrivers.filter(name => name.toLowerCase() === driver.toLowerCase())
}

const fuzzyMatch = (arrofDrivers, firstLetters) => {
return arrofDrivers.filter(driverName => driverName[0] + driverName[1] === firstLetters)
}

// const fuzzyMatch = (arrofDrivers, firstLetters) => {
//   return arrofDrivers.filter((driverName) => {
//     driverName[0] + driverName[1] === firstLetters
//   })
// }


const matchName = (driversArr, driver) => {
  return driversArr.filter(driverObj => driverObj.name === driver)
}