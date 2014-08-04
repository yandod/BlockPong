#pragma strict

function Start () {

}

function Update () {

	this.transform.Rotate(0,0,1);
	
	if (Input.GetButtonDown('Jump')) {
		Application.LoadLevel('main');
	}
	

}