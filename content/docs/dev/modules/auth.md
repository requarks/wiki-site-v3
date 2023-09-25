# Authentication Module

An authentication module adds new ways for users to login to the application. It consists of properties that can be set by the user as well as methods that are called on certain events \(e.g. during initialization\). All authentication modules are based on Passport.js implementation, which is the de facto authentication library for Node.js.

Authentication modules are located in `/server/modules/authentication`.

A unique folder is created for each module. The folder contains two files:

* **definition.yml**
* **authentication.js**

## definition.yml

This file contains information about your module.
```yaml
key: example
title: Example Storage
author: John Doe
useForm: false
props:
  firstExampleProperty:
    type: String
    title: Some Property A
  secondExampleProperty:
    type: Number
    title: Some Other Property
```

### Properties

* **key**: A short, unique and camelCase-formatted name for this module. It must match exactly the module folder name!
* **title**: The full name of the module.
* **author**: The name of the author of the module.
* **useForm**: Whether a user/email + password form should be displayed. *(Should be `false` for 3rd-party or oauth2 based strategies.*)
* **props**: An object of user editable properties. See [Module Properties](../modules#properties) for more info.

## authentication.js

This file contains methods that will be called upon initialization.

```js
/* global WIKI */

// ------------------------------------
// Example Auth Account
// ------------------------------------

import { ExampleStrategy } from 'passport-example'

module.exports = {
  init (passport, strategyId, conf) {
    passport.use(strategyId,
      new ExampleStrategy({
        propA: conf.propA,
        propB: conf.propB
      }, function (accessToken, refreshToken, profile, cb) {
        try {
          const user = await WIKI.db.users.processProfile(profile)
          cb(null, user)
        } catch (err) {
          cb(err, null)
        }
      })
    )
  }
}
```

All methods are required and must be implemented.

### init

Upon initialization of Wiki.js (both startups or restarts).

```javascript
init (passport, strategyId, conf) { }
```

Parameter **passport** is the Passport.js instance on which your strategy can be added.

Parameter **strategyId** is the unique ID of the strategy. It must be provided to Passport as the strategy name.

Parameter **conf** is an object containing the configuration of the authentication strategy. For example, if you defined properties `clientId` and `clientSecret` for the module props, `conf` will be an object with properties `clientId` and `clientSecret` containing the values entered by the user in the administration area.

Learn more about [Passport.js configuration](http://www.passportjs.org/docs/configure/).