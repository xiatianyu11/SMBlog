import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentTableComponent, ManageMainComponent, PostTableComponent, SysParamComponent, UserTableComponent]
})
export class ManageModule { }
