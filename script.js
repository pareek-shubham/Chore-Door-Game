let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const isBot = (door) => {
    return (door.src === botDoorPath);
}
const isClicked = (door) => {
   return (door.src !== closedDoorPath);
}
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    }
    else if (isBot(door)) {
        gameOver('lose');
    }
} 
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch(choreDoor)
    {
    case 0:
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
    case 1:
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
    case 2:
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        break;
    default:
        alert("Something Went Wrong");
    }
}
const onImageOneClicked = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}
const onImageTwoClicked = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}
const onImageThreeClicked = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}
const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}
startButton.onclick = () => {
    (!currentlyPlaying)
    ? startRound()
    : null;
}
const gameOver = (status) => {
    startButton.innerHTML = status === 'win'? 'You win! Play again?':'Game over ! Play again?';
    currentlyPlaying = false;
}
startRound();
