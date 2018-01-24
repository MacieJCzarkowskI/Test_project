import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class QuestionService {
    getQuestionListMock(page: number = 0): Observable<any[]> {
        const data = [
        {
            title: 'Will insulin make my patient gain weight?',
            author: {
                name: 'Eva',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207810_face_300x300.png',
                memberFor: '5 mounths',
                lastSeen: 'Saturday',
                activity: 2,
            },
            activities: [
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    type: 'answered'
                },
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd04.png',
                    type: 'commented'
                },
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },
                
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
            title: 'Vegan diet in dabetes treatment?',
            author: {
                name: 'Andrew',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207811_face_300x300.png',
                memberFor: '11 mounths',
                lastSeen: 'Friday',
                activity: 2,
            },
            activities: [
                
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },
                
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },

                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd03.png',
                    type: 'answered'
                },

                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/fd04.png',
                    type: 'commented'
                },

                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },
                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
                    type: 'answered'
                },

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
            title: 'Vegan diet to stop diabeties proress',
            author: {
                name: 'Joseph',
                imgPath: 'https://www.shareicon.net/data/128x128/2015/12/14/207839_face_300x300.png',
                memberFor: '2 mounths',
                lastSeen: 'Mondat',
                activity: 4,
            },
            activities: [

                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/n05.png',
                    type: 'commented'
                },

                {
                    imgPath: 'https://findicons.com/files/icons/1072/face_avatars/300/i01.png',
                    type: 'commented'
                },
                
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