import os from 'os'

const hostname = os.hostname()

let APP_URL = "http://localhost:8080/api/"
let themeNameTemp = "单点科技"
let indexDashboardPath = "/ceping"
let indexMenuspath = "auth/menus.php"


if(hostname == 'localhost')   {
  APP_URL = "http://localhost:8080/api/"
  themeNameTemp = "单点科技"
  indexDashboardPath = "/ceping"
  indexMenuspath = "auth/menus.php"
}

console.log("hostname hostname:", hostname)

export default {
  meEndpoint: APP_URL+'jwt.php?action=refresh',
  loginEndpoint: APP_URL+'jwt.php?action=login',
  logoutEndpoint: APP_URL+'jwt.php?action=logout',
  refreshEndpoint: APP_URL+'jwt.php?action=refresh',
  registerEndpoint: APP_URL+'jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  backEndApiHost: APP_URL,
  themeName: themeNameTemp,
  indexDashboardPath: indexDashboardPath,
  indexMenuspath: indexMenuspath,
  k: "fbae1da1c3f10b1ce0c75c8f5d3319d0"
}
