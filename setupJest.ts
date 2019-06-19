import 'jest-preset-angular';

const localStorage = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

const sessionStorage = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'localStorage', { value: localStorage() });
Object.defineProperty(window, 'sessionStorage', { value: sessionStorage() });

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
      getPropertyValue: (prop) => {
          return '';
      }
  })
});
