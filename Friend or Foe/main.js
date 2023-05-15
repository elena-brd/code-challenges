function friend(friends) {
    //your code here
    return friends.filter(n => n.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Love", "Your", "Face", "1"]));