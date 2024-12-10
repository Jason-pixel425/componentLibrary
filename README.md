# Badge Component

The 'Badge' component is a simple component to display a small amount of information or status.

**When to use:**

- To display small, one word peice of information about another element/component.
- To display the status of another element

**Alternative Possible usage**

- The underlying element is a paragraph element. Adding a wrapping anchor tag in the children can transform the badge into a link, however, the styling of the text/anchor tag will need to be implemented by the user.

### Basic usage

```
import Badge from 'Badge.jsx'

const app = () => (
    <Badge>Badge</Badge>
);
```

### Props

| Name         | Type                                                                                  | Default    | Description                                       |
| ------------ | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------- |
| `type`       | `"square" \| "pill"`                                                                  | `"square"` | Defines the badge type. Either 'square' or 'pill' |
| `color`      | `"pink" \| "red" \| "blue" \| "yellow" \| "green" \| "indigo" \| "purple" \| "white"` | `"white"`  | Specifies the badge color and background-color.   |
| `fontWeight` | `Any valid fontWeight e.g \| "400" \| "bold"`                                         | `500`      | Specifies font-weight.                            |
| `fontsize`   | `Any valid fontSize e.g \| "1rem" \| "16px"`                                          | `14px`     | Specifies font-size. Padding will adjust          |
| `...rest`    | `Any valid attributes user wishes to add to Badge element e.g \| onClick`             | { }        | any valid paragraph attributes                    |

### Exmaples

To further clarify **...rest**, the following will add an onClick to the badge:

```
<Badge onClick={() => {console.log('string')}}>Badge</Badge>
```

Example of **user inline-style**:

```
<Badge style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }} type='pill' color='pink'>Badge</Badge>
```

### Badge classNames

If the user wishes to change default styles in an external stylesheet, the following classnames will target the badges.

Default

- .badge

Color

- .badge-\<color\>
  - "color" is a corresponding color type. See props section

Type

- .badge-\<type\>
  - "type "is either square or pill. See props section.

**Note that, for exmaple, a "pill" "pink" badge will have the classNames of .badge .badge-pink and .badge-pill**

---
# Banner Component

The 'Banner' component is to display information and/or status.

**When to use:**
- To display a banner status message.


### Basic usage
```
import Banner from 'Banner.jsx'

const app = () => (
    <Banner />
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

---

# Card Component

The 'Card' component is to display information and/or status.

**When to use:**
- To display a Card status message.


### Basic usage
```
import Card from 'Card.jsx'

const app = () => (
    <Card />
);
```
### Props

| Name      | Type          | Default       | Description                                 |
|-----------|---------------|---------------|---------------------------------------------|
| `style` | `Optional `      | `{}`   | Optional inline style for outer Card div        |
| `titleFontSize`    | `"A string"` |  `""`  | The Card title
| `brandIcon` | `"optional \| src of brand icon"`    | `""`   | Brand icon image |
| `brandIconAlt` | `"optional \| alt text of brand icon image"`    | `""`   | Brand icon image alt text |
| `cardTitle` | `"string \| card title"`    | `""`   | Card title (\<h2\>)|
| `...rest` | `Any valid attributes user wishes to add to Card e.g \| onClick`   | { } | any valid paragraph attributes

### Examples

 To further clarify **...rest**, the following will add an onClick to the Card:
```
<Card onClick={() => {console.log('string')}} />
```

Example of **Card usage**:
```
<Card brandIcon='exmaple.jpg' brandIconAlt='exmaple brand icon' cardTitle='Card title'>
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
</Card>
```

---

# Testimonial Component

The 'Testimonial' component is to display information and/or status.

**When to use:**
- To display a Testimonial.


### Basic usage
```
import Card from 'Testimonial.jsx'

const app = () => (
    <Testimonial>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
    </Testimonial>
);
```
### Props

| Name      | Type          | Default       | Description                                 |
|-----------|---------------|---------------|---------------------------------------------|
| `style` | `Optional `      | `{}`   | Optional inline style for outer Card div        |
| `imgSrc` | `"optional \| src of image"`    | `""`   |  Image of person giving testimonial |
| `imgAlt` | `"optional \| alt text of image"`    | `""`   | Testimonial image alt text |
| `personName` | `"string \| person's name"`    | `""`   | The person's name|
| `personOccumpation` | `"string \| peron's occupation"`    | `""`   | The person's occupation|
