// Find and fix the syntax error of the code below

async function sleep(brand) {
     console.log(`${brand} executed!`);
}

async function executeLoop(list) {
     list.forEach(brand => {
          console.log('Executing... ' + brand);
          await sleep(brand);
     });
}

const brandList = ["GOODYEAR", "NEXEN", "BRIDGESTONE", "DUNLOP"];
executeLoop(brandList);