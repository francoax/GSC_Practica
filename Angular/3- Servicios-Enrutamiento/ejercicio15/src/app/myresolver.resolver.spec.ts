import { TestBed } from '@angular/core/testing';

import { MyresolverResolver } from './myresolver.resolver';

describe('MyresolverResolver', () => {
  let resolver: MyresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
