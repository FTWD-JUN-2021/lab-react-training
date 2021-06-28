function Rating(props) {
    let number = Math.round(props.children);
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i <= number) {
            stars += '★';    
        } else {
            stars += '☆';
        }
    }
    return (
        <div>{stars}</div>
    )
}

export default Rating;