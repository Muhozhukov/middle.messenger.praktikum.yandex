type Indexed<T = unknown> = {
  [key in string]: T;
};

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const keys = path.split('.');
  let currentObject: Indexed | unknown = object;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      // Если это последний ключ, устанавливаем значение
      (currentObject as Indexed)[key] = value;
    } else {
      // Если ключ не существует, создаем пустой объект
      if (!(key in (currentObject as Indexed))) {
        (currentObject as Indexed)[key] = {};
      }
      // Переходим к следующему уровню вложенности
      currentObject = (currentObject as Indexed)[key];
    }
  }

  return object;
}

export const formatTime = (inputTime: string) => {
    const date = new Date(inputTime);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    return formattedTime;
}
