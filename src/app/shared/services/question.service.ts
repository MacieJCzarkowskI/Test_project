import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class QuestionService {
    getQuestionListMock(page: number = 0): Observable<any[]> {
        const data = [{
            title: 'Will insulin?',
            author: {
                name: 'Eva',
                imgPath: './cos/cos.png'
            },
            activities: [
                {
                    imgPath: './cos/cos2.png',
                    type: 'commented'
                }
            ],
            additionalInfo: {
                relalations: 3,
                peers: 6,
                conversations: 1
            }
        },   {
            title: 'Will insulin2?',
            author: {
                name: 'Eva',
                imgPath: './cos/cos.png'
            },
            activities: [
                {
                    imgPath: './cos/cos2.png',
                    type: 'commented'
                }
            ],
            additionalInfo: {
                relalations: 3,
                peers: 6,
                conversations: 1
            }
        }];
        return Observable.of(data);
    }
}