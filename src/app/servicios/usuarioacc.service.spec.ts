import { TestBed } from '@angular/core/testing';

import { UsuarioaccService } from './usuarioacc.service';

describe('UsuarioaccService', () => {
  let service: UsuarioaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
