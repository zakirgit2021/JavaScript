let Meet={

    Day: 'Monday',
    NM : 0,
    MD : 0,

    addMeeting: function(num){
        this.NM = this.NM + num
    },

    doneMeeting: function(num1){
        this.MD= this.MD + num1
    },
    resetM: function () {
        this.NM = 0
        this.MD = 0
    },
    PrintFun: function(){
        return `The meeting left ${ this.NM - this.MD}`
    }

}

Meet.addMeeting(4)
Meet.addMeeting(3)
Meet.doneMeeting(5)
console.log(Meet.PrintFun())

Meet.resetM()

console.log(Meet.PrintFun())