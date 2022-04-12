function checkObj(obj, checkProp) {
    // Only change code below this line
    let objName = '';

    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    } else {
        return 'Not Found';
    }
    // Only change code above this line
}