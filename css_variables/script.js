document.addEventListener('DOMContentLoaded', function (event) {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate))
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
})



function handleUpdate(e) {
    console.log(e)
    const suffix = this.dataset.sizing || '';
    document.querySelector('.wrapper').style.setProperty(`--${this.name}`, this.value + suffix)

}