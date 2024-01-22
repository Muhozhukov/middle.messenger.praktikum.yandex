import Router from './Router.ts'
import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block.ts';

describe('Router', () => {
  window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };
  window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  beforeEach(() => {
    Router.reset();
  });

  const getContentFake = sinon.fake.returns(document.createElement('div'));
  const getContentFake2 = sinon.fake.returns(document.createElement('p'));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as typeof Block;

  const BlockMock2 = class {
    getContent = getContentFake2;
  } as unknown as typeof Block;

  it('use() should return Router instance', () => {
    const result = Router.use('/', BlockMock);
    expect(result).to.eq(Router);
  });

  it('should render a page on start', () => {
    Router
      .use('/sign-up', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('should render a page on history back action', () => {
    Router
      .use('/', BlockMock)
      .start();

    Router.back();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('should render a page on Router.go() action', () => {
    Router
      .use('/sign-up', BlockMock)
      .use('/messenger', BlockMock2)
      .start();

    Router.go('/sign-up');
    Router.go('/messenger');
    expect(getContentFake2.callCount).to.eq(1);
  });

  it('Router.go() change url', () => {
    Router
      .use('/', BlockMock)
      .use('/messenger', BlockMock2)
      .start();

    Router.go('/messenger');
    expect(window.location.pathname).to.eq('/messenger');
  });
});
