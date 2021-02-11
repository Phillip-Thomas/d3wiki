import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { SafePipeModule } from 'safe-pipe';
import { DocumentSnapshot } from '@firebase/firestore-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  slug: string;
  content: string;
  created: number;
  modified: number;
  locked: boolean;
  youtube: string;

  subs: Subscription;

  constructor(
              private db: AngularFirestore,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
	this.route.paramMap.subscribe(params => {
      this.loadPage(params.get('slug') || 'home');
    });

    this.isAuthenticated = true
    // // this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)  => this.isAuthenticated = true
      // (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    // );
  }

  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  loadPage(slug) {
    if (this.subs) {
      this.subs.unsubscribe();
    }

    const doc = this.db.collection('pages').doc(slug).get();
    this.subs = doc.subscribe((snapshot) => {
      const page = snapshot.data();
      if (!page) {
        this.content = '### Nobody has contributed to this position/technique yet! Be the first and add a youtube video or description.';
        this.slug = slug;
      } else {
        this.slug = slug;
        // this.content = page.content;
        // this.created = page.created;
        // this.modified = page.modified;
        // this.youtube = 'https://www.youtube.com/embed/' + this.getId(page.youtube);
        // console.log(page);
      }
    });
    if (slug == 'home' || slug=='library'){
      this.locked = true
    }
  }
}
