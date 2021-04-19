// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
};

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(2, 4);
    return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(multiplier){
        return fare*multiplier
    }
};

function fareDoubler(fare){
    return fare * 2;
};

function fareTripler(fare){
    return fare * 3;
};

function selectDifferentDrivers(drivers, firstOrLast){
    return firstOrLast(drivers);
};