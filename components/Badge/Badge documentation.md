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

| Name      | Type          | Default       | Description                                 |
|-----------|---------------|---------------|---------------------------------------------|
| `type` | `"square" \| "pill"`      | `"square"`   | Defines the badge type. Either 'square' or 'pill'         |
| `color`    | `"pink" \| "red" \| "blue" \| "yellow" \| "green" \| "indigo" \| "purple" \| "white"` | `"white"`| Specifies the badge color and background-color.               |
| `fontWeight` | `Any valid fontWeight e.g \| "400" \| "bold"`    | `500`   | Specifies font-weight. |
| `fontsize` | `Any valid fontSize e.g \| "1rem" \| "16px"`    | `14px`   | Specifies font-size. Padding will adjust |
| `...rest` | `Any valid attributes user wishes to add to Badge element e.g \| onClick`   | { } | any valid paragraph attributes

### Examples

 To further clarify **...rest**, the following will add an onClick to the badge:
```
<Badge onClick={() => {console.log('string')}}>Badge</Badge>
```

Example of **user inline-style**:
```
<Badge style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }} type='pill' color='pink'>Badge</Badge>
```

### Badge classNames
If the user wishes to change default styles in an external stylesheet, the following classNames will target the badges.


Default 
- .badge

Color
- .badge-\<color\>
    - "color" is a corresponding color type. See props section

Type
- .badge-\<type\>
    - "type "is either square or pill. See props section.

**Note that, for example, a "pill" "pink" badge will have the classNames of .badge .badge-pink and .badge-pill**
