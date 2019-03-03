function resultCheck() {
	// body...
	var values = [a,b,c];
	var values[0] = document.querySelector('[name="a"]').value;
	var values[1] = document.querySelector('[name="b"]').value;
	var values[2] = document.querySelector('[name="c"]').value;
	// display values of a, b and c as provided in the console
	a = values[0];
	b = values[1];
	c = values[2];
	console.log(a,b,c);
	w = b + c;
	x = a + b;
	y = c + a;
	// check if the value is greater than zero
	if ((a+b)>c && (a+c) >b && (b+c) > a){
		if (true) {
			if (a <= 0 || b == 0 || c == 0) {
				alert("Not a triangle.");
			}
			else if (a == b && a == c && b == c) {
				alert("Triangle is equilateral.");
			}
			else if (a == b || b == c || a == c)  {
				alert("Triangle is isosceles.");
			}
			else(a != b && b != c && c != a) {
				alert("Triangle is scalene.");
			}
		}
	}
	else{
		alert("Triangle cannot be formed");
	}
}
