module.exports = function toReadable (number) {
    if (+number === +0) {
        return 'zero';
    }
  if (number.toString().length === 1) {
    let array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 1; i < 10; i++) {
        if (+number === +i) {
            return array1[+i - 1];
        }
    }
  }
  if (number.toString().length === 2 && +((number.toString())[0]) === 1) {
    let array1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    for (let i = 10; i < 20; i++) {
        if (+number === +i) {
            return array1[+i - 10];
        }
    }
  }
  if (number.toString().length === 2 && +((number.toString())[0]) !== 1) {
    let array1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let array2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    for (let i = 2; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (+number === +(i.toString() + j.toString())) {
                return (array2[i - 2].toString() + ' ' + array1[j].toString()).trim();
            }
        }
    }
  }

  if (number.toString().length === 3 && +((number.toString())[1]) === 0) {
    let array1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (+number === +(i.toString() + '0' + j.toString())) {
                return (array1[i].toString() + ' ' + 'hundred' + ' ' + array1[j].toString()).trim();
            }
        }
    }
  }

  if (number.toString().length === 3 && +((number.toString())[1]) === 1) {
    let array1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let array2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    for (let i = 1; i < 10; i++) {
        for (let j = 10; j < 20; j++) {
            if (+number === +(i.toString() + j.toString())) {
                return (array1[i].toString() + ' ' + 'hundred' + ' ' + array2[j - 10].toString());
            }
        }
    }
  }

  if (number.toString().length === 3 && +((number.toString())[1]) !== 1) {
      if (+((number.toString())[1]) !== 0) {
            let array1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
            let array2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            for (let i = 1; i < 10; i++) {
                for (let j = 2; j < 10; j++) {
                    for (let k = 0; k < 10; k++) {
                        if (+number === +(i.toString() + j.toString() + k.toString())) {
                            return (array1[i].toString() + ' ' + 'hundred' + ' ' + array2[j - 2].toString() + ' ' + array1[k].toString()).trim();
                        }
                    }
                }
            }
      }
  }
}
