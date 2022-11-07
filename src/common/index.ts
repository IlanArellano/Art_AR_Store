import 'intl';
import 'intl/locale-data/jsonp/en-US';
import 'intl/locale-data/jsonp/es-MX';

export const EmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const VISA_CARD_NUMBER_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/;

export const isValidCard = (card: string): boolean =>
  VISA_CARD_NUMBER_REGEX.test(card);

export const isValidEmail = (email: string): boolean => EmailRegex.test(email);

const PARABILIUM_API = 'https://test-emision.efevoo.app';

type ErrorType = 'html' | 'unknown' | 'json';

export interface PostResponse<IData> {
  success: boolean;
  fatal?: boolean;
  errorType?: ErrorType;
  data: IData;
}

const getErrorType = (data: string): ErrorType | undefined => {
  if (data.startsWith('<')) return 'html';
};

export const FetchPost = async <T = string>(
  endpoint: string,
  body?: any,
  headers?: HeadersInit,
  querys?: Object,
): Promise<PostResponse<T>> => {
  try {
    const response = await fetch(`${PARABILIUM_API}${endpoint}/`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    let data = await response.text();
    const result: T | string = !data.startsWith('<') ? JSON.parse(data) : data;
    return {
      data: result as T,
      success: true,
      errorType: getErrorType(data),
    };
  } catch (e) {
    return {
      data: e as T,
      success: false,
      fatal: true,
    };
  }
};

/**Verifica si el resultado de una funcion devuelve una promesa */
export const isPromise = (p: any): boolean => p instanceof Promise;

/**Pausa el proceso de una funcion asincrona por una cantidad de segundos, si no se le pasa la cantidad de tiempo la funcion no tendra efecto */
export const Sleep = (s?: number): Promise<void> =>
  new Promise<void>(resolve => setTimeout(resolve, (s ?? 0) * 1000));

/** Devuelve un nuevo Objeto omitiendo las keys que se les pase como parametros */
export const Omit = <T extends {}, Omits extends keyof T>(
  obj: T,
  ...omits: Omits[]
): Partial<T> => {
  let newObject = {} as T;
  Object.keys(obj).forEach(x => {
    if (omits.some(omit => omit === x)) return;
    newObject[x as keyof T] = obj[x as keyof T];
  });
  return newObject;
};

/**Devuelve la suma total de todos los elementos del array de numeros */
export const Sum = (arr: number[]) =>
  arr.reduce((partial, a) => partial + a, 0);

export const CheckEmptyValues = <T>(values: T, fields: (keyof T)[]) =>
  fields.filter(x => String(values[x]) === '').length > 0;

export const moneyFormat = (amount: number | string): string => {
  const mount = Number(amount);
  if (isNaN(mount)) return '0';
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    minimumFractionDigits: 2,
    style: 'currency',
  });
  return formatter.format(mount);
};
