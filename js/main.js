const genera = document.getElementById('generate');
genera.addEventListener('click' ,
    function() {
        const priceKm = 0.21;
        const fullname = document.getElementById('fullname').value;
        console.log(fullname);
        const Km = document.getElementById('Km').value;
        console.log(Km);
        const age = document.getElementById('age').value;
        console.log(age);
        let ticketPrice = Km * priceKm;
        let promo = "biglietto Standard";
        if (age == 'junior') {
            ticketPrice -= (ticketPrice / 100 * 20);
            promo = "sconto minorenne";
        } else if (age == 'senior') {
            ticketPrice -= (ticketPrice / 100 * 40);
            promo = "sconto senior"
        }
        const carriageNumber = Math.floor(Math.random() * 11) + 1;
        const prenotationCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        //nome passeggero
        document.getElementById('passenger-name').innerHTML = fullname;
        document.getElementById('promo').innerHTML = promo;
        document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed(2) + '€';
        document.getElementById('carriage').innerHTML = carriageNumber;
        document.getElementById('prenotation-code').innerHTML = prenotationCode;
        document.getElementById('ticket').className = 'show';
    }
);

document.getElementById('cancel').addEventListener('click' ,
    function() {
        document.getElementById('passenger-name').innerHTML = '';
        document.getElementById('promo').innerHTML = '';
        document.getElementById('ticket-price').innerHTML = '';
        document.getElementById('carriage').innerHTML = '';
        document.getElementById('prenotation-code').innerHTML = '';
        document.getElementById('fullname').value = '';
        document.getElementById('Km').value = '';
        document.getElementById('age').value = 'junior';
        document.getElementById('ticket').className = 'hidden';
    }
);