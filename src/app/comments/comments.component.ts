import { Component, OnInit } from '@angular/core';
import { Comments } from './comments.model';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comments [];

  constructor( private commentsService: CommentsService) { }

  ngOnInit() {
    // SE RETORNA UM OBSERVABLE PRECISA USAR SUBSCRIBE (CHAMADA)
    this.commentsService.getComments().subscribe(comments => this.comments = comments);
  }

}
