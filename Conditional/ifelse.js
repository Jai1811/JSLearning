function checkVoteEligibilty(age){
    let category;
    if(age>=18){
        category = "Adult"
        console.log("you can vote")
    }
    else{
        category = "Not an Adult"
        console.log("you cannot vote")
    }
}
//if(), else if(), else you cannot use break with this.
checkVoteEligibilty(0);

