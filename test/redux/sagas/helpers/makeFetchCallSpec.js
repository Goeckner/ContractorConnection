import {
  get,
  makeFetchCall,
} from '../../../../src/client/redux/sagas/helpers/makeFetchCall'

const fetchSuccess = {
  ok: true,
  json: () => new Promise(resolve => resolve({ text: 'success!' })),
  text: () => new Promise(resolve => resolve('success!')),
  status: 200,
  statusText: 'Good Job Pat!',
}

const fetchFailure = {
  ok: false,
  json: () => new Promise(resolve => resolve({ text: 'failure!' })),
  status: 400,
  statusText: 'Bad Job Pat!',
}

describe('makeFetchCall()', () => {
  it('returns a function', () => {
    expect(typeof makeFetchCall('GET')).toEqual('function')
  })
})

describe('Convenience Functions: get(), post(), put(), del()', () => {
  beforeEach(() => {
    fetch = jest.fn() // eslint-disable-line no-global-assign
  })

  it('returns a payload and no errors on success for application/json', async () => {
    const expectedPayload = {
      error: false,
      payload: { text: 'success!' },
      statusCode: 200,
      statusText: 'Good Job Pat!',
    }

    fetch.mockReturnValue({
      ...fetchSuccess,
      headers: {
        get: () => 'application/json',
      },
    })
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })

  it('returns a payload and no errors on success for application/json; charset=utf-8', async () => {
    const expectedPayload = {
      error: false,
      payload: { text: 'success!' },
      statusCode: 200,
      statusText: 'Good Job Pat!',
    }

    fetch.mockReturnValue({
      ...fetchSuccess,
      headers: {
        get: () => 'application/json; charset=utf-8',
      },
    })
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })

  it('returns a payload and no errors on success for text/plain', async () => {
    const expectedPayload = {
      error: false,
      payload: 'success!',
      statusCode: 200,
      statusText: 'Good Job Pat!',
    }

    fetch.mockReturnValue({
      ...fetchSuccess,
      headers: {
        get: () => 'text/plain',
      },
    })
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })

  it('returns a payload and no errors on success for text/plain; charset=utf-8', async () => {
    const expectedPayload = {
      error: false,
      payload: 'success!',
      statusCode: 200,
      statusText: 'Good Job Pat!',
    }

    fetch.mockReturnValue({
      ...fetchSuccess,
      headers: {
        get: () => 'pats/special/type',
      },
    })
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })

  it('returns a payload, code, text, with error on failure', async () => {
    const expectedPayload = {
      error: true,
      payload: { text: 'failure!' },
      statusCode: 400,
      statusText: 'Bad Job Pat!',
    }

    fetch.mockReturnValue({
      ...fetchFailure,
      headers: {
        get: () => 'application/json',
      },
    })
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })

  it('returns null payload, code, with error and text on network failure', async () => {
    const expectedPayload = {
      error: true,
      payload: 'Could not make request: check your network connection.',
      statusCode: null,
      statusText: 'Could not make request: check your network connection.',
    }

    fetch.mockReturnValue(new Error())
    expect(await get({ url: 'localhost' })).toEqual(expectedPayload)
  })
})
