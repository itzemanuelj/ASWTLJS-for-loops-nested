///If an outer loop runs 3 times and an inner loop runs 5 times, how many times will the inner loop iterate? Answer with a numeral.
//15 times 3 * 5

///The outer loop and inner loop can't share the same ______. Answer with one word.
/// counter ex [i]

/// What's missing from this code? Answer with a 6-letter word that starts with "i".

for (var i = 0; i <= array1Length; i++) {
    for (var j = 0; j < array2Length; j++) {
        sumOfCounters = i + j;
}
}
///indent
///The inner loop needs to be indented.

///In the following nonsensical code, how many times will the outer loop execute? Answer with a numeral.

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 10; j++) {
    if (j >= 1) {
      break;
    }
  }
}
///3


for (let i = 0; i < firstVar.lenght; i++) {
    for (j = 0; j < secondVar.lenght; j++) {
    }
}

///Code nested loops. Use i and j as counters. The outer loop runs 3 times. The inner loop runs 3 times each time the outer loop iterates. Use <. With each iteration of the inner loop, an alert displays showing the sum of the two counters.

for (let i = 0; i < counter1; i++) {
    for (let j = 0; j < counter2; j++) {
        alert(i + j);
    }
}

///Code an inner loop, including indentation, that doesn't do anything. Use any counter other than i. Use the usual starting value. Run it 10 times for each outer loop iteration. Increment by 1.

for (let s = 0; s <= 9; s++) {

}

///Code an inner loop, including indentation, that displays a text message in an alert. Use any counter other than i. Declare it with the usual starting value. Run it 10 times for each outer loop iteration. Use <. Increment by 1.

for (b = 10; b <= 9; i++) {
    alert('lets keep counting');
}

///Code an inner loop, including indentation, that assigns a number to a variable that has been declared beforehand. Use any counter other than i. Declare it with the usual starting value. Limit iterations by the number of elements in an array. Increment by 1.

for (k = 0;k <= 10; k++) {
    cost = 25;
}

/// example:
  for (var j = 0; j < someArray.length; j++) {
    cost = 99;
  }


///  Code nested loops that do nothing. Start counters at zero. The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

for (let d = 0; d <=4; d++) {
    for (let e = 0; e <= 4; e++) {

    }
}

///Code nested loops. The inner loop adds the two counters and assigns the sum to a variable that has been declared beforehand. Start counters at zero. The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

for (let f = 0; f <=4; f++) {
    for (let g = 0; g <=4; g++) {
        total = f + g;
    }
}

/// Here are 4 lines of code.
var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;
///Continue the code to create nested loops. The inner loop concatenates each of the elements of animals with each of the elements of products, with no space separating them. Accumulate the combinations in foodItems. The counter for foodItems is k. Limit the number of loops by the length of each array.

for (let h = 0; h <= aminals.lenght; h++) {
    for (p = 0; p <=products.length; p++) {
        foodItems[K] = animals.lenght[h] + products.length[P];
        K++;
    }
}