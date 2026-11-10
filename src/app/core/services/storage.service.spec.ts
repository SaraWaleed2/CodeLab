import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => localStorage.clear());

  it('starts with only the format version when nothing is saved', () => {
    const service = TestBed.inject(StorageService);
    expect(service.read()).toEqual({ v: 2 });
  });

  it('merges patches instead of replacing', () => {
    const service = TestBed.inject(StorageService);
    service.patch({ lang: 'en' });
    service.patch({ points: 130 });
    expect(service.read()).toEqual({ v: 2, lang: 'en', points: 130 });
  });

  it('drops demo points from before v2 but keeps language and theme', () => {
    localStorage.setItem('codelab-prefs', JSON.stringify({ lang: 'en', dark: true, points: 160 }));
    const service = TestBed.inject(StorageService);
    expect(service.read()).toEqual({ v: 2, lang: 'en', dark: true });
  });
});
