import classnames from 'classnames'
export default function Badge({type = 'square', color = "white", style = {}, fontSize = '14px', fontWeight = '500', children, ...rest}){
    const typeClass = `badge-${type}`
    const colorClass = `badge-${color}`;
    const classes = classnames('badge', typeClass, colorClass)
    const styles = {
        fontSize,
        fontWeight,
    }
    const combinedStyles = style ? {...styles, ...style} : styles
    
 return (
    <>
        <p className={classes} style={combinedStyles} {...rest}>{children}</p>
    </>
 )
}