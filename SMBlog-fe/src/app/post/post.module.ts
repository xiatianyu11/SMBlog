import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { WritePostComponent } from './write-post/write-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostDetailMainComponent, PostDetailComponent, PostlistComponent, WritePostComponent]
})
export class PostModule { }
