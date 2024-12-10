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
