interface Options {
  headers: {
    [key: string]: string;
  },
  data: {
    [key: string]: string
  },
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  timeout: number,
}

const METHODS: Record<string, 'GET' | 'PUT' | 'POST' | 'DELETE'> = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

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
  get = (url: string, options: Options) => {
		let query = url;
		if (options.data) {
			query += queryStringify(options.data);
		}
		console.log(options.data)
		console.log(`${url}?${query}`)
    return this.request(`${url}?${query}`, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      if (options.headers) {
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
      }

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.timeout = timeout;

      xhr.ontimeout = function () {
        reject(new Error('Request timed out'));
      };

      if (options.method === METHODS.GET || options.method === METHODS.DELETE) {
        xhr.send();
      } else {
        // xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(options.data));
      }
    });
  };
}

export { HTTPTransport };
