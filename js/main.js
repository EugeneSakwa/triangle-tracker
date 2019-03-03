function triangle() {
	// get the values of triangle sides from the form
  var a=document.getElementById("length").value;
  var b=document.getElementById("width").value;
  var c=document.getElementById("height").value;
	// convert the values to integers
  var arrays=[parseInt(a),parseInt(b),parseInt(c)];
	// check if a triangle can be formed
  if (arrays[0]+arrays[1]>arrays[2] &&arrays[0]+arrays[2]>arrays[1] &&arrays[1]+arrays[2]>arrays[0]){
		// determine the type of triangle that will be formed
		if (arrays[0]==arrays[1] && arrays[0]==arrays[2]){
      alert('Equilateral Triangle');
    }else if (arrays[0]==arrays[1] || arrays[0]==arrays[2] || arrays[1]==arrays[2]) {
      alert('Isosceles Triangle');
    }else{
      alert('Scalene Triangle');
    }
  }else {
    alert('Triangle Cannot Be Formed');
  }
}
