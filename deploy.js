var ghpages = require('gh-pages')
ghpages.publish('dist/project-final', {
  branch: 'master',
  repo: 'https://github.com/at-dieunguyen/deloy-project.git'
}, function (err) {
  console.log('Deploy Success')
  console.log(err)
})
