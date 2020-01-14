/* Implement your solution here */

function countCompaniesOld(tree) {
  let rv = 0;

  function inner(tree) {
    rv += 1;

    if (tree.subsidiaries !== null) {
      for (let i = 0; i < tree.subsidiaries.length; i += 1) {
        inner(tree.subsidiaries[i]);
      }
    }
  }

  inner(tree);

  return rv;
}

function countCompanies(tree) {
  let rv = 1;

  if (tree.subsidiaries !== null) {
    for (let i = 0; i < tree.subsidiaries.length; i += 1) {
      rv += countCompanies(tree.subsidiaries[i]);
    }
  }

  return rv;
}

/* Do not touch anything below this line, but make sure the example works */
let tree = {
  name: 'INGKA HOLDING BV',
  subsidiaries: [
    {name: 'IKEA FASTIGHETER AB', subsidiaries: [{name: 'IKEA InvestFast AB', subsidiaries: null}]},
    {name: 'IKEA AB', subsidiaries: [
      {name: 'IKEA SVENSKA AB', subsidiaries: null},
      {name: 'IKEA IT AB', subsidiaries: null},
      {name: 'Slutplattan EPIGA 99006 AB', subsidiaries: [{name: 'OAO DOMOSTROITEL', subsidiaries: null}]}
    ]},
    {name: 'IKEA of Sweden AB', subsidiaries: [{name: 'IKEA Communications AB', subsidiaries: null}]}
  ]
};

if (countCompanies(tree) !== 10) console.error('Invalid amount');
else console.log('Solved!');
