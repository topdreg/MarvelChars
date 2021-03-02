import {renderHook} from '@testing-library/react-hooks';
import useFetchMarvelCharacters from '../hooks/use-fetch-marvel-characters';

describe('use the hook', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('API call is successful', async () => {
    const data = {
      results: [
        {
          name: 'Character1',
        },
        {
          name: 'Character2',
        },
      ],
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      }),
    );
    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchMarvelCharacters(),
    );
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    expect(result.current.characters).toEqual(data.results);
    expect(result.current.apiError).toEqual(false);
  });
  it('API call is unsuccessful', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchMarvelCharacters(),
    );
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    expect(result.current.apiError).toEqual(true);
  });
});
