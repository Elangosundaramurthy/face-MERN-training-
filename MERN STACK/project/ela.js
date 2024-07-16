function ela(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var bag_total = document.getElementById('bag_total').value;
    document.getElementById('q').innerText = 'Customer Name: ' + name;
    document.getElementById('w').innerText = 'Email: ' + email;
    document.getElementById('r').innerText = 'Bag Total: ' + bag_total;
    }