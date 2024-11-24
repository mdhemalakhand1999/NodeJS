const path = require("path");
const myCurrentPath = __filename;
console.log(path.basename(myCurrentPath));
// path.js
console.log(path.extname(myCurrentPath));
// .js
const pathObj = {
  dir: "user/local",
  name: "testFile",
  ext: ".js",
};
console.log(path.format(pathObj));
// user/local/testFile.js
console.log(path.isAbsolute(myCurrentPath));
// true
console.log(path.isAbsolute("./math.js"));
// false
console.log(path.join("user", "local", "hemal", "testfile.js"));
// user/local/hemal/testfile.js
console.log(path.resolve(__dirname, "math", "math.js"));
// user\local\hemal\testfile.js
console.log(path.parse(myCurrentPath));
/**
 * Output will be:
 * {
 *   root: 'E:\\',
 *   dir: 'E:\\nodejs-stack-learner',
 *   base: 'path.js',
 *   ext: '.js',
 *   name: 'path'
 * }
 */
