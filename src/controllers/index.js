const { loginRoutes } = require("./users")
const { questionRoutes } = require("./question")
const { dashboardRoutes } = require("./dashboard")
const { subjectRoutes } = require("./subjects")
const { testRoutes } = require("./test")


module.exports = {
    loginRoutes,
    questionRoutes,
    dashboardRoutes,
    subjectRoutes,
    testRoutes
}


