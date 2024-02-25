const School= require('./school')

const school= new School()

school.on('bellRing', para=>{
    console.log(`We need to run because ${para.period} ${para.text}`);
})

school.startPeriod()