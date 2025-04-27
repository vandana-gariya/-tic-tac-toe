let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newGamebtn = document.querySelector("#new-game");
let msgCont = document.querySelector(".msgCont");
let msg = document.querySelector("#msg");

let turnO = true; // playerX playerO
let count = 0;
const winPattern = [
    [0, 1, 2,],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = "#f1a208";
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "#b1740f";
        }
        box.disabled = true;

        count++;

        CheckWinner();

    });
});

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgCont.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation ! Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const CheckWinner = () => {
    for (let pattern of winPattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
                showWinner(posval1);
            
            }
            else {
                if (count == 9) {
                    msg.innerText = "Match is Draw ";
                    msgCont.classList.remove("hide");
                    disableBoxes();
                }
            }
        }
    }

};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);