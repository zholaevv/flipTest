import { Methods } from './controller'

describe("Log in", function() {

    const methods = new Methods()

    it("Log in", function() {
        methods.actions.visitLogin()
        methods.actions.enterEmailPassword('miras.zholaev@bk.ru', 'miras2004')
    })
})




