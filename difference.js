// small, reusable auxiliary functions

const apply = f => x => f(x);
const flip = f => y => x => f(x) (y);
const concat = y => xs => xs.concat(y);
const createSet = xs => new Set(xs);
const filter = f => xs => xs.filter(apply(f));


// left difference

const differencel = xs => ys => {
  const zs = createSet(ys);
  return filter(x => zs.has(x)
     ? false
     : true
  ) (xs);
};


// symmetric difference

const difference = ys => xs =>
 concat(differencel(xs) (ys)) (flip(differencel) (xs) (ys));

// mock data

const xs = [1,2,2,3,4,5];
const ys = [0,1,2,3,3,3,6,7,8,9];


// run the computation

console.log( difference(xs) (ys) );

