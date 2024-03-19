
import 'cypress-if'

export class Methods {
    urlLoginPage='https://www.flip.kz/user?password'
    urlMainPage='https://www.flip.kz'
    getters = {
        emailInput: () => cy.contains('Телефон или E-mail'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('.password-form > .nbtn'),
        searchOrder: () => cy.get('input[id="search_input"]'),
        selectOrder: () => cy.get('.placeholder .good-list-item'),
        hoodieColor: () => cy.get('[data-id="2"]'),
        cart: () => cy.get('#cart'),
        orderButton: () => cy.get('input[name="order_button"]'),
        hoodieSize: () => cy.get('.size-color label')
    }

    actions = {
        visitLogin: () => {
            cy.visit(this.urlLoginPage)
        },
        visitMainPage: () => {
            cy.visit(this.urlMainPage)
        },

        enterEmailPassword: (email, password) => {
            this.getters.emailInput().type(email)
            this.getters.passwordInput().type(password)
            this.getters.loginButton().click({force: true});
        },

        selectOrderForCard: (text) => {

            this.getters.searchOrder().type(text)
            cy.contains('Найти').click()

            this.getters.selectOrder().eq(3).click()
            this.getters.hoodieColor().click()
        },

        addToCart(index) {
            cy.get('.size-color label').eq(index).should('exist').click() //Выбор размера

            cy.contains('Добавить в корзину').if().then(($button) => {
                $button.click() //Если есть кнопка Добавить, нажимает
                cy.get('.float-right').wait(1500).click()
            }).else().then(() => { //Если нет, то нажимает на след размер.
                tryToAddToCart(index + 1)
            })
        },

        orderMethod: () => {
            cy.contains('Корзина').click();
            this.getters.orderButton().wait(500).first().click();

            cy.get('form[action="/order?form=address"] input[type="submit"]').click() //Выбать текущий адрес

            cy.get('.scroll-thin .row input[type="radio"]').first().click()

            cy.contains('Выбрать и продолжить').click();//Выбрать первый адрес пункта выдачи

            cy.get('form').first().submit() //Выбор способа оплаты
        }
    }
}
