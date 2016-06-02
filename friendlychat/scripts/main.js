/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 'use strict';

 // Initializes FriendlyChat.
 function FriendlyChat() {
 	this.checkSetup();

 	// Shortcuts to DOM Elements.
 	this.messageList = document.getElementByID('messages');
 	this.messageForm = document.getElementByID('message-form');
 	this.messageInput = document.getElementByID('message');
 	this.submitButton = document.getElementByID('submit');
 	this.submitImageButton = document.getElementByID('submitImage');
 	this.imageForm = document.getElementByID('image-form');
 	this.mediaCapture = document.getElementByID('mediaCapture');
 	this.userPic = document.getElementByID('user-pic');
 	this.userName = document.getElementByID('user-name');
 	this.sigInButton = document.getElementByID('sign-in');
 	this.signOutButton = document.getElementByID('sign-out')
 	this.signInSnackbar = document.getElementByID('must-signin-snackbar');

 	// Saves messages on form submit.
 	this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
 	this.signOutButton.addEventListener('click', this.signOut.bind(this));
 	this.sigInButton.addEventListener('click', this.signIn.bind(this));

 	// Toggle for the button.
 	var buttontogglingHandler = this.toggleButton.bind(this);
 	this.messageInput.addEventListener('keyup', buttontogglingHandler);
 	this.messageInput.addEventListener('change', buttontogglingHandler);

 	// Events for image upload.
 	this.submitImageButton.addEventListener('click', function() {
 		this.mediaCapture.click();
 	}.bind(this));
 	this.mediaCapture.addEventListener('change', this.saveImageMessage.bind(this));

 	this.initFirebase();
 }

 // Sets up shortcuts to Firebase features and initiate Firebase auth.
 FriendlyChat.prototype.initFirebase = function() {
 	// TODO(DEVELOPER): Initialize Firebase.
 };

// Loads chat messages history and listens for upcoming ones.
FriendlyChat.prototype.loadMessages = function() {
	// TODO(DEVELOPER): Initialize Firebase.
};

// Saves new messages for firebase DB,
FriendlyChat.prototype.saveMessage = function (e) {
	e.preventDefault();
	// Check that the user entered a message and signed in.
	if (this.messageInput.value && this.checkSignedInWithMessage()) {

		// TODO(DEVELPER): push new message to Firebase.

	}
};

// Sets the URL of the given img element with the URL of the image stored in Firebase Storage.
FriendlyChat.prototype.setImageUrl = function(imageUri, imgElement) {
	imgElement.src = imageUri;

	// TODO(DEVELOPER): If image is on Firebase Storage, fetch image URL and set img element's src

};

// Saves a new message containing an image URI in Firebase .
// This first saves the image in Firebase storage.
FriendlyChat.prototype.saveImageMessage = function (event) {
	var file = event.target.files[0];

	// Clear the selection in the file picker input.
	this.imageForm.reset();

	// Check if the file is an image.
	if (!file.type.match('image.*')) {
		var data = {
			message: 'You can only share images',
			setTimeout: 2000
		};
		this.signInSnackbar.MaterialSnackbar.showSnackbar(data);
		return;
	}
	// Check if the user is signed-in
	if (this.checkSignedInWithMessage()) {

		// TODO(DEVELOPER): Upload image to Firebase storage and add message.
	}
};

// Signs-in Friendly Chat.
FriendlyChat.prototype.signIn = function (googleUser) {
	// TODO(DEVELOPER): Sign in Firebase with credential from the Google user.
};

// Signs-out of Friendly Chat.
FriendlyChat.prototype.signOut = function () {
	// TODO(DEVELOPER): Sign out of Firebase.
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
FriendlyChat.prototype.onAuthStateChanged = function(user) {
	if (user) { // User is signed in!
		// Get profile pic and users name from the the Firebase user object.
		var profilePicUrl = null;  // TODO(DEVELOPER): Get profile pic.
		var userName = null;       // TODO(DEVLOPER): Get user's name.

		// Set the user's profile pic and name.
		this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
		this.userName.textContent = userName;

		// Show user's profile and sign-out button.
		this.userName.removeAttribute('hidden');
		this.userPic.removeAttribute('hidden');
		this.userPic.removeAttribute('hidden');

		// Hide sign-in button.
		this.signInButton.setAttribute('hidden', 'true');

		// We load currently existing chant message.
		this.loadMessages();
	} else { // User is signed out!
		// Hide user's prifile and sign-out button.
		this.userName.setAttribute('hidden', 'true');
		this.userPic.setAttribute('hidden', 'true');
		this.signOutButton.setAttribute('hidden', 'true');

		// Show sign-in button.
		this.signInButton.removeAttribute('hidden');
	}
};

// Returns true if the user signs in. Otherwise false and displays a message.
FriendlyChat.prototype.checkSignedInWithMessage = function(element) {
	/* TODO(DEVELOPER): Check is user is signed-n Firebase. */

	// Display a message to the user using a Toast.
	var date = {
		message: 'You must sign-in first',
		timeout: 2000
	};
	this.signInSnackbar.MaterialSnackbar.showSnackbar(data);
	return false;
};

// Resets the given MaterialTextField.
FriendlyChat.resetMaterialTextField = function (element) {
	element.value = '';
	element.parentNode.MaterialTextField.boundUpdateClassesHandler();
};

// Template for messages.























