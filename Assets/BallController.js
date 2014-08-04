#pragma strict
var Speed = 30.0;
function Start () {
	rigidbody.AddForce(
	( transform.forward + transform.right ) * Speed,
	ForceMode.VelocityChange );
}

