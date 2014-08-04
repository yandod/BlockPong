#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision: Collision) {
	var r = Random.Range(0,9);
	
	switch (r) {
	
		case 0:
			this.addBall();
			break;
		case 1:
		case 2:
		case 3:
			this.addPeach();
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			break;
	}
	
		
	Destroy(gameObject);
}

function addPeach() {
	Instantiate(
		Resources.Load('peach-s', GameObject),
		this.transform.position,
		Quaternion.identity
	);
}

function addBall() {
	Instantiate(
		Resources.Load('ball', GameObject),
		this.transform.position,
		Quaternion.identity
	);
}
