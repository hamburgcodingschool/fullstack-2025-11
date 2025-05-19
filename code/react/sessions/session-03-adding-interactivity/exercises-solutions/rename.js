const { readdirSync, readFileSync, writeFileSync, write } = require('node:fs')
const { join } = require('node:path')

const dirnames = readdirSync('.').filter(dirname => dirname !== 'rename.js')
for (const dirname of dirnames) {
  packagePath = join('.', dirname, 'package.json')
  lockfilePath = join('.', dirname, 'package-lock.json')
  const packageJson = readFileSync(packagePath, 'utf8')
  const packageLock = readFileSync(lockfilePath, 'utf8')

  writeFileSync(packagePath, packageJson.replaceAll('theapp', dirname), 'utf8')
  writeFileSync(lockfilePath, packageLock.replaceAll('theapp', dirname), 'utf8')
}
