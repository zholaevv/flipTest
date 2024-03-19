
import 'cypress-if'
import { Methods } from './controller'
describe('FLIP', {tags: '@flip.com'}, () => {

    const methods = new Methods()

    it('Create Panels', () => {
        methods.actions.visitMainPage()
        methods.actions.selectOrderForCard('hoodie')
        methods.actions.addToCart(1)
        })
})



