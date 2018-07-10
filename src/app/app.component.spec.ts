/**
 * Created by georgius on 10.07.2018.
 */
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { TodoItem } from '../models/to-do-item'

import {
    PlatformMock,
    StatusBarMock,
    SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('MyApp Component', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof MyApp).toBe(true);
    });

    it('class ToDo is working', () => {
        const now = new Date().getMilliseconds()
        const todo = new TodoItem(1, '100');
        expect(todo.id).toBe(1);
        expect(todo.title).toBe('100');
        expect(todo.createdAt.getMilliseconds()).toBeGreaterThanOrEqual(now);
        expect(todo.completedAt).toBeUndefined()
        expect(todo.archivedAt).toBeUndefined()
        todo.complete()
        expect(todo.completedAt.getMilliseconds()).toBeGreaterThanOrEqual(now);
        todo.archive()
        expect(todo.archivedAt.getMilliseconds()).toBeGreaterThanOrEqual(now);

    })
    // it('should have one pages', () => {
    //    expect(component.pages.length).toBe(1);
    // });

});