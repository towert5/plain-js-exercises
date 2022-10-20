// Find and fix the syntax error of the code below

async function sleep() {
     return new Promise(resolve => setTimeout(resolve, 1000));
}

async function executeLoop(list) {
     list.forEach(brand => {
          console.log('Executing... ' + brand);
          await sleep();
     });
}

const brandList = ["GOODYEAR", "NEXEN", "BRIDGESTONE", "DUNLOP"];
executeLoop(brandList);