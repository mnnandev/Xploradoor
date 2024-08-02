import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-vertical-listings-right-sidebar',
    templateUrl: './vertical-listings-right-sidebar.component.html',
    styleUrls: ['./vertical-listings-right-sidebar.component.scss']
})
export class VerticalListingsRightSidebarComponent implements OnInit, AfterViewInit {
    @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;
    currentPlayingIndex: number | null = null;

    videos = [
        {
            videoSrc: '../../../../assets/video/video1.mp4',
            authorImg: '../../../../assets/images/profile_img.jpg',
            authorName: 'zineb',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
            musicName: 'nameOfMusic',
            location: 'casablanca',
            liked: false,
            likesCount: 900,
            isBookmarked: false,
            isPlaying: false,
            isMuted: false
        },
        {
            videoSrc: '../../../../assets/video/video1.mp4',
            authorImg: '../../../../assets/images/profile_img.jpg',
            authorName: 'zineb',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
            musicName: 'nameOfMusic',
            location: 'casablanca',
            liked: false,
            likesCount: 850,
            isBookmarked: false,
            isPlaying: false,
            isMuted: false
        }
    ];

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        // Scroll to the top when the component initializes
        window.scrollTo(0, 0);
    }

    ngAfterViewInit(): void {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75
        };

        const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);

        this.videoElements.forEach((videoElement, index) => {
            observer.observe(videoElement.nativeElement);
        });

        // Play the first video when the page loads
        if (this.videoElements.first) {
            this.playFirstVideo();
        }
    }

    playFirstVideo() {
        if (this.videoElements.first) {
            this.currentPlayingIndex = 0;
            const firstVideoElement = this.videoElements.first.nativeElement;
            firstVideoElement.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
            this.videos[0].isPlaying = true;
            this.cdr.detectChanges();
        }
    }

    handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        entries.forEach(entry => {
            const index = parseInt(entry.target.id.split('-')[1], 10);
            if (entry.isIntersecting) {
                if (this.currentPlayingIndex !== index) {
                    this.playVideo(index);
                }
            } else {
                if (this.currentPlayingIndex === index) {
                    this.pauseVideo(index);
                }
            }
        });
    }

    playVideo(index: number) {
        if (this.currentPlayingIndex !== null && this.currentPlayingIndex !== index) {
            this.pauseVideo(this.currentPlayingIndex);
        }

        const videoElement = this.videoElements.toArray()[index].nativeElement;
        this.videos[index].isPlaying = true;
        this.currentPlayingIndex = index;

        videoElement.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });

        this.cdr.detectChanges();
    }

    pauseVideo(index: number) {
        const videoElement = this.videoElements.toArray()[index].nativeElement;
        this.videos[index].isPlaying = false;

        videoElement.pause();

        this.cdr.detectChanges();
    }

    togglePlay(index: number) {
        const video = this.videos[index];
        const videoElement = this.videoElements.toArray()[index].nativeElement;
        if (video.isPlaying) {
            video.isPlaying = false;
            videoElement.pause();
        } else {
            video.isPlaying = true;
            videoElement.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        }

        this.cdr.detectChanges();
    }

    toggleLike(index: number) {
        this.videos[index].liked = !this.videos[index].liked;
        this.videos[index].likesCount += this.videos[index].liked ? 1 : -1;
    }

    toggleBookmark(index: number) {
        this.videos[index].isBookmarked = !this.videos[index].isBookmarked;
    }

    toggleMute(index: number) {
        const video = this.videos[index];
        video.isMuted = !video.isMuted;
        const videoElement = this.videoElements.toArray()[index].nativeElement;
        videoElement.muted = video.isMuted;
    }

    isSearchVisible: boolean = false;

    toggleSearch() {
        this.isSearchVisible = !this.isSearchVisible;
    }
}
