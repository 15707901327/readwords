function simpleTimeout(consoleTimer){
    console.log(consoleTimer);
}
console.time("twoSecond");
setTimeout(simpleTimeout,2000,"twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout,1000,"oneSecond");