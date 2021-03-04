/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }
// let createEmployeeRecord = function(row){
//     return {
//         firstName: row[0],
//         familyName: row[1],
//         title: row[2],
//         payPerHour: row[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
// }

// let createEmployeeRecords = function(employeeRowData) {
//     return employeeRowData.map(function(row){
//         return createEmployeeRecord(row)
//     })
// }

// let createTimeInEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return this
// }

// let createTimeOutEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return this
// }

// let hoursWorkedOnDate = function(soughtDate){
//     let inEvent = this.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     let outEvent = this.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     return (outEvent.hour - inEvent.hour) / 100
// }

// let wagesEarnedOnDate = function(dateSought){
//     let rawWage = hoursWorkedOnDate.call(this, dateSought)
//         * this.payPerHour
//     return parseFloat(rawWage.toString())
// }


// let findEmployeeByFirstName = function(srcArray, firstName) {
//   return srcArray.find(function(rec){
//     return rec.firstName === firstName
//   })
// }

// let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor.call(rec)
//     }, 0)
// }

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (arr) {
    return arr.map(function (element) {
        return createEmployeeRecord(element)
    })
}

let createTimeInEvent = function (dateInput) {
    let [date, time] = dateInput.split(" ")
    
    this.timeInEvents.push(
        {
            type: "TimeIn",
            hour: parseInt(time),
            date: date
        }
    )
    return this
    
}

let createTimeOutEvent = function (dateInput) {
    let [date, time] = dateInput.split(" ")
    
    this.timeOutEvents.push(
        {
            type: "TimeOut",
            hour: parseInt(time),
            date: date
        }
    )
    return this
    
}

let hoursWorkedOnDate = function (dateInput) {
    let timeIn = this.timeInEvents.find(function(element){
        return element.date === dateInput
    })
    let timeOut = this.timeOutEvents.find(function(element){
        return element.date === dateInput
    })
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function (dateInput) {
    return hoursWorkedOnDate.call(this, dateInput) * this.payPerHour
}

let allWagesFor = function () {
    let dates = this.timeInEvents.map(function (e) {
        return e.date
    })
    // let final = dates.reduce(function (total, running) {
    //     return total + wagesEarnedOnDate.call(this, running)
    // }.bind(this), 0)
    //return final
    let finalTwo = dates.reduce((total, running) => {
        return total + wagesEarnedOnDate.call(this, running)
    }, 0)
    return finalTwo
    
}
let findEmployeeByFirstName = function (srcArr, fname) {
    return srcArr.find(function (element) {
        return element.firstName === fname
    })

}

let calculatePayroll = function (arr) {
    return arr.reduce(function(total, running){
        return total + allWagesFor.call(running)
    }, 0)
}