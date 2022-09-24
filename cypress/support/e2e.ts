// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath'
import 'cypress-wait-until'
import 'cypress-v10-preserve-cookie'
// Alternatively you can use CommonJS syntax:
// require('./commands')

afterEach(() => {
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
    let str:any = [];
    cy.getCookies().then((cook:any) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++) {
            if (cook.length > 0 && l == 0) {
                str[l] = cook[l].name;
                cy.preserveCookieOnce(str[l]);
            } else if (cook.length > 1 && l > 1) {
                str[l] = cook[l].name;
                cy.preserveCookieOnce(str[l]);
            }
        }
    })
})
// const debug = require('debug')('cypress-v10-preserve-cookie')

// Cypress.Commands.add('preserveCookieOnce', (...names) => {
//   if (!names.length) {
//     throw new Error('Expected at least one cookie name')
//   }

//   names.forEach((name) => {
//     if (typeof name !== 'string' || !name) {
//       throw new Error('Expected the cookie name to preserve')
//     }
//     cy.log(`preserveCookieOnce **${name}**`)
//     debug('cookie name "%s"', name)
//     const saveName = 'cookie_' + name
//     cy.getCookie(name, { log: false })
//       // disable the built-in existence check
//       .should(Cypress._.noop)
//       .then((c) => {
//         if (!c) {
//           debug('there is no cookie named %s', name)
//           const previouslySaved = Cypress.env(saveName)
//           if (previouslySaved) {
//             debug(
//               'setting the previously saved cookie %s %o',
//               name,
//               previouslySaved,
//             )
//             cy.setCookie(name, previouslySaved.value, { log: false })
//           }
//         } else {
//           debug('saving found cookie %s %o', name, c)
//           Cypress.env(saveName, c)
//         }
//       })
//   })
// })