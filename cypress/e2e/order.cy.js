


import { Methods } from './controller'

describe('Rozetka', () => {
    const methods = new Methods()
    it('By', () => {
        methods.actions.visitLogin()
        methods.actions.enterEmailPassword('miras.zholaev@bk.ru', 'miras2004')
        methods.actions.visitMainPage()
        methods.actions.orderMethod()
    })
})
