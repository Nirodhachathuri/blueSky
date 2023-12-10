import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor() { }

  images = [
    { src: '../../assets/img.png', alt: 'Image 1', title: '20 years of Expertise' },
    { src: '../../assets/img-2.jpeg', alt: 'Image 1', title: 'Expertise and Knowledge' },
    { src: '../../assets/img-5.png', alt: 'Image 1', title: 'Long-Term Support' },
    { src: '../../assets/img-1.png', alt: 'Image 1', title: '100% Success Ratio' },
    { src:"../../assets/img-4.png",alt: 'Image 1', title: ' Highly Rated Coaching'},
    { src:"../../assets/img-6.jpeg",alt: 'Image 1', title: 'Comprehensive Services'},
    { src:"../../assets/img-7.png",alt: 'Image 1', title: 'Comprehensive Material'},
    { src:"../../assets/img-8.png",alt: 'Image 1', title: 'One to One Feedback on the sessions'}
    // Add more images similarly
    // { src: '...', alt: '...', title: '...' },
  ];

  ngOnInit(): void {
  }

}
