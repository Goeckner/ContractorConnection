// import 'whatwg-fetch'

// // These default headers are closed over in the function returned
// // by makeFetchCall(). Edit them to include any default headers
// // that you need on every call to the resulting networkCall().
// const defaultHeaders = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// }

// // Returns a async closure that will make a nework call using fetch().
// // fetch() is a low-level Browser API --- a polyfill is included for
// // both Promise and fetch() via https://github.github.io/fetch/. That
// // package only uses the polyfill if window.fetch() is not available.
// export const makeFetchCall = globalMethod => async function networkCall({
//   url,
//   method = globalMethod,
//   body = null,
//   headers = {},
//   credentials = 'omit',
// }) {
//   try {
//     const response = await fetch(url, {
//       headers: { ...defaultHeaders, ...headers },
//       method,
//       body,
//       credentials,
//     })
//     const contentType = response.headers.get('Content-Type')

//     if (/^application\/json;?\s*?([a-zA-Z=\-0-9]*)?$/.test(contentType)) {
//       return {
//         payload: await response.json(),
//         statusCode: response.status,
//         statusText: response.statusText,
//         error: !response.ok,
//       }
//     }

//     return {
//       payload: await response.text(),
//       statusCode: response.status,
//       statusText: response.statusText,
//       error: !response.ok,
//     }
//   } catch (e) {
//     return {
//       payload: 'Could not make request: check your network connection.',
//       statusCode: null,
//       statusText: 'Could not make request: check your network connection.',
//       error: true,
//     }
//   }
// }

// // Three convenience functions that exported -- each of which is named for
// // the HTTP method they perform in the closure resulting from makeFetchCall().
// export const get = makeFetchCall('GET')
// export const post = makeFetchCall('POST')
// export const put = makeFetchCall('PUT')
// export const del = makeFetchCall('DELETE')
