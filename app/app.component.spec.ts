/* import libraries */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
/* import component */
import { AppComponent } from './app.component';

describe('#AppComponent', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('should instantiate component correctly', () => {
        expect(comp).toBeDefined();
        expect(comp.title).toEqual('rxi test app');
    });
});