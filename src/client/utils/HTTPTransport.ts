interface Options {
  headers?: {
    [key: string]: string;
  },
  data?: any,
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE',
  timeout?: number,
}

const METHODS: Record<string, 'GET' | 'PUT' | 'POST' | 'DELETE'> = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

type HTTPMethod = <R=unknown>(url: string, options?: Options) => Promise<R>

type StringKeyObject = {
  [key: string]: string | StringKeyObject;
};
function queryStringify(obj: StringKeyObject) {
  const queryString = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

			if (Array.isArray(value)) {
				value = value.join(",");
			} else if (typeof value === "object" && value !== null) {
        // Если значение является объектом, преобразуем его в строку "[object Object]"
        value = '[object Object]';
      }

      // Кодируем ключ и значение и добавляем их к массиву параметров
      queryString.push(`${key}=${value}`);
    }
  }

  // Объединяем массив параметров в строку с разделителем "&"
  return queryString.join("&");
}

class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get: HTTPMethod = (url, options = {}) => {
		let query = '';
		if (options && options.data) {
			query += `?${queryStringify(options.data)}`;
		}
    return this.request(this.endpoint + `${url}${query}`, { ...options, method: METHODS.GET });
  }

  put: HTTPMethod = (path = '/', data) => {
    return this.request(this.endpoint + path, { data, method: METHODS.PUT });
  }

  post: HTTPMethod = (path = '/', data) => {
    return this.request(this.endpoint + path, { data, method: METHODS.POST });
  }

  delete: HTTPMethod = (path = '/', data) => {
    return this.request(this.endpoint + path, { data, method: METHODS.DELETE });
  }

  request<Response>(url: string, options: Options, timeout = 5000): Promise<Response> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method as string, url);
      if (options.headers) {
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
      }

      xhr.onload = function() {
        resolve(xhr.response);
      };

      xhr.timeout = timeout;
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      xhr.ontimeout = function () {
        reject(new Error('Request timed out'));
      };

      if (options.method === METHODS.GET) {
        xhr.send();
      } else {
        if (options.data instanceof FormData) {
          // Если данные - FormData, отправляем их без установки Content-Type
          xhr.send(options.data);
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify(options.data));
        }
      }
    });
  }
}

export { HTTPTransport };
