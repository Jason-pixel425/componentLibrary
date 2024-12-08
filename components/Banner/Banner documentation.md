# Banner Component

The 'Banner' component is to display information and/or status.

**When to use:**
- To display a banner status message.


### Basic usage
```
import Banner from 'Banner.jsx'

const app = () => (
    <Banner>Badge</Banner>
);
```
### Props

| Name      | Type          | Default       | Description                                 |
|-----------|---------------|---------------|---------------------------------------------|
| `type` | `"success" \| "warning" \| "info" \| "error"`      | `"info"`   | Defines the banner type        |
| `messageText`    | `"A string"` |  `"Update available"`  | The message text
| `messageDesc` | `"optional \| a string"`    | `""`   | Text used to further define the message text |
| `...rest` | `Any valid attributes user wishes to add to Banner e.g \| onClick`   | { } | any valid paragraph attributes

### Examples

 To further clarify **...rest**, the following will add an onClick to the banner:
```
<Banner onClick={() => {console.log('string')}} />
```

Example of **user inline-style**:
```
<Banner style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }} type='info' messageText='Example Message' messageDesc='This is an example message' />
```

### Banner classNames
If the user wishes to change default styles in an external stylesheet, the following classNames will target the banners.


Default 
- .banner

Color
- .banner-message-<type>
    - Targets the banner main message
    - type *see props

Type
- .banner-message-desc
    - targets optional banner description.

**Note that one or more of these classes may be applied and also to different elements**

