import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class QuestionService {
    getQuestionListMock(page: number = 0): Observable<any[]> {
        const data = [
        {
            id:1,
            title: 'Will insulin make my patient gain weight?',
            author: {
                name: 'Eva',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207810_face_300x300.png',
                memberFor: '5 mounths',
                lastSeen: 'Saturday',
                activity: 3,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:233,
            },
            activities: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },
                {
                    name: 'Kris',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                {   
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    type: 'answered'
                },
                {
                    name: 'Maciek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd04.png',
                    type: 'commented'
                },
                {
                    name: 'Szymon',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },
            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 3,
                peers: 6,
                conversations: 1,
                discution:49,
                question:30,
                findings: 129,
                
            }
        },   


        {
            id:2,
            title: 'Vegan diet in dabetes treatment?',
            author: {
                name: 'Andrew',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207811_face_300x300.png',
                memberFor: '11 mounths',
                lastSeen: 'Friday',
                activity: 2,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:3,
            },
            activities: [
                
                {
                    name: 'Szymon',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd04.png',   
                    type: 'commented'
                },
                
                {
                    name: 'olek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },

                {
                    name: 'Ola',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    type: 'answered'
                },

                {
                    name: 'Kasia',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    name: 'Szymon',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },
                {
                    name: 'Ula',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },

            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 3,
                peers: 2,
                conversations:4,
                discution:29,
                question:10,
                findings: 19,
            }
        },


        {
            id:3,
            title: 'Vegan diet to stop diabeties proress',
            author: {
                name: 'Joseph',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207839_face_300x300.png',
                memberFor: '2 mounths',
                lastSeen: 'Mondat',
                activity: 1,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:111,

            },
            activities: [

                {
                    name: 'Kasia',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    name: 'Bartek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                
            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 7,
                peers: 76,
                conversations: 14,
                discution:23,
                question:12,
                findings: 13,
            }
        },

        {
            id:4,
            title: 'Vegan diet to stop diabeties proress',
            author: {
                name: 'Joseph',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207839_face_300x300.png',
                memberFor: '2 mounths',
                lastSeen: 'Mondat',
                activity: 1,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:111,

            },
            activities: [

                {
                    name: 'Kasia',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    name: 'Bartek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                
            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 7,
                peers: 76,
                conversations: 14,
                discution:23,
                question:12,
                findings: 13,
            }
        },

        {
            id:5,
            title: 'Vegan diet to stop diabeties proress',
            author: {
                name: 'Joseph',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207839_face_300x300.png',
                memberFor: '2 mounths',
                lastSeen: 'Mondat',
                activity: 1,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:111,

            },
            activities: [

                {
                    name: 'Kasia',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    name: 'Bartek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                
            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 7,
                peers: 76,
                conversations: 14,
                discution:23,
                question:12,
                findings: 13,
            }
        },

        {
            id:6,
            title: 'Vegan diet to stop diabeties proress',
            author: {
                name: 'Joseph',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207839_face_300x300.png',
                memberFor: '2 mounths',
                lastSeen: 'Mondat',
                activity: 1,
                text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet",
                upvotes:111,

            },
            activities: [

                {
                    name: 'Kasia',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    name: 'Bartek',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                
            ],
            comments: [
                {
                    name: 'Jan',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    comment:"Lorem ipsum",
                    answer: {
                        name: 'Szymon',
                        imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                        anser:"Looooorem ipsum"
                    }
                },
                {
                    name: 'Bernoli',
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    comment:"Lorem ipsum",
                    answer: {

                    }
                }   
            ],
            additionalInfo: {
                relalations: 7,
                peers: 76,
                conversations: 14,
                discution:23,
                question:12,
                findings: 13,
            }
        },
    ];
        return Observable.of(data);
    }
}