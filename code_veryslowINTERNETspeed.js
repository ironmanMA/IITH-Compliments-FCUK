var a1 = 0;

function f1() {
    a2 = window.open(a4, '_blank', 'location=yes,height=40,width=60,left=90,scrollbars=yes,status=yes');
    a3 = window.open(a5, '_blank', 'location=yes,height=40,width=60,left=1500,scrollbars=yes,status=yes');
    var a = setTimeout(f3, 3000);
    a1++
}

function f3() {
    a2.close();
    a3.close();
    if (a1 < 3000) {
        f4()
    } else {
        clearTimeout(a6)
    }
}

function f4() {
    a7 = f2();
    a4 = "https://docs.google.com/forms/d/1TI4kzCWwZ6dO6Uc6mNjMJV0gr8T-yLDVl01FKeIX818/viewform?edit2=2_ABaOnudcL5TFO9pW2ozXdKX3D7RAYpz4HcOIgTIv4bOS1Ya6JNIl6FesnpM";
    a5 = "https://docs.google.com/forms/d/1TI4kzCWwZ6dO6Uc6mNjMJV0gr8T-yLDVl01FKeIX818/viewform?edit2=2_ABaOnudcL5TFO9pW2ozXdKX3D7RAYpz4HcOIgTIv4bOS1Ya6JNIl6FesnpM";
    f1()
}

function f2() {
    var a = "";
    var b = " ";
    var c = "ABCDMEFGHJKLMNOPQRSTUVWXYZ" + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 50; i++) a += c.charAt(Math.floor(Math.random() * c.length));
    return a
}
f4();
