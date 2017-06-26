import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    user: any = JSON.parse(localStorage.getItem('currentUser'));
    username: string = this.user['username'];

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
