# Modules

Modules allow for extensibility to core functions like authentication and storage.

All modules are located under `server/modules`.

In-depth guides for available for each module type:

- Analytics
- [Authentication](modules/auth)
- Comments
- Rendering
- Storage

Modules share the same basic structure. They consist of a definition file (`definition.yml`), which contains info and configuration of your module, and a code file where the actual logic resides. Modules are completely self-contained and do not run within the same context as the core Wiki.js app unless explicitly specified in the documentation. This also means that any dependencies not included by Wiki.js must reside in the module directory.

## Properties

Module properties are settings that can be changed by the user from the administration area. Properties under defined in the module `definition.yml` file under the `props` root property.

All properties must be in **camelCase**.

### Options

Each property consist of a set of options:

| Option | Description | Required |
|---|---|:-:|
| `type` | Must be one of the following types:<br>- `String`<br>- `Number`<br>- `Boolean` | ✅ |
| `default` | The default value. If omitted, the type default value will be inferred from the type:<br>- String: `""` *(empty string)*<br>- Number: `0`<br>- Boolean: `false` | |
| `enum` | The enum value only applies to properties with type String. If provided, it must be an **array of strings**. A dropdown select or button group will be presented to the user with the values of the array as possible choices. When using enum, the `default` value must be provided as well.<br><br>Values can use the format `value\|title` to define both a value and a title to display to the user. | |
| `enumDisplay` | If set to `buttons`, the enum choices will be displayed as a button group. If omitted, they will be displayed as a dropdown select field. | |
| `hint` | The hint is displayed below the text field to provide the user with helpful info. If omitted, no hint will be displayed. | |
| `icon` | Icon to display next to the field. The icon must exist under `./assets/_assets/icons` and must omit the `ultraviolet-` prefix. | |
| `if` |A list of conditions that must all be true for the field to be displayed. Each item must be an object with both `key` and `eq` properties:<br>`- { key: 'authType', eq: 'ssh' }` | |
| `multiline` | The multiline value only applies to properties with type `String.` If this is `true` then a multiline textarea will be used instead of a single-line text field. If both enum and multiline properties are specified, multiline property will be ignored. If omitted, defaults to `false`. | |
| `order` | This value controls the order in which properties are displayed. If two values have the same order, ties will be broken by the order they appear in `definition.yml`. If omitted, defaults to `100`. | |
| `sensitive` | Whether to mask the value when sent to the client, preventing the user from seeing the actual value. | |
| `title` | If omitted, the title will be inferred from the property name with a start case formatting applied. | |

### Example

```yaml
props:
  propertyWithDefault:
    type: Boolean
    default: true
  propertyWithTitleHint:
    type: String
    default: 'abc'
    title: 'Property Title'
    hint: 'An explanation of the field.'
  propertyWithEnumList:
    type: String
    default: 'first'
    enum:
      - 'first'
      - 'second'
      - 'third'
  propertyWithMultiline:
    type: String
    multiline: true
  propertyWithEnumAndCondition:
    type: String
    title: Property Title
    hint: A short description of the field.
    icon: pen
    order: 10
    default: val1
    enum:
        - val1|First Choice
        - val2|Second Choice
    enumDisplay: buttons
    if:
      - { key: 'firstProperty', eq: 'foo' }
      - { key: 'secondProperty', eq: 'bar' }
```

## Dependencies

If you plan on distributing your module with other users:

Some modules may require npm dependencies not present in the main Wiki.js `package.json`. Verify first that the dependency you need isn't already in the main project. **DO NOT add dependencies to the main package.json**. This is reserved for the core Wiki.js app only and doing so can introduce breaking changes during upgrades. 

If the package you need isn't already present, you must instead install extra dependencies within the same folder as your module definition file. You must first create a local package.json from your module directory:

```bash
npm init
```

Accept all the defaults. You can now add local dependencies:

```bash
npm install your-dependency
```

This will create a `node_modules` folder and install the dependency locally. You can then `require()` the module in your code.

::danger{title='Do not use natively compiled dependencies'}
Natively compiled dependencies are packages that use `node-gyp` or download os-specific executables. These require build tools (such as python, c++ compilers, etc.) which will not be present on customers machines and will usually fail to install on low memory systems.
::
