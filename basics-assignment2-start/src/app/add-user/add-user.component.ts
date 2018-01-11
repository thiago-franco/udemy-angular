import { Component } from '@angular/core';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html'
})
export class AddUserComponent {
    userName: string = '';

    isNameEmpty() {
        return this.userName === '' ? true : false;
    }

    onClick() {
        this.userName = '';
    }
}