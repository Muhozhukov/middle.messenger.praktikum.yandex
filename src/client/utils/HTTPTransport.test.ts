import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { HTTPTransport } from './HTTPTransport.ts';
import { expect } from 'chai';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests = [];
  })

  describe('GET', () => {
    it('.get() should send GET request', () => {
      instance.get('/user');

      const [request] = requests;

      expect(request.method).to.eq('GET');
    });

    it('.get() will generete a query string from data', () => {
      const data = {
        login: 'fakeLogin',
        password: 'fakePassword'
      };
      const result = 'https://ya-praktikum.tech/api/v2/auth/user?login=fakeLogin&password=fakePassword'

      instance.get('/user', {data});

      const [request] = requests;

      expect(request.url).to.eq(result);
    })
  })

  describe('POST', () => {
    it('.post() should send POST request', () => {
      instance.post('/user', {});

      const [request] = requests;

      expect(request.method).to.eq('POST');
    });

    it('.post() send body with data', async () => {
      const data = {
        login: 'fakeLogin',
        password: 'fakePassword'
      };

      instance.post('/signin', data);

      const [request] = requests;

      expect(request.requestBody).to.eq(JSON.stringify(data));
    });

    it('requests content-type is application/json', async () => {
      const data = {
        login: 'fakeLogin',
        password: 'fakePassword'
      };

      instance.post('/signin', data);

      const [request] = requests;

      expect(request.requestHeaders['Content-Type']).to.contain('application/json')
    });

    it('requests content-type from FormData is empty', async () => {
      const data = new FormData();
      data.append('first', '1')
      data.append('second', '2')

      instance.post('/signin', data);

      const [request] = requests;

      expect(request.requestHeaders).is.empty
    });
  })

  describe('DELETE', () => {
    it('.delete() should send DELETE request', () => {
      instance.delete('/user', {});

      const [request] = requests;

      expect(request.method).to.eq('DELETE');
    });

    it('.delete() send body with data', async () => {
      const data = {
        login: 'fakeLogin',
        password: 'fakePassword'
      };

      instance.delete('/signin', data);

      const [request] = requests;

      expect(request.requestBody).to.eq(JSON.stringify(data));
    });

    it('requests content-type is application/json', () => {
      instance.delete('/user', {});

      const [request] = requests;

      expect(request.requestHeaders['Content-Type']).to.contain('application/json')
    })
  });

  describe('PUT', () => {
    it('.put() should send DELETE request', () => {
      instance.put('/user', {});

      const [request] = requests;

      expect(request.method).to.eq('PUT');
    });

    it('.put() send body with data', async () => {
      const data = {
        login: 'fakeLogin',
        password: 'fakePassword'
      };

      instance.put('/signin', data);

      const [request] = requests;

      expect(request.requestBody).to.eq(JSON.stringify(data));
    });

    it('requests content-type is application/json', () => {
      instance.put('/user', {});

      const [request] = requests;

      expect(request.requestHeaders['Content-Type']).to.contain('application/json')
    });

    it('requests content-type from FormData is empty', async () => {
      const data = new FormData();
      data.append('first', '1')
      data.append('second', '2')

      instance.put('/signin', data);

      const [request] = requests;

      expect(request.requestHeaders).is.empty
    });
  })
});
