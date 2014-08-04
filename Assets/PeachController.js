#pragma strict

var Speed = 20.0;
function Start () {
	rigidbody.AddForce(
	Vector3.left + Vector3.back,
	ForceMode.VelocityChange );
}

