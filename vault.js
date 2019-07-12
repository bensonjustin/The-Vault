'use strict';
module.exports = function() {
  
    let vault = {key: null, value: null}

    let setValue = function(key, value){
        vault.key = key;
        vault.value = value;
    }
    let getValue = function(key){
        if (key){
            return vault.value;
        }else{
            return null;
        }
    }
    return{
        setValue: setValue,
        getValue: getValue
    }
};