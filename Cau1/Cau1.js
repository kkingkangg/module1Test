
function equation (a,b) {
    if (a == 0) {
        if(b==0)
            document.write('Phương trình vô số nghiệm');
         else
            document.write('Phương trình vô nghiệm');
    } else
        document.write('Nghiệm của phương trình là: ' + (-b/a));
}
