// Function called whenever user tab on any box
function myfunc() {
 
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields

    // HOR (1 2)START
    if ((b1 == '1' && b2 == '2') || (b1 == '2' && b2 == '3')
     || (b1 == '3' && b2 == '4') || (b1 == '4' && b2 == '5')
     || (b1 == '5' && b2 == '6') || (b1 == '6' && b2 == '7')
     || (b1 == '7' && b2 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b1 == '2' && b2 == '1') || (b1 == '3' && b2 == '2')
    || (b1 == '4' && b2 == '3') || (b1 == '5' && b2 == '4')
    || (b1 == '6' && b2 == '5') || (b1 == '7' && b2 == '6')
    || (b1 == '8' && b2 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // HOR (1 2)END

    // HOR (3 4)START
    else if ((b3 == '1' && b4 == '2') || (b3 == '2' && b4 == '3')
     || (b3 == '3' && b4 == '4') || (b3 == '4' && b4 == '5')
     || (b3 == '5' && b4 == '6') || (b3 == '6' && b4 == '7')
     || (b3 == '7' && b4 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b3 == '2' && b4 == '1') || (b3 == '3' && b4 == '2')
    || (b3 == '4' && b4 == '3') || (b3 == '5' && b4 == '4')
    || (b3 == '6' && b4 == '5') || (b3 == '7' && b4 == '6')
    || (b3 == '8' && b4 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // HOR (3 4)END

    // HOR (4 5)START
    else if ((b4 == '1' && b5 == '2') || (b4 == '2' && b5 == '3')
     || (b4 == '3' && b5 == '4') || (b4 == '4' && b5 == '5')
     || (b4 == '5' && b5 == '6') || (b4 == '6' && b5 == '7')
     || (b4 == '7' && b5 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b4 == '2' && b5 == '1') || (b4 == '3' && b5 == '2')
    || (b4 == '4' && b5 == '3') || (b4 == '5' && b5 == '4')
    || (b4 == '6' && b5 == '5') || (b4 == '7' && b5 == '6')
    || (b4 == '8' && b5 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // HOR (4 5)END

    // HOR (5 6)START
    else if ((b5 == '1' && b6 == '2') || (b5 == '2' && b6 == '3')
     || (b5 == '3' && b6 == '4') || (b5 == '4' && b6 == '5')
     || (b5 == '5' && b6 == '6') || (b5 == '6' && b6 == '7')
     || (b5 == '7' && b6 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b5 == '2' && b6 == '1') || (b5 == '3' && b6 == '2')
    || (b5 == '4' && b6 == '3') || (b5 == '5' && b6 == '4')
    || (b5 == '6' && b6 == '5') || (b5 == '7' && b6 == '6')
    || (b5 == '8' && b6 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // HOR (5 6)END

    // HOR (7 8)START
    else if ((b7 == '1' && b8 == '2') || (b7 == '2' && b8 == '3')
     || (b7 == '3' && b8 == '4') || (b7 == '4' && b8 == '5')
     || (b7 == '5' && b8 == '6') || (b7 == '6' && b8 == '7')
     || (b7 == '7' && b8 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b7 == '2' && b8 == '1') || (b7 == '3' && b8 == '2')
    || (b7 == '4' && b8 == '3') || (b7 == '5' && b8 == '4')
    || (b7 == '6' && b8 == '5') || (b7 == '7' && b8 == '6')
    || (b7 == '8' && b8 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // HOR (7 8)END

    // VERT(1 4)START
    else if ((b1 == '1' && b4 == '2') || (b1 == '2' && b4 == '3')
     || (b1 == '3' && b4 == '4') || (b1 == '4' && b4 == '5')
     || (b1 == '5' && b4 == '6') || (b1 == '6' && b4 == '7')
     || (b1 == '7' && b4 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b1 == '2' && b4 == '1') || (b1 == '3' && b4 == '2')
    || (b1 == '4' && b4 == '3') || (b1 == '5' && b4 == '4')
    || (b1 == '6' && b4 == '5') || (b1 == '7' && b4 == '6')
    || (b1 == '8' && b4 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // VERT(1 4)END

    // VERT(4 7)START
    else if ((b4 == '1' && b7 == '2') || (b4 == '2' && b7 == '3')
     || (b4 == '3' && b7 == '4') || (b4 == '4' && b7 == '5')
     || (b4 == '5' && b7 == '6') || (b4 == '6' && b7 == '7')
     || (b4 == '7' && b7 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b4 == '2' && b7 == '1') || (b7 == '3' && b7 == '2')
    || (b4 == '4' && b7 == '3') || (b4 == '5' && b7 == '4')
    || (b4 == '6' && b7 == '5') || (b4 == '7' && b7 == '6')
    || (b4 == '8' && b7 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // VERT(4 7)END

    // VERT(2 5)START
    else if ((b2 == '1' && b5 == '2') || (b2 == '2' && b5 == '3')
     || (b2 == '3' && b5 == '4') || (b2 == '4' && b5 == '5')
     || (b2 == '5' && b5 == '6') || (b2 == '6' && b5 == '7')
     || (b2 == '7' && b5 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b2 == '2' && b5 == '1') || (b2 == '3' && b5 == '2')
    || (b2 == '4' && b5 == '3') || (b2 == '5' && b5 == '4')
    || (b2 == '6' && b5 == '5') || (b2 == '7' && b5 == '6')
    || (b2 == '8' && b5 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // VERT(2 5)END

    // VERT(5 8)START
    else if ((b5 == '1' && b8 == '2') || (b5 == '2' && b8 == '3')
     || (b5 == '3' && b8 == '4') || (b5 == '4' && b8 == '5')
     || (b5 == '5' && b8 == '6') || (b5 == '6' && b8 == '7')
     || (b5 == '7' && b8 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b5 == '2' && b8 == '1') || (b5 == '3' && b8 == '2')
    || (b5 == '4' && b8 == '3') || (b5 == '5' && b8 == '4')
    || (b5 == '6' && b8 == '5') || (b5 == '7' && b8 == '6')
    || (b5 == '8' && b8 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // VERT(5 8)END

    // DIAG(1 3)START
    else if ((b1 == '1' && b3 == '2') || (b1 == '2' && b3 == '3')
     || (b1 == '3' && b3 == '4') || (b1 == '4' && b3 == '5')
     || (b1 == '5' && b3 == '6') || (b1 == '6' && b3 == '7')
     || (b1 == '7' && b3 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b1 == '2' && b3 == '1') || (b1 == '3' && b3 == '2')
    || (b1 == '4' && b3 == '3') || (b1 == '5' && b3 == '4')
    || (b1 == '6' && b3 == '5') || (b1 == '7' && b3 == '6')
    || (b1 == '8' && b3 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(1 3)END

    // DIAG(2 4)START
    else if ((b2 == '1' && b4 == '2') || (b2 == '2' && b4 == '3')
     || (b2 == '3' && b4 == '4') || (b2 == '4' && b4 == '5')
     || (b2 == '5' && b4 == '6') || (b2 == '6' && b4 == '7')
     || (b2 == '7' && b4 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b2 == '2' && b4 == '1') || (b2 == '3' && b4 == '2')
    || (b2 == '4' && b4 == '3') || (b2 == '5' && b4 == '4')
    || (b2 == '6' && b4 == '5') || (b2 == '7' && b4 == '6')
    || (b2 == '8' && b4 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(2 4)END

    // DIAG(1 5)START
    else if ((b1 == '1' && b5 == '2') || (b1 == '2' && b5 == '3')
     || (b1 == '3' && b5 == '4') || (b1 == '4' && b5 == '5')
     || (b1 == '5' && b5 == '6') || (b1 == '6' && b5 == '7')
     || (b1 == '7' && b5 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b1 == '2' && b5 == '1') || (b1 == '3' && b5 == '2')
    || (b1 == '4' && b5 == '3') || (b1 == '5' && b5 == '4')
    || (b1 == '6' && b5 == '5') || (b1 == '7' && b5 == '6')
    || (b1 == '8' && b5 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(1 5)END

    // DIAG(2 6)START
    else if ((b2 == '1' && b6 == '2') || (b2 == '2' && b6 == '3')
     || (b2 == '3' && b6 == '4') || (b2 == '4' && b6 == '5')
     || (b2 == '5' && b6 == '6') || (b2 == '6' && b6 == '7')
     || (b2 == '7' && b6 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b2 == '2' && b6 == '1') || (b2 == '3' && b6 == '2')
    || (b2 == '4' && b6 == '3') || (b2 == '5' && b6 == '4')
    || (b2 == '6' && b6 == '5') || (b2 == '7' && b6 == '6')
    || (b2 == '8' && b6 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(2 6)END

    // DIAG(3 7)START
    else if ((b3 == '1' && b7 == '2') || (b3 == '2' && b7 == '3')
     || (b3 == '3' && b7 == '4') || (b3 == '4' && b7 == '5')
     || (b3 == '5' && b7 == '6') || (b3 == '6' && b7 == '7')
     || (b3 == '7' && b7 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b3 == '2' && b7 == '1') || (b3 == '3' && b7 == '2')
    || (b3 == '4' && b7 == '3') || (b3 == '5' && b7 == '4')
    || (b3 == '6' && b7 == '5') || (b3 == '7' && b7 == '6')
    || (b3 == '8' && b7 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(3 7)END

    // DIAG(4 8)STAR
    else if ((b4 == '1' && b8 == '2') || (b4 == '2' && b8 == '3')
     || (b4 == '3' && b8 == '4') || (b4 == '4' && b8 == '5')
     || (b4 == '5' && b8 == '6') || (b4 == '6' && b8 == '7')
     || (b4 == '7' && b8 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b4 == '2' && b8 == '1') || (b4 == '3' && b8 == '2')
    || (b4 == '4' && b8 == '3') || (b4 == '5' && b8 == '4')
    || (b4 == '6' && b8 == '5') || (b4 == '7' && b8 == '6')
    || (b4 == '8' && b8 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(4 8)END

    // DIAG(5 7)START
    else if ((b5 == '1' && b7 == '2') || (b5 == '2' && b7 == '3')
     || (b5 == '3' && b7 == '4') || (b5 == '4' && b7 == '5')
     || (b5 == '5' && b7 == '6') || (b5 == '6' && b7 == '7')
     || (b5 == '7' && b7 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b5 == '2' && b7 == '1') || (b5 == '3' && b7 == '2')
    || (b5 == '4' && b7 == '3') || (b5 == '5' && b7 == '4')
    || (b5 == '6' && b7 == '5') || (b5 == '7' && b7 == '6')
    || (b5 == '8' && b7 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(5 7)END

    // DIAG(6 8)START
    else if ((b6 == '1' && b8 == '2') || (b6 == '2' && b8 == '3')
     || (b6 == '3' && b8 == '4') || (b6 == '4' && b8 == '5')
     || (b6 == '5' && b8 == '6') || (b6 == '6' && b8 == '7')
     || (b6 == '7' && b8 == '8')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    else if ((b6 == '2' && b8 == '1') || (b6 == '3' && b8 == '2')
    || (b6 == '4' && b8 == '3') || (b6 == '5' && b8 == '4')
    || (b6 == '6' && b8 == '5') || (b6 == '7' && b8 == '6')
    || (b6 == '8' && b8 == '7')) {
        document.getElementById('print')
            .innerHTML = "LOSER!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('LOSER!');
    }
    // DIAG(6 8)END


    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == '8') || (b2 == '8') || (b3 == '8') 
    || (b4 == '8') || (b5 == '8') || (b6 == '8') || (b7 == '8')
    || (b8 == '8')) {
            document.getElementById('print')
                .innerHTML = "WELL PLAYED!";
            window.alert('WELL PLAYED!');
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Tap a square";
        }
    }
}
 
// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "1";
        document.getElementById("b1").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b1").value = "2";
        document.getElementById("b1").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b1").value = "3";
        document.getElementById("b1").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b1").value = "4";
        document.getElementById("b1").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b1").value = "5";
        document.getElementById("b1").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b1").value = "6";
        document.getElementById("b1").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b1").value = "7";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "8";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "1";
        document.getElementById("b2").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b2").value = "2";
        document.getElementById("b2").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b2").value = "3";
        document.getElementById("b2").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b2").value = "4";
        document.getElementById("b2").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b2").value = "5";
        document.getElementById("b2").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b2").value = "6";
        document.getElementById("b2").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b2").value = "7";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "8";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "1";
        document.getElementById("b3").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b3").value = "2";
        document.getElementById("b3").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b3").value = "3";
        document.getElementById("b3").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b3").value = "4";
        document.getElementById("b3").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b3").value = "5";
        document.getElementById("b3").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b3").value = "6";
        document.getElementById("b3").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b3").value = "7";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "8";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "1";
        document.getElementById("b4").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b4").value = "2";
        document.getElementById("b4").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b4").value = "3";
        document.getElementById("b4").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b4").value = "4";
        document.getElementById("b4").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b4").value = "5";
        document.getElementById("b4").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b4").value = "6";
        document.getElementById("b4").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b4").value = "7";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "8";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "1";
        document.getElementById("b5").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b5").value = "2";
        document.getElementById("b5").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b5").value = "3";
        document.getElementById("b5").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b5").value = "4";
        document.getElementById("b5").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b5").value = "5";
        document.getElementById("b5").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b5").value = "6";
        document.getElementById("b5").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b5").value = "7";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "8";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "1";
        document.getElementById("b6").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b6").value = "2";
        document.getElementById("b6").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b6").value = "3";
        document.getElementById("b6").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b6").value = "4";
        document.getElementById("b6").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b6").value = "5";
        document.getElementById("b6").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b6").value = "6";
        document.getElementById("b6").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b6").value = "7";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "8";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "1";
        document.getElementById("b7").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b7").value = "2";
        document.getElementById("b7").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b7").value = "3";
        document.getElementById("b7").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b7").value = "4";
        document.getElementById("b7").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b7").value = "5";
        document.getElementById("b7").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b7").value = "6";
        document.getElementById("b7").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b7").value = "7";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "8";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "1";
        document.getElementById("b8").disabled = true;
        flag = 2;
    }
    else if (flag == 2) {
        document.getElementById("b8").value = "2";
        document.getElementById("b8").disabled = true;
        flag = 3;
    }
    else if (flag == 3) {
        document.getElementById("b8").value = "3";
        document.getElementById("b8").disabled = true;
        flag = 4;
    }
    else if (flag == 4) {
        document.getElementById("b8").value = "4";
        document.getElementById("b8").disabled = true;
        flag = 5;
    }
    else if (flag == 5) {
        document.getElementById("b8").value = "5";
        document.getElementById("b8").disabled = true;
        flag = 6;
    }
    else if (flag == 6) {
        document.getElementById("b8").value = "6";
        document.getElementById("b8").disabled = true;
        flag = 7;
    }
    else if (flag == 7) {
        document.getElementById("b8").value = "7";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "8";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
