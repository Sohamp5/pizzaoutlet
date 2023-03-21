var lib = document.getElementById('listblc')
var li = document.getElementById('list')
var l1 = document.getElementById('l1')
var l2 = document.getElementById('l2')
var l3 = document.getElementById('l3')
var l4 = document.getElementById('l4')
var l5 = document.getElementById('l5')
var l6 = document.getElementById('l6')
var l7 = document.getElementById('l7')
var l8 = document.getElementById('l8')
var l9 = document.getElementById('l9')

var ln1 = document.getElementById('ln1')
var ln2 = document.getElementById('ln2')
var ln3 = document.getElementById('ln3')
var ln4 = document.getElementById('ln4')
var ln5 = document.getElementById('ln5')
var ln6 = document.getElementById('ln6')

var ls1 = document.getElementById('ls1')
var ls2 = document.getElementById('ls2')
var ls3 = document.getElementById('ls3')
var ls4 = document.getElementById('ls4')
var ls5 = document.getElementById('ls5')
var ls6 = document.getElementById('ls6')

var lb1 = document.getElementById('lb1')
var lb2 = document.getElementById('lb2')
var lb3 = document.getElementById('lb3')



var total = document.getElementById('total')


function add() {
    lib.style.display = 'none'
    li.style.display = 'block'
    total.style.display = 'flex'

    document.getElementById('totalr').innerHTML = (this.v1tot+this.v2tot+this.v3tot+this.v4tot+this.v5tot+this.v6tot+this.v7tot+this.v8tot+this.v9tot+this.nv1tot+this.nv2tot+this.nv3tot+this.nv4tot+this.nv5tot+this.nv6tot+this.s1tot+this.s2tot+this.s3tot+this.s4tot+this.s5tot+this.s6tot+this.b1tot+this.b2tot+this.b3tot)
}
// ==========================v1=======================
v1p1 = document.getElementById('v1n1').value
v1p2 = document.getElementById('v1n2').value
v1p3 = document.getElementById('v1n3').value
function v1sm(){
    document.getElementById('v1p').innerHTML = (`${v1p1}`)
}
function v1med() {
    document.getElementById('v1p').innerHTML = (`${v1p2}`)
}
function v1lar() {
    document.getElementById('v1p').innerHTML = (`${v1p3}`)
}

var v1count = 0
var v1tot = 0


function v1inc(){
        v1count++
        document.getElementById('v1c').innerHTML = v1count
}
function v1dec(){
    if(v1count < 1){
        v1count = 0
    }
    else{
        v1count--
        document.getElementById('v1c').innerHTML = v1count
    }
}

function addv1() {
    l1.style.display = 'flex'
    var v1r = document.getElementsByName('v1n')
    for(const radio of v1r){
        if(radio.checked){
            document.getElementById('op1').innerHTML = 
            "Margherita pizza"
            document.getElementById('or1').innerHTML = this.v1count*radio.value
            v1tot = this.v1count*radio.value
            add()
            break
        }
    }


}

// =================================v2=======================
v2p1 = document.getElementById('v2n1').value
v2p2 = document.getElementById('v2n2').value
v2p3 = document.getElementById('v2n3').value
function v2sm(){
    document.getElementById('v2p').innerHTML = (`${v2p1}`)
}
function v2med() {
    document.getElementById('v2p').innerHTML = (`${v2p2}`)
}
function v2lar() {
    document.getElementById('v2p').innerHTML = (`${v2p3}`)
}

var v2count = 0
var v2tot = 0


function v2inc(){
        v2count++
        document.getElementById('v2c').innerHTML = v2count
}
function v2dec(){
    if(v2count < 1){
        v2count = 0
    }
    else{
        v2count--
        document.getElementById('v2c').innerHTML = v2count
    }
}

function addv2() {
    l2.style.display = 'flex'
    var v2r = document.getElementsByName('v2n')
    for(const radio of v2r){
        if(radio.checked){
            document.getElementById('op2').innerHTML = 
            "Cheese and Corn pizza"
            document.getElementById('or2').innerHTML = this.v2count*radio.value
            v2tot = this.v2count*radio.value
            add()
            break
        }
    }
}


// =================================v3=======================
v3p1 = document.getElementById('v3n1').value
v3p2 = document.getElementById('v3n2').value
v3p3 = document.getElementById('v3n3').value
function v3sm(){
    document.getElementById('v3p').innerHTML = (`${v3p1}`)
}
function v3med() {
    document.getElementById('v3p').innerHTML = (`${v3p2}`)
}
function v3lar() {
    document.getElementById('v3p').innerHTML = (`${v3p3}`)
}

var v3count = 0
var v3tot = 0


function v3inc(){
        v3count++
        document.getElementById('v3c').innerHTML = v3count
}
function v3dec(){
    if(v3count < 1){
        v3count = 0
    }
    else{
        v3count--
        document.getElementById('v3c').innerHTML = v3count
    }
}

function addv3() {
    l3.style.display = 'flex'

    var v3r = document.getElementsByName('v3n')
    for(const radio of v3r){
        if(radio.checked){
            document.getElementById('op3').innerHTML = 
            "Cheese and Tomato pizza"
            document.getElementById('or3').innerHTML = this.v3count*radio.value
            v3tot = this.v3count*radio.value
            add()
            break
        }
    }
}

// =================================v4=======================
v4p1 = document.getElementById('v4n1').value
v4p2 = document.getElementById('v4n2').value
v4p3 = document.getElementById('v4n3').value
function v4sm(){
    document.getElementById('v4p').innerHTML = (`${v4p1}`)
}
function v4med() {
    document.getElementById('v4p').innerHTML = (`${v4p2}`)
}
function v4lar() {
    document.getElementById('v4p').innerHTML = (`${v4p3}`)
}

var v4count = 0
var v4tot = 0


function v4inc(){
        v4count++
        document.getElementById('v4c').innerHTML = v4count
}
function v4dec(){
    if(v4count < 1){
        v4count = 0
    }
    else{
        v4count--
        document.getElementById('v4c').innerHTML = v4count
    }
}

function addv4() {
    l4.style.display = 'flex'

    var v4r = document.getElementsByName('v4n')
    for(const radio of v4r){
        if(radio.checked){
            document.getElementById('op4').innerHTML = 
            "Fresh veggie pizza"
            document.getElementById('or4').innerHTML = this.v4count*radio.value
            v4tot = this.v4count*radio.value
            add()
            break
        }
    }
}

// =================================v5=======================
v5p1 = document.getElementById('v5n1').value
v5p2 = document.getElementById('v5n2').value
v5p3 = document.getElementById('v5n3').value
function v5sm(){
    document.getElementById('v5p').innerHTML = (`${v5p1}`)
}
function v5med() {
    document.getElementById('v5p').innerHTML = (`${v5p2}`)
}
function v5lar() {
    document.getElementById('v5p').innerHTML = (`${v5p3}`)
}

var v5count = 0
var v5tot = 0


function v5inc(){
        v5count++
        document.getElementById('v5c').innerHTML = v5count
}
function v5dec(){
    if(v5count < 1){
        v5count = 0
    }
    else{
        v5count--
        document.getElementById('v5c').innerHTML = v5count
    }
}

function addv5() {
    l5.style.display = 'flex'

    var v5r = document.getElementsByName('v5n')
    for(const radio of v5r){
        if(radio.checked){
            document.getElementById('op5').innerHTML = 
            "Farm house pizza"
            document.getElementById('or5').innerHTML = this.v5count*radio.value
            v5tot = this.v5count*radio.value
            add()
            break
        }
    }
}

// =================================v6=======================
v6p1 = document.getElementById('v6n1').value
v6p2 = document.getElementById('v6n2').value
v6p3 = document.getElementById('v6n3').value
function v6sm(){
    document.getElementById('v6p').innerHTML = (`${v6p1}`)
}
function v6med() {
    document.getElementById('v6p').innerHTML = (`${v6p2}`)
}
function v6lar() {
    document.getElementById('v6p').innerHTML = (`${v6p3}`)
}

var v6count = 0
var v6tot = 0


function v6inc(){
        v6count++
        document.getElementById('v6c').innerHTML = v6count
}
function v6dec(){
    if(v6count < 1){
        v6count = 0
    }
    else{
        v6count--
        document.getElementById('v6c').innerHTML = v6count
    }
}

function addv6() {
    l6.style.display = 'flex'

    var v6r = document.getElementsByName('v6n')
    for(const radio of v6r){
        if(radio.checked){
            document.getElementById('op6').innerHTML = 
            "Mexican green wave pizza"
            document.getElementById('or6').innerHTML = this.v6count*radio.value
            v6tot = this.v6count*radio.value
            add()
            break
        }
    }
}


// =================================v7=======================
v7p1 = document.getElementById('v7n1').value
v7p2 = document.getElementById('v7n2').value
v7p3 = document.getElementById('v7n3').value
function v7sm(){
    document.getElementById('v7p').innerHTML = (`${v7p1}`)
}
function v7med() {
    document.getElementById('v7p').innerHTML = (`${v7p2}`)
}
function v7lar() {
    document.getElementById('v7p').innerHTML = (`${v7p3}`)
}

var v7count = 0
var v7tot = 0


function v7inc(){
        v7count++
        document.getElementById('v7c').innerHTML = v7count
}
function v7dec(){
    if(v7count < 1){
        v7count = 0
    }
    else{
        v7count--
        document.getElementById('v7c').innerHTML = v7count
    }
}

function addv7() {
    l7.style.display = 'flex'

    var v7r = document.getElementsByName('v7n')
    for(const radio of v7r){
        if(radio.checked){
            document.getElementById('op7').innerHTML = 
            "Peppy paneer pizza"
            document.getElementById('or7').innerHTML = this.v7count*radio.value
            v7tot = this.v7count*radio.value
            add()
            break
        }
    }
}


// =================================v8=======================
v8p1 = document.getElementById('v8n1').value
v8p2 = document.getElementById('v8n2').value
v8p3 = document.getElementById('v8n3').value
function v8sm(){
    document.getElementById('v8p').innerHTML = (`${v8p1}`)
}
function v8med() {
    document.getElementById('v8p').innerHTML = (`${v8p2}`)
}
function v8lar() {
    document.getElementById('v8p').innerHTML = (`${v8p3}`)
}

var v8count = 0
var v8tot = 0


function v8inc(){
        v8count++
        document.getElementById('v8c').innerHTML = v8count
}
function v8dec(){
    if(v8count < 1){
        v8count = 0
    }
    else{
        v8count--
        document.getElementById('v8c').innerHTML = v8count
    }
}

function addv8() {
    l8.style.display = 'flex'

    var v8r = document.getElementsByName('v8n')
    for(const radio of v8r){
        if(radio.checked){
            document.getElementById('op8').innerHTML = 
            "Deluxe veg pizza"
            document.getElementById('or8').innerHTML = this.v8count*radio.value
            v8tot = this.v8count*radio.value
            add()
            break
        }
    }
}


// =================================v9=======================
v9p1 = document.getElementById('v9n1').value
v9p2 = document.getElementById('v9n2').value
v9p3 = document.getElementById('v9n3').value
function v9sm(){
    document.getElementById('v9p').innerHTML = (`${v9p1}`)
}
function v9med() {
    document.getElementById('v9p').innerHTML = (`${v9p2}`)
}
function v9lar() {
    document.getElementById('v9p').innerHTML = (`${v9p3}`)
}

var v9count = 0
var v9tot = 0


function v9inc(){
        v9count++
        document.getElementById('v9c').innerHTML = v9count
}
function v9dec(){
    if(v9count < 1){
        v9count = 0
    }
    else{
        v9count--
        document.getElementById('v9c').innerHTML = v9count
    }
}

function addv9() {
    l9.style.display = 'flex'

    var v9r = document.getElementsByName('v9n')
    for(const radio of v9r){
        if(radio.checked){
            document.getElementById('op9').innerHTML = 
            "Kadai paneer pizza"
            document.getElementById('or9').innerHTML = this.v9count*radio.value
            v9tot = this.v9count*radio.value
            add()
            break
        }
    }
}


// =================================nv1=======================
nv1p1 = document.getElementById('nv1n1').value
nv1p2 = document.getElementById('nv1n2').value
nv1p3 = document.getElementById('nv1n3').value
function nv1sm(){
    document.getElementById('nv1p').innerHTML = (`${nv1p1}`)
}
function nv1med() {
    document.getElementById('nv1p').innerHTML = (`${nv1p2}`)
}
function nv1lar() {
    document.getElementById('nv1p').innerHTML = (`${nv1p3}`)
}

var nv1count = 0
var nv1tot = 0


function nv1inc(){
        nv1count++
        document.getElementById('nv1c').innerHTML = nv1count
}
function nv1dec(){
    if(nv1count < 1){
        nv1count = 0
    }
    else{
        nv1count--
        document.getElementById('nv1c').innerHTML = nv1count
    }
}

function addnv1() {
    ln1.style.display = 'flex'

    var nv1r = document.getElementsByName('nv1n')
    for(const radio of nv1r){
        if(radio.checked){
            
            document.getElementById('opn1').innerHTML = 
            "Chicken sausage pizza"
            document.getElementById('orn1').innerHTML = this.nv1count*radio.value
            nv1tot = this.nv1count*radio.value
            add()
            break
        }
    }
}



// =================================nv2=======================
nv2p1 = document.getElementById('nv1n1').value
nv2p2 = document.getElementById('nv2n2').value
nv2p3 = document.getElementById('nv2n3').value
function nv2sm(){
    document.getElementById('nv2p').innerHTML = (`${nv2p1}`)
}
function nv2med() {
    document.getElementById('nv2p').innerHTML = (`${nv2p2}`)
}
function nv2lar() {
    document.getElementById('nv2p').innerHTML = (`${nv2p3}`)
}

var nv2count = 0
var nv2tot = 0


function nv2inc(){
        nv2count++
        document.getElementById('nv2c').innerHTML = nv2count
}
function nv2dec(){
    if(nv2count < 1){
        nv2count = 0
    }
    else{
        nv2count--
        document.getElementById('nv2c').innerHTML = nv2count
    }
}

function addnv2() {
    ln2.style.display = 'flex'

    var nv2r = document.getElementsByName('nv2n')
    for(const radio of nv2r){
        if(radio.checked){
            document.getElementById('opn2').innerHTML = 
            "Pepper barbeque chicken pizza"
            document.getElementById('orn2').innerHTML = this.nv2count*radio.value
            nv2tot = this.nv2count*radio.value
            add()
            break
        }
    }
}


// =================================nv3=======================
nv3p1 = document.getElementById('nv3n1').value
nv3p2 = document.getElementById('nv3n2').value
nv3p3 = document.getElementById('nv3n3').value
function nv3sm(){
    document.getElementById('nv3p').innerHTML = (`${nv3p1}`)
}
function nv3med() {
    document.getElementById('nv3p').innerHTML = (`${nv3p2}`)
}
function nv3lar() {
    document.getElementById('nv3p').innerHTML = (`${nv3p3}`)
}

var nv3count = 0
var nv3tot = 0


function nv3inc(){
        nv3count++
        document.getElementById('nv3c').innerHTML = nv3count
}
function nv3dec(){
    if(nv3count < 1){
        nv3count = 0
    }
    else{
        nv3count--
        document.getElementById('nv3c').innerHTML = nv3count
    }
}

function addnv3() {
    ln3.style.display = 'flex'

    var nv3r = document.getElementsByName('nv3n')
    for(const radio of nv3r){
        if(radio.checked){
            document.getElementById('opn3').innerHTML = 
            "Chicken Fiesta pizza"
            document.getElementById('orn3').innerHTML = this.nv3count*radio.value
            nv3tot = this.nv3count*radio.value
            add()
            break
        }
    }
}


// =================================nv4=======================
nv4p1 = document.getElementById('nv4n1').value
nv4p2 = document.getElementById('nv4n2').value
nv4p3 = document.getElementById('nv4n3').value
function nv4sm(){
    document.getElementById('nv4p').innerHTML = (`${nv4p1}`)
}
function nv4med() {
    document.getElementById('nv4p').innerHTML = (`${nv4p2}`)
}
function nv4lar() {
    document.getElementById('nv4p').innerHTML = (`${nv4p3}`)
}

var nv4count = 0
var nv4tot = 0


function nv4inc(){
        nv4count++
        document.getElementById('nv4c').innerHTML = nv4count
}
function nv4dec(){
    if(nv4count < 1){
        nv4count = 0
    }
    else{
        nv4count--
        document.getElementById('nv4c').innerHTML = nv4count
    }
}

function addnv4() {
    ln4.style.display = 'flex'

    var nv4r = document.getElementsByName('nv4n')
    for(const radio of nv4r){
        if(radio.checked){
            document.getElementById('opn4').innerHTML = 
            "Chicken dominator pizza"
            document.getElementById('orn4').innerHTML = this.nv4count*radio.value
            nv4tot = this.nv4count*radio.value
            add()
            break
        }
    }
}

// =================================nv5=======================
nv5p1 = document.getElementById('nv5n1').value
nv5p2 = document.getElementById('nv5n2').value
nv5p3 = document.getElementById('nv5n3').value
function nv5sm(){
    document.getElementById('nv5p').innerHTML = (`${nv5p1}`)
}
function nv5med() {
    document.getElementById('nv5p').innerHTML = (`${nv5p2}`)
}
function nv5lar() {
    document.getElementById('nv5p').innerHTML = (`${nv5p3}`)
}

var nv5count = 0
var nv5tot = 0


function nv5inc(){
        nv5count++
        document.getElementById('nv5c').innerHTML = nv5count
}
function nv5dec(){
    if(nv5count < 1){
        nv5count = 0
    }
    else{
        nv5count--
        document.getElementById('nv5c').innerHTML = nv5count
    }
}

function addnv5() {
    ln5.style.display = 'flex'

    var nv5r = document.getElementsByName('nv5n')
    for(const radio of nv5r){
        if(radio.checked){
            document.getElementById('opn5').innerHTML = 
            "Non veg Supreme pizza"
            document.getElementById('orn5').innerHTML = this.nv5count*radio.value
            nv5tot = this.nv5count*radio.value
            add()
            break
        }
    }
}

// =================================nv6=======================
nv6p1 = document.getElementById('nv6n1').value
nv6p2 = document.getElementById('nv6n2').value
nv6p3 = document.getElementById('nv6n3').value
function nv6sm(){
    document.getElementById('nv6p').innerHTML = (`${nv6p1}`)
}
function nv6med() {
    document.getElementById('nv6p').innerHTML = (`${nv6p2}`)
}
function nv6lar() {
    document.getElementById('nv6p').innerHTML = (`${nv6p3}`)
}

var nv6count = 0
var nv6tot = 0


function nv6inc(){
        nv6count++
        document.getElementById('nv6c').innerHTML = nv6count
}
function nv6dec(){
    if(nv6count < 1){
        nv6count = 0
    }
    else{
        nv6count--
        document.getElementById('nv6c').innerHTML = nv6count
    }
}

function addnv6() {
    ln6.style.display = 'flex'

    var nv6r = document.getElementsByName('nv6n')
    for(const radio of nv6r){
        if(radio.checked){
            document.getElementById('opn6').innerHTML = 
            "BBQ pork pizza"
            document.getElementById('orn6').innerHTML = this.nv6count*radio.value
            nv6tot = this.nv6count*radio.value
            add()
            break
        }
    }
}

// =================================s1=======================

var s1count = 0
var s1tot = 0


function s1inc(){
        s1count++
        document.getElementById('s1c').innerHTML = s1count
}
function s1dec(){
    if(s1count < 1){
        s1count = 0
    }
    else{
        s1count--
        document.getElementById('s1c').innerHTML = s1count
    }
}

function adds1() {
    var s1r = 60
    ls1.style.display = 'flex'
    document.getElementById('ops1').innerHTML = 
    "Garlic bread"
    document.getElementById('ors1').innerHTML = this.s1count*s1r
    s1tot = this.s1count*s1r
    add()
}

// =================================s2=======================

var s2count = 0
var s2tot = 0


function s2inc(){
        s2count++
        document.getElementById('s2c').innerHTML = s2count
}
function s2dec(){
    if(s2count < 1){
        s2count = 0
    }
    else{
        s2count--
        document.getElementById('s2c').innerHTML = s2count
    }
}

function adds2() {
    var s2r = 80
    ls2.style.display = 'flex'
    document.getElementById('ops2').innerHTML = 
    "Cheese garlic bread"
    document.getElementById('ors2').innerHTML = this.s2count*s2r
    s2tot = this.s2count*s2r
    add()
}

// =================================s3=======================

var s3count = 0
var s3tot = 0


function s3inc(){
        s3count++
        document.getElementById('s3c').innerHTML = s3count
}
function s3dec(){
    if(s3count < 1){
        s3count = 0
    }
    else{
        s3count--
        document.getElementById('s3c').innerHTML = s3count
    }
}

function adds3() {
    var s3r = 110
    ls3.style.display = 'flex'
    document.getElementById('ops3').innerHTML = 
    "Keema garlic bread"
    document.getElementById('ors3').innerHTML = this.s3count*s3r
    s3tot = this.s3count*s3r
    add()
}


// =================================s4=======================

var s4count = 0
var s4tot = 0


function s4inc(){
        s4count++
        document.getElementById('s4c').innerHTML = s4count
}
function s4dec(){
    if(s4count < 1){
        s4count = 0
    }
    else{
        s4count--
        document.getElementById('s4c').innerHTML = s4count
    }
}

function adds4() {
    var s4r = 100
    ls4.style.display = 'flex'
    document.getElementById('ops4').innerHTML = 
    "Cheese french fries"
    document.getElementById('ors4').innerHTML = this.s4count*s4r
    s4tot = this.s4count*s4r
    add()
}


// =================================s5=======================

var s5count = 0
var s5tot = 0


function s5inc(){
        s5count++
        document.getElementById('s5c').innerHTML = s5count
}
function s5dec(){
    if(s5count < 1){
        s5count = 0
    }
    else{
        s5count--
        document.getElementById('s5c').innerHTML = s5count
    }
}

function adds5() {
    var s5r = 100
    ls5.style.display = 'flex'
    document.getElementById('ops5').innerHTML = 
    "Choco lava cake"
    document.getElementById('ors5').innerHTML = this.s5count*s5r
    s5tot = this.s5count*s5r
    add()
}


// =================================s4=======================

var s6count = 0
var s6tot = 0


function s6inc(){
        s6count++
        document.getElementById('s6c').innerHTML = s6count
}
function s6dec(){
    if(s6count < 1){
        s6count = 0
    }
    else{
        s6count--
        document.getElementById('s6c').innerHTML = s6count
    }
}

function adds6() {
    var s6r = 120
    ls6.style.display = 'flex'
    document.getElementById('ops6').innerHTML = 
    "Chicken nuggets"
    document.getElementById('ors6').innerHTML = this.s6count*s6r
    s6tot = this.s6count*s6r
    add()
}


// =================================b1=======================

var b1count = 0
var b1tot = 0


function b1inc(){
        b1count++
        document.getElementById('b1c').innerHTML = b1count
}
function b1dec(){
    if(b1count < 1){
        b1count = 0
    }
    else{
        b1count--
        document.getElementById('b1c').innerHTML = b1count
    }
}

function addb1() {
    var b1r = 40
    lb1.style.display = 'flex'
    document.getElementById('opb1').innerHTML = 
    "Coke"
    document.getElementById('orb1').innerHTML = this.b1count*b1r
    b1tot = this.b1count*b1r
    add()
}


// =================================b2=======================

var b2count = 0
var b2tot = 0


function b2inc(){
        b2count++
        document.getElementById('b2c').innerHTML = b2count
}
function b2dec(){
    if(b2count < 1){
        b2count = 0
    }
    else{
        b2count--
        document.getElementById('b2c').innerHTML = b2count
    }
}

function addb2() {
    var b2r = 40
    lb2.style.display = 'flex'
    document.getElementById('opb2').innerHTML = 
    "Sprite"
    document.getElementById('orb2').innerHTML = this.b2count*b2r
    b2tot = this.b2count*b2r
    add()
}


// =================================b3=======================

var b3count = 0
var b3tot = 0


function b3inc(){
        b3count++
        document.getElementById('b3c').innerHTML = b3count
}
function b3dec(){
    if(b3count < 1){
        b3count = 0
    }
    else{
        b3count--
        document.getElementById('b3c').innerHTML = b3count
    }
}

function addb3() {
    var b3r = 50
    lb3.style.display = 'flex'
    document.getElementById('opb3').innerHTML = 
    "Lemonade"
    document.getElementById('orb3').innerHTML = this.b3count*b3r
    b3tot = this.b3count*b3r
    add()
}


// ========================================
var lib = document.getElementById('listblc')
var li = document.getElementById('list')
var l1 = document.getElementById('l1')


// function addv1() {
//     var el1 = document.getElementById('v1n1')
//     var el2 = document.getElementById('v1n2')
//     var el3 = document.getElementById('v1n3')
//     if(el1.checked){
//         document.getElementById('or1').innerHTML = this.v1count*270
//         lib.style.display = 'none'
//         li.style.display = 'block'
//     }
//     else{
//         document.getElementById('or1').innerHTML = 350
//         lib.style.display = 'none'
//         li.style.display = 'block'
//     }

// }



