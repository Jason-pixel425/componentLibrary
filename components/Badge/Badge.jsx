import classnames from 'classnames'
export default function Badge({type = 'square', color = "white", fontSize = '14px', fontWeight = '500', children, ...rest}){
    console.log(fontWeight)
    console.log(rest)
    const typeClass = `badge-${type}`
    const colorClass = `badge-${color}`;
    const classes = classnames('badge', typeClass, colorClass)
    const styles = {
        fontSize,
        fontWeight
    }
 return (
    <>
        <p className={classes} style={styles} {...rest}>{children}</p>
    </>
 )
}