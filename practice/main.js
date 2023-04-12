function func1() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}

function func2() {
  if (true) {
    let a = "aa";
    console.log(a);
  }
  // console.log(a);
}

function func3() {
  if (true) {
    const a = "aaa";
    console.log(a);
  }
  // console.log(a);
}

func1();
func2();
func3();
