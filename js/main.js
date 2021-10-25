let boxes = document.querySelector('.boxes');

for (let i = 1; i <= 100; i++) {
    let className = '';
    let text = '';

    if (i % 3 == 0 && i % 5 == 0) {
        className="fizz-buzz-box"
        text="fizzbuzz"
    } 

    else if (i % 3 == 0) {
        className="fizz-box"
        text= "fizz"
    }

    else if (i % 5 == 0) {
        className="buzz-box"
        text="buzz"
    }
    
    else {
       className="default";
       text = i;
    }

    boxes.innerHTML += `<span class="box ${className}">${text}</span>`;
}