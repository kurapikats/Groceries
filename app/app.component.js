"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "jesus.nana@gmail.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n      <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQWlCMUMsSUFBYSxZQUFZO0lBZnpCO1FBZ0JFLFVBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUMvQixnQkFBVyxHQUFHLElBQUksQ0FBQztJQVNyQixDQUFDO0lBTkMsNkJBQU0sR0FBTjtRQUNFLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLFlBQVk7SUFmeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSw2a0JBVVQ7UUFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO0dBQ1csWUFBWSxDQVd4QjtBQVhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIFsobmdNb2RlbCldPVwiZW1haWxcIlxuICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1wiICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGVtYWlsID0gXCJqZXN1cy5uYW5hQGdtYWlsLmNvbVwiO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cblxuICBzdWJtaXQoKSB7XG4gICAgYWxlcnQoXCJZb3UncmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn0iXX0=