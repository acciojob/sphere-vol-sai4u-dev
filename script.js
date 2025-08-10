function volume_sphere() {
    event.preventDefault();

    let radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = NaN;
        return false;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById('volume').value = volume.toFixed(4);

    return false; 
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
