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








