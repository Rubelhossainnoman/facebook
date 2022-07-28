const setaleart = (msg,type) =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`
}

/**
 * Create LSdata...
*/

const setLSdata = (key,value) =>{
    // Data initialization....
    let data = [];

    // 
    if (localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key));
    }

    // now data push value...in empty array....
    data.push(value);

    // Now set data in localstroge...
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Get LS data ...form localstroge...
*/

const readLSdata = (key) =>{
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
}

/**
 * Update ls data....here...
*/

const updateLSdata = (key, array) =>{
    localStorage.setItem(key, JSON.stringify(array));
}