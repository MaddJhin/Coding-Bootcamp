switch (process.argv[2]) {
    case "multiply":
        multiply(process.argv[3], process.argv[4]);
        break;

    case 'add':
        console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));        
        break;

    case 'subtract':
        console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
        break;

    case 'divide':
        console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
        break;

    case 'remainder':
        console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
        break;
    
    default:
        console.log("Not a calculator option")
        break;
}

function multiply(arg1, arg2) {
    console.log(parseFloat(arg1) * parseFloat(arg2));
}

