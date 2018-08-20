// const path = require('path')
// const filePath = '/home/user/dir/file.txt'

// // console.log(path.dirname(filePath))
// // console.log(path.join('/b/a/c', '/b/a/c'))
// // console.log(filePath)
// // console.log(path.parse('/home/user/dir/file.txt'))
// console.log(path.relative('a/b/c',''))

const fs = require('fs')

let watchObject = fs.watch('./src', (type, filename) => {
  if (filename) {
    console.log(type, filename)
    // console.log(filename)
  }
})

setTimeout(() => {
    watchObject.close()
    console.log('成功关闭文件监听')
  }, 5000)
