const existsMock = jest.fn();
existsMock.mockReturnValueOnce({ then: jest.fn() });

export default {
  DocumentDir: () => {},
  ImageCache: {
    get: {
      clear: () => {}
    }
  },
  fs: {
    writeFile: () => new Promise(((resolve) => {
      resolve('done');
    })),
    exists: existsMock,
    dirs: {
      MainBundleDir: () => {},
      CacheDir: () => {},
      DocumentDir: () => {}
    }
  }
};
