#pragma strict
public var sound : AudioClip;
var Accel = 1000.0;

function Update () {
	this.createBall();
  rigidbody.AddForce(
    transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel,
    ForceMode.Impulse
  );
}

function createBall() {

	if (Input.GetButtonDown("Jump")) {
		if (GameObject.FindGameObjectsWithTag('Player').Length > 0) {
			return;
		}
		Instantiate(
			Resources.Load('ball', GameObject),
			this.transform.position + Vector3.forward,
			Quaternion.identity
		);
	}

}

function OnCollisionEnter(collision: Collision) {
	if ( collision.other.gameObject.tag == 'peach' ) {
		AudioSource.PlayClipAtPoint(sound, transform.position);
		Destroy(collision.other.gameObject);
	}
}
