import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public Editor = ClassicEditor;
  editPageForm: FormGroup;
  newPage: boolean = true;
  pending: boolean = true;
  slug: string;

  constructor(private formBuilder: FormBuilder,
              private db: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
		this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) {
        this.initNewPage(slug);
      } else {
        this.initEditPage(slug);
      }
    });
  }

  initNewPage(slug) {
    this.newPage = true;
    this.pending = false;
    this.editPageForm = this.formBuilder.group({
      slug: [slug, Validators.required],
      content: ['', Validators.required],
      youtube: ['', Validators.required]
    });
  }

  initEditPage(slug) {
    const doc = this.db.collection('pages').doc(slug).get();
    const subs = doc.subscribe((snapshot) => {
      const page = snapshot.data();
      if (!page) {
        this.initNewPage(slug);
      } else {
        this.editPageForm = this.formBuilder.group({
          content: [page.content, Validators.required],
          youtube: [page.youtube, Validators.required]
        });
        this.newPage = false;
        this.pending = false;
        this.slug = slug;
      }
      subs.unsubscribe();
    });
}

  savePage() {
    // if (!this.editPageForm.valid) return;
    const now = Date.now();
    let slug, document, youtube;
    if (this.editPageForm.get('youtube').value) {
      youtube = this.editPageForm.get('youtube').value
    }
    else 
  {
    youtube = ""
  }
    if (this.newPage) {
      slug = this.editPageForm.get('slug').value;
      document = {
        content: this.editPageForm.get('content').value,
        youtube: youtube,
        modified: now,
        created: now
      }
    } else {
      slug = this.slug;
      document = {
        content: this.editPageForm.get('content').value,
        youtube: youtube,
        modified: now
      }
    }
    this.db.collection('pages').doc(slug).set(document, {merge: true}).then(() => {
      this.router.navigate(['/home', slug]);
    });
  }


}
