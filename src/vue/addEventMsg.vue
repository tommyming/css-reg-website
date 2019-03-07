<template>
	<div>
		<button id = "eventBtn" @click="eventBtn">Add Event</button>
    	<div id = "addEventMsg" v-show = "showMsg" @click.self="eventBtn">
			<div id = "addEventMsgBox">
				<div id = "closeBtn" @click="eventBtn">&times;</div>
				<div id = "msgContent">
						Password: <input type = "password" name = "addEventPwd" id = "addEventPwd" maxlength="10" v-model = "pwd">
						<button @click="checkPwd">Enter</button>
					<form id = "addEventForm" method = "POST" enctype = "multipart/form-data" action="/events/upload" v-show = "pwdValidation">
						Event Image: <input type = "file" name = "eventImageInput" id = "eventImageInput" accept = "image/*">
						<br>
						Event Name: <input type = "text" name = "eventName" id = "eventName">
						<br>
						URL: <input type = "url" name = "addEventURL" id = "addEventURL">
						<input type = "submit" value = "upload">
					</form>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			showMsg: false,
			pwdValidation: false,
			pwd : '',
			selectedFile: null
		}
	},
	methods: {
		eventBtn() {
			this.showMsg = !this.showMsg;
			this.pwdValidation = false;
		},
		checkPwd() {
			if(this.encrypt(this.pwd) == '?I^8]xKwM5F;3V:cEFbH') {
				this.pwdValidation = true;
			} else {
				this.pwdValidation = false;
			}
		},
		encrypt(password) {
			var temp = new Array(20);
    for (var i = 0; i < (password.length)*2; i++) {
        if(i%2 == 0) {
            temp[i] = password.charCodeAt(i/2) - (20 + i);
        }else {
            temp[i] = 50 + (Math.pow(i+2, 2) % 73);
        }
    }
    for (var x = 0; x < 1000; x ++) {
        var tempChar;
        
        for(var y = 2; y < x; y++) {
            if (x % y == 0) {
                continue;
            } else {
                tempChar = temp[x%temp.length]
                temp[x%temp.length] = temp[(x*2)%temp.length];
                temp[(x*2)%temp.length] = tempChar;
            }
        }
    }

    for(var i = 0; i < temp.length; i++) {
        temp[i] = String.fromCharCode(temp[i]);
    }
    
    var result = temp.join('');
    return result; 
		}
	}
}
</script>
