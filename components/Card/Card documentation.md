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
