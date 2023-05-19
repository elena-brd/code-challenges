const findShort = (s) => Math.min.apply(this, s.split(' ').map(shortElement => shortElement.length))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));