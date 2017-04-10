const shell = require('shelljs')
const exec = require('child_process').exec

process.stdin.resume()
process.stdout.write('Removing .git directory... ')
shell.rm('-rf', '.git/')
process.stdout.write('✓\n')

process.stdout.write('Installing dependencies... ')
exec('yarn install', () => {
  process.stdout.write('✓\n')
  initGit()
})

const initGit = (b) => {
  process.stdout.write('Initializing git... ')
  exec('git init && git add . && git commit -m "Initial commit"', () => {
    process.stdout.write('✓\n')
    process.stdout.write('\n')
    process.exit(0)
  })
}


